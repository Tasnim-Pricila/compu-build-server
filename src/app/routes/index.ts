import express from 'express';
import { categoryRouter } from '../modules/Category/category.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/category',
    routes: categoryRouter,
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));

export default router;
