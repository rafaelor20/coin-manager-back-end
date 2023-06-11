import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function getHistoric(userId: number) {
  return prisma.transaction.findMany({
    where: { user_id: userId },
  });
}

const transactionRepository = {
  getHistoric,
};

export default transactionRepository;
