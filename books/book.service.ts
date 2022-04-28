import { prisma } from './../config/index';

export const createBook = (bookDto: any) => {
  return prisma.book.create({ data: bookDto, include: { author: true } });
};

export const getBooks = () => {
  return prisma.book.findMany({ include: { author: true, categories: true } });
};

export const getOneBook = (id: number) => {};

export const updateBook = (id: number, bookDto: any) => {
  return prisma.book.update({
    data: bookDto,
    where: { id },
    include: { categories: true, author: true },
  });
};

export const deleteBook = (id: number) => {};
