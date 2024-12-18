'use server';

import { prisma } from '@/utils/prisma';

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    console.log('ALL USERS', users);
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function postUser() {
  const newUser = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'XOq0R@example.com',
    },
  });

  console.log('NEW USER', newUser);

  return newUser;
}
