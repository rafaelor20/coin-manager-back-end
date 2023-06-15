import { Transaction } from '@prisma/client';
import { notFoundError } from '@/errors';
import { badRequestError } from '@/errors/bad-request-error';
import transactionRepository from '@/repositories/transaction-repository';

async function getHistoric(userId: number) {
  return transactionRepository.getHistoric(userId);
}

async function storeTransaction(userId: number, { user_id, description, amount, category }: CreateTransactionParams) {
  return transactionRepository.storeTransaction({ user_id, description, amount, category });
}

export type CreateTransactionParams = Pick<Transaction, 'user_id' | 'description' | 'amount' | 'category'>;

const transactionService = {
  getHistoric,
  storeTransaction,
};

export default transactionService;
