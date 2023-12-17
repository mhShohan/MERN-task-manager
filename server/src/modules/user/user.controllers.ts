import StatusCode from '../../lib/StatusCode';
import asyncHandler from '../../lib/asyncHandler';
import sendResponse from '../../lib/sendResponse';
import generateToken from '../../utils/generateToken';
import userServices from './user.services';

const register = asyncHandler(async (req, res) => {
  const user = await userServices.create(req.body);

  const token = generateToken({ _id: user._id, email: user.email });

  sendResponse(res, {
    statusCode: StatusCode.CREATED,
    success: true,
    message: 'Registered successfully!',
    data: { token },
  });
});

const getSingleUser = asyncHandler(async (req, res) => {
  const user = await userServices.getUser(req.params.id);

  sendResponse(res, {
    statusCode: StatusCode.OK,
    success: true,
    message: 'User retrieved successfully!',
    data: user,
  });
});

const login = asyncHandler(async (req, res) => {
  const user = await userServices.login(req.body);

  const token = generateToken({ _id: user._id, email: user.email });

  sendResponse(res, {
    statusCode: StatusCode.OK,
    success: true,
    message: 'Login successfully!',
    data: { token },
  });
});

const getAll = asyncHandler(async (_req, res) => {
  const users = await userServices.getAllUser();

  sendResponse(res, {
    statusCode: StatusCode.OK,
    success: true,
    message: 'All Users retrieved successfully!',
    data: users,
  });
});

const userController = { register, getSingleUser, login, getAll };

export default userController;
