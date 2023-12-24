import asyncHandler from '../../lib/asyncHandler';
import sendResponse from '../../lib/sendResponse';
import teamServices from './team.services';

const createTeam = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const creatorId = req.user._id;
  const team = await teamServices.createTeam({ name, creatorId });

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Team created successfully!',
    data: team,
  });
});

const deleteTeam = asyncHandler(async (req, res) => {
  await teamServices.deleteTeam(req.params.id, req.user._id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Team deleted successfully!',
    data: null,
  });
});

const updateTeam = asyncHandler(async (req, res) => {
  const team = await teamServices.updateTeamName(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Team updated successfully!',
    data: team,
  });
});

const GetAllTeam = asyncHandler(async (req, res) => {
  const teams = await teamServices.getAllTeamOfCreator(req.user._id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Team Retrieves successfully!',
    data: teams,
  });
});

const teamController = { createTeam, deleteTeam, updateTeam, GetAllTeam };

export default teamController;
