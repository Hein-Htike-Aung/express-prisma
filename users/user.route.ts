import {
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
  createUser,
  createAddress,
  getAddresses,
  updateUserAsAuthor_Editor,
  updateAuthors_Publishers,
} from './user.controller';
import { Router } from 'express';

export const userRouter = Router();

userRouter.post('/', createUser);

userRouter.post('/address', createAddress);

userRouter.get('/address', getAddresses);

userRouter.get('/', getUsers);

userRouter.get('/:id', getOneUser);

userRouter.patch('/:id', updateUser);

userRouter.delete('/:id', deleteUser);

userRouter.patch('/author/:id', updateUserAsAuthor_Editor);

userRouter.patch('/publishers/:id', updateAuthors_Publishers);
