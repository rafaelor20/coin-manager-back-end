import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function getDebts(userId: number) {
  return prisma.userDebt.findMany({
    where: { user_id: userId },
  });
}

async function storeDebt(data: Prisma.UserDebtUncheckedCreateInput) {
  return prisma.userDebt.create({ data });
}

const debtRepository = {
  getDebts,
  storeDebt,
};

export default debtRepository;
