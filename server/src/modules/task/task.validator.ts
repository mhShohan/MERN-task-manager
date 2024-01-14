import { z } from 'zod';

const createSchema = z.object({
  title: z.string(),
  description: z.string(),
  teamId: z.string(),
  assignTo: z.string(),
  deadLine: z.string().optional(),
});

const updateSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  assignTo: z.string().optional(),
  deadLine: z.string().optional(),
});

const taskValidator = {
  createSchema,
  updateSchema,
};

export default taskValidator;
