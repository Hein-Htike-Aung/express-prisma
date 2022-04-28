import { Request, Response } from 'express';
import * as bookService from './book.service';

export const createBook = async (request: Request, response: Response) => {
  return response.json(await bookService.createBook(request.body));
};

export const getBooks = async (request: Request, response: Response) => {
  return response.json(await bookService.getBooks());
};

export const getOneBook = (request: Request, response: Response) => {};

export const updateBook = async (request: Request, response: Response) => {
  const { id } = request.params;

  const { categoryId, ...bookDto } = request.body;

  return response.json(
    await bookService.updateBook(+id, {
      ...bookDto,
      categories: {
        connect: {
          id: categoryId,
        },
      },
    })
  );
};

export const deleteBook = (request: Request, response: Response) => {};
