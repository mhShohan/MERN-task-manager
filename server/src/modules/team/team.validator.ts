import { z } from 'zod';
import zodMessage from '../../utils/zodMessage';

const createTeamSchema = z.object({
  name: z.string(zodMessage('name')).trim(),
});

const updateTeamSchema = z.object({
  name: z.string(zodMessage('name')).trim(),
});

const teamValidator = { createTeamSchema, updateTeamSchema };

export default teamValidator;
