import { categoryRouter } from './categories/category.route';
import { bookRouter } from './books/book.route';
import { userRouter } from './users/user.route';
import express from 'express';

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use('/categories', categoryRouter);

export { app };
