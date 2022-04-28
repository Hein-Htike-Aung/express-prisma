import { Request, Response } from 'express';
import * as userService from './user.service';

export const createUser = async (request: Request, response: Response) => {
  const { address, ...userDto } = request.body;

  const newUser = await userService.createUser({
    ...userDto,
    address: { create: address },
  });

  return response.json(newUser);
};

export const createAddress = async (request: Request, response: Response) => {
  return response.json(await userService.createAddress(request.body()));
};

export const getAddresses = async (request: Request, response: Response) => {
  return response.json(await userService.getAddresses());
};

export const getUsers = async (request: Request, response: Response) => {
  return response.json(await userService.getUsers());
};

export const getOneUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  return response.json(await userService.getOneUser(+id));
};

export const updateUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  return response.json(await userService.updateUser(+id, request.body));
};

/* 
  One user can be author and editor at the same time
  An author can be another User's editor
*/
export const updateUserAsAuthor_Editor = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;

  const { editorId, ...authorDto } = request.body;

  const updatedAuthor = await userService.updateUserAs_Publisher_Author_Editor(
    +id,
    {
      ...authorDto,
      editor: {
        connect: {
          id: editorId,
        },
      },
    }
  );

  return response.json(updatedAuthor);
};

/* 
  One Author has Many Publishers
  One Publishers has Many Authors
*/
export const updateAuthors_Publishers = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;

  const { authorId, ...publisherDto } = request.body;

  const updatedPublisher =
    await userService.updateUserAs_Publisher_Author_Editor(+id, {
      ...publisherDto,
      authors: {
        connect: {
          id: authorId,
        },
      },
    });

  return response.json(updatedPublisher);
};

export const deleteUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  return response.json(await userService.deleteUser(+id));
};
