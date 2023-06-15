import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function getHistoric(userId: number) {
  return prisma.transaction.findMany({
    where: { user_id: userId },
  });
}

async function storeTransaction(data: Prisma.TransactionUncheckedCreateInput) {
  return prisma.transaction.create({ data });
}

const transactionRepository = {
  getHistoric,
  storeTransaction,
};

export default transactionRepository;
