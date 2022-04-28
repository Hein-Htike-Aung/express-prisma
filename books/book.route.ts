import {
  createBook,
  deleteBook,
  getBooks,
  getOneBook,
  updateBook,
} from './book.controller';

import { Router } from 'express';

export const bookRouter = Router();

bookRouter.post('/', createBook);

bookRouter.get('/', getBooks);

bookRouter.get('/:id', getOneBook);

bookRouter.patch('/:id', updateBook);

bookRouter.delete('/:id', deleteBook);
