import asyncHandler from '../../lib/asyncHandler';
import sendResponse from '../../lib/sendResponse';
import teamServices from './team.services';

const createTeam = asyncHandler(async (req, res) => {
  const team = await teamServices.createTeam(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Team created successfully!',
    data: team,
  });
});

const teamController = { createTeam };

export default teamController;
