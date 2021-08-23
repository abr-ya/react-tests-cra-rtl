import { rest } from 'msw';

export const handlers = [
  rest.get(`${process.env.REACT_APP_SERVER}/scoops`, (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/chocolate.png' },
        { name: 'Vanilla', imagePath: '/images/vanilla.png' },
      ])
    );
  }),
  rest.get(`${process.env.REACT_APP_SERVER}/toppings`, (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Cherries', imagePath: '/images/cherries.png' },
        { name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
        { name: 'Hot fudge', imagePath: '/images/hot-fudge.png' },
      ])
    );
  }),
  rest.post(`${process.env.REACT_APP_SERVER}/order`, (req, res, ctx) => {
    return res(ctx.json({ orderNumber: 123455676 }));
  }),
];
