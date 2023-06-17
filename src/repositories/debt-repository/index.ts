import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function getDebts(userId: number) {
  return prisma.userDebt.findMany({
    where: { user_id: userId },
  });
}

async function storeTransaction(data: Prisma.TransactionUncheckedCreateInput) {
  return prisma.transaction.create({ data });
}

const debtRepository = {
  getDebts,
};

export default debtRepository;
