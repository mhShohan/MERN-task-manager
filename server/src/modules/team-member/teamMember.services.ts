import { Types } from 'mongoose';
import CustomError from '../../errorHandler/customError';
import StatusCode from '../../lib/StatusCode';
import Team from '../team/team.model';
import ITeamMember from './teamMember.interface';
import TeamMember from './teamMember.model';

class TeamMemberService {
  private model = TeamMember;

  async create(creatorId: string, payload: ITeamMember) {
    const team = await Team.findById(payload.teamId);

    if (team && String(team?.creatorId) !== creatorId) {
      throw new CustomError(StatusCode.BAD_REQUEST, 'You are not author of this team');
    }

    const existInTeam = await this.model.findOne(payload);
    if (existInTeam) throw new CustomError(StatusCode.BAD_REQUEST, 'Team member already exist in this team!');

    return this.model.create(payload);
  }

  async delete(userId: string, id: string) {
    const member = await this.model.findById(id);
    if (!member) throw new CustomError(404, 'Not Found!');

    const creatorId = await this.model.aggregate([
      {
        $match: {
          _id: new Types.ObjectId(id),
        },
      },
      {
        $lookup: {
          from: 'teams',
          localField: 'teamId',
          foreignField: '_id',
          as: 'team',
        },
      },
      { $unwind: '$team' },
      {
        $project: {
          creatorId: '$team.creatorId',
          _id: 0,
        },
      },
    ]);

    if (String(creatorId[0].creatorId) !== userId) {
      throw new CustomError(StatusCode.FORBIDDEN, 'Only can delete by creator of this team!');
    }

    //cannot able to delete a creator of team
    if (String(member.userId) === userId) {
      throw new CustomError(StatusCode.FORBIDDEN, 'Cannot delete own-self from team!');
    }

    return this.model.findByIdAndDelete(id);
  }
}

const teamMemberService = new TeamMemberService();

export default teamMemberService;
