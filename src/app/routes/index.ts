import express from 'express';
import { categoryRouter } from '../modules/Category/category.route';
import { componentRouter } from '../modules/Component/component.route';
import { userRouter } from '../modules/User/user.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/category',
    routes: categoryRouter,
  },
  {
    path: '/component',
    routes: componentRouter,
  },
  {
    path: '/user',
    routes: userRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));

export default router;
