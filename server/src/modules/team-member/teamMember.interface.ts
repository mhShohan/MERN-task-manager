import { Types } from 'mongoose';

interface ITeamMember {
  userId: Types.ObjectId;
  teamId: Types.ObjectId;
}

export default ITeamMember;
