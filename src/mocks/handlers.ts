// src/mocks/handlers.js
import { rest } from 'msw';
import { userItems } from './data';

export const handlers = [
  rest.get('/items', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userItems));
  }),
];
