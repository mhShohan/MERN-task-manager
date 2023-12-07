import { z } from "zod"
import zodMessage from "../../utils/zodMessage"

const createTeamSchema = z.object({
  name: z.string(zodMessage('name')).trim(),
  userId: z.string(zodMessage('userId')).trim(),
  role: z.enum(['CREATOR', 'MEMBER'])
})


const teamValidator = { createTeamSchema }

export default teamValidator