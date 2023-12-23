import asyncHandler from '../../lib/asyncHandler';
import sendResponse from '../../lib/sendResponse';
import teamMemberService from './teamMember.services';

const addTeamMember = asyncHandler(async (req, res) => {
  const member = await teamMemberService.create(req.user._id, { userId: req.body.userId, teamId: req.body.teamId });

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'member added successfully!',
    data: member,
  });
});
const removeTeamMember = asyncHandler(async (req, res) => {
  await teamMemberService.delete(req.user._id, req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'member delete successfully!',
    data: null,
  });
});

const teamMemberController = { addTeamMember, removeTeamMember };

export default teamMemberController;
