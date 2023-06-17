import { User, UserCredit } from '@prisma/client';
import faker from '@faker-js/faker';
import { prisma } from '@/config';

export async function createCredit(params: Partial<User> = {}): Promise<UserCredit> {
  return prisma.userCredit.create({
    data: {
      user_id: params.id || 12,
      debtor: faker.word.preposition(),
      amount: 3214,
      payDate: faker.date.soon(),
    },
  });
}
