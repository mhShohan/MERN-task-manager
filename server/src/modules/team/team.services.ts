import { ITeam } from './team.interface';
import Team from './team.model';

const createTeam = async (payload: ITeam) => {
  return await Team.create(payload);
};

const deleteTeam = async (id: string) => {
  return await Team.findByIdAndDelete(id);
};

const updateTeamName = async (id: string, data: { name: string }) => {
  return await Team.findByIdAndUpdate(id, data, { new: true });
};

const teamServices = { createTeam, deleteTeam, updateTeamName };

export default teamServices;
