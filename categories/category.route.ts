import { createCategory, deleteCategory, getCategories, getOneCategory, updateCategory } from './category.controller';

import { Router } from 'express';

export const categoryRouter = Router();

categoryRouter.post('/', createCategory);

categoryRouter.get('/', getCategories);

categoryRouter.get('/:id', getOneCategory);

categoryRouter.patch('/:id', updateCategory);

categoryRouter.delete('/:id', deleteCategory);
