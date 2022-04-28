import { Request, Response } from 'express';
import * as categoryService from './category.service';

export const createCategory = async (request: Request, response: Response) => {
  const newCategory = await categoryService.createCategory(request.body);

  return response.json(newCategory);
};

export const getCategories = async (request: Request, response: Response) => {
  return response.json(await categoryService.getCategories());
};

export const getOneCategory = (request: Request, response: Response) => {};

/* 
  3 Categories (Web, FrontEnd, Backend)
  FrontEnd has Web Category Parent Id
  BackEnd has Web Category Parent Id
  Web has FrontEnd and Backend as its SubCategories
*/
export const updateCategory = async (request: Request, response: Response) => {
  const { id } = request.params;

  const { parentCategoryId, ...categoryDto } = request.body;

  const updatedCategory = await categoryService.updateCategory(+id, {
    ...categoryDto,
    parentCategory: {
      connect: {
        id: parentCategoryId,
      },
    },
  });

  return response.json(updatedCategory);
};

export const deleteCategory = (request: Request, response: Response) => {};
