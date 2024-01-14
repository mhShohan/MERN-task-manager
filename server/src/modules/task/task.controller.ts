import CustomError from '../../errorHandler/customError';
import StatusCode from '../../lib/StatusCode';
import asyncHandler from '../../lib/asyncHandler';
import sendResponse from '../../lib/sendResponse';
import taskServices from './task.services';

const create = asyncHandler(async (req, res) => {
  const result = await taskServices.create(req.body);

  sendResponse(res, {
    statusCode: StatusCode.CREATED,
    success: true,
    message: 'Task created successfully!',
    data: result,
  });
});

const update = asyncHandler(async (req, res) => {
  const result = await taskServices.update(req.params.id, req.body);

  sendResponse(res, {
    statusCode: StatusCode.OK,
    success: true,
    message: 'Task update successfully!',
    data: result,
  });
});

const remove = asyncHandler(async (req, res) => {
  await taskServices.delete(req.params.id);

  sendResponse(res, {
    statusCode: StatusCode.OK,
    success: true,
    message: 'Task deleted successfully!',
    data: null,
  });
});

const getSingle = asyncHandler(async (req, res) => {
  const result = await taskServices.getSingleById(req.params.id);

  sendResponse(res, {
    statusCode: StatusCode.OK,
    success: true,
    message: 'Task retrieved successfully!',
    data: result,
  });
});

const getAll = asyncHandler(async (req, res) => {
  const team = req.query.team;
  if (!team) throw new CustomError(400, 'Must select a team');
  const results = await taskServices.getAll({ teamId: team });

  sendResponse(res, {
    statusCode: StatusCode.OK,
    success: true,
    message: 'All Tasks retrieved successfully!',
    data: results,
  });
});

const taskController = { getSingle, getAll, create, remove, update };

export default taskController;
