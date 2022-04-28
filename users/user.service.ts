import { prisma } from './../config/index';

export const createUser = (userDto: any) => {
  return prisma.user.create({ data: userDto });
};

export const createAddress = (addressDto: any) => {
  return prisma.address.create({ data: addressDto });
};

export const getAddresses = () => {
  return prisma.address.findMany();
};

export const getUsers = () => {
  return prisma.user.findMany({ include: { address: true, book: true } });
};

export const getOneUser = (id: number) => {
  return prisma.user.findUnique({
    where: { id: +id },
    include: { address: true, book: true, editor: true, author: true, publishers: true, authors: true },
  });
};

export const updateUser = (id: number, userDto: any) => {
  return prisma.user.update({ where: { id }, data: userDto });
};

export const updateUserAs_Publisher_Author_Editor = (
  id: number,
  userDto: any
) => {
  return prisma.user.update({
    where: { id },
    data: userDto,
    include: { editor: true, author: true },
  });
};

export const deleteUser = (id: number) => {
  return prisma.user.delete({ where: { id } });
};
