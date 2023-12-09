import { z } from 'zod';
import zodMessage from '../../utils/zodMessage';

const createTeamSchema = z.object({
  name: z.string(zodMessage('name')).trim(),
  creatorId: z.string(zodMessage('creatorId')).trim(), // @TODO
});

const updateTeamSchema = z.object({
  name: z.string(zodMessage('name')).trim(),
});

const teamValidator = { createTeamSchema, updateTeamSchema };

export default teamValidator;
