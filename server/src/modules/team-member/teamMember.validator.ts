import { z } from 'zod';
import zodMessage from '../../utils/zodMessage';

const addTeamMemberSchema = z.object({
  teamId: z.string(zodMessage('teamId')),
  userId: z.string(zodMessage('userId')),
});

const teamMemberValidator = { addTeamMemberSchema };

export default teamMemberValidator;
