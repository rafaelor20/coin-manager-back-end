import { notFoundError } from '@/errors';
import { badRequestError } from '@/errors/bad-request-error';
import transactionRepository from '@/repositories/transaction-repository';

async function getHistoric(userId: number) {
  return transactionRepository.getHistoric(userId);
}

const transactionService = {
  getHistoric,
};

export default transactionService;
