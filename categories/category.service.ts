import { prisma } from './../config/index';

export const createCategory = (userDto: any) => {
  return prisma.category.create({ data: userDto });
};

export const getCategories = () => {
  return prisma.category.findMany({
    include: { books: true, subCategories: true, parentCategory: true },
  });
};

export const getOneCategory = (id: number) => {};

export const updateCategory = (id: number, userDto: any) => {
  return prisma.category.update({
    where: { id },
    data: { ...userDto },
    include: { subCategories: true, parentCategory: true },
  });
};

export const deleteCategory = (id: number) => {};
