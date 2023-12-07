import { ITeam } from './team.interface';
import Team from './team.model';

const createTeam = async (payload: ITeam) => {
  return await Team.create(payload);
};

const teamServices = { createTeam };

export default teamServices;
