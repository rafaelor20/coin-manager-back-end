import { faker } from '@faker-js/faker';
import * as jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import supertest from 'supertest';
import { cleanDb, generateValidToken } from '../helpers';
import { createUser, createCredit } from '../factories';
import { prisma } from '@/config';
import app, { init } from '@/app';

beforeAll(async () => {
  await init();
  await cleanDb();
});

beforeEach(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe('GET /credits', () => {
  it('should respond with status 401 if no token is given', async () => {
    const response = await server.get('/credits');

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it('should respond with status 401 if given token is not valid', async () => {
    const token = faker.lorem.word();

    const response = await server.get('/credits').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it('should respond with status 401 if there is no session for given token', async () => {
    const userWithoutSession = await createUser();
    const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

    const response = await server.get('/credits').set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  describe('when token is valid', () => {
    it('should respond with status 200 and return historic', async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      const credit = await createCredit(user);

      const response = await server.get('/credits').set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(httpStatus.OK);
      expect(response.body).toEqual([
        {
          id: expect.any(Number),
          user_id: credit.user_id,
          debtor: credit.debtor,
          amount: credit.amount,
          createdAt: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/),
          payDate: expect.stringMatching(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/),
        },
      ]);
    });
  });
});
