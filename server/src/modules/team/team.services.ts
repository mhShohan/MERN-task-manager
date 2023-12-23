import mongoose from 'mongoose';
import CustomError from '../../errorHandler/customError';
import TeamMember from '../team-member/teamMember.model';
import { ITeam } from './team.interface';
import Team from './team.model';
import StatusCode from '../../lib/StatusCode';

const createTeam = async (payload: ITeam) => {
  const teamWithCreatorId = await Team.findOne(payload);

  if (teamWithCreatorId) {
    throw new CustomError(400, 'Team is already exists with the name: ' + payload.name);
  }

  const session = await mongoose.startSession();
  try {
    await session.startTransaction();

    const result = await Team.create([payload], { session });
    await TeamMember.create([{ userId: payload.creatorId, teamId: result[0]?._id }], { session });

    await session.commitTransaction();
    await session.endSession();
    return result[0];
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new CustomError(StatusCode.BAD_REQUEST, 'Team cannot be created');
  }
};

const deleteTeam = async (id: string) => {
  return await Team.findByIdAndDelete(id);
};

const updateTeamName = async (id: string, data: { name: string }) => {
  const team = await Team.findOne({ _id: id });
  const teamWithCreatorId = await Team.findOne({
    name: data.name,
    creatorId: team?.creatorId,
  });

  if (teamWithCreatorId) {
    throw new CustomError(400, 'Team is already exists with the name: ' + data.name);
  }

  return await Team.findByIdAndUpdate(id, data, { new: true });
};

const getAllTeamOfCreator = async (creatorId: string) => {
  return await Team.find({ creatorId });
};

const teamServices = {
  createTeam,
  deleteTeam,
  updateTeamName,
  getAllTeamOfCreator,
};

export default teamServices;
