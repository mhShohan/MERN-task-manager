import CustomError from '../../errorHandler/customError';
import { ITeam } from './team.interface';
import Team from './team.model';

const createTeam = async (payload: ITeam) => {
  const teamWithCreatorId = await Team.findOne(payload);

  if (teamWithCreatorId) {
    throw new CustomError(
      400,
      'Team is already exists with the name: ' + payload.name,
    );
  }

  return await Team.create(payload);
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
    throw new CustomError(
      400,
      'Team is already exists with the name: ' + data.name,
    );
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
