import express from 'express';
import expensesControllers from '../controllers/expensesControllers.js';
import { auth } from '../middlewares/auth.js';
const expenseRouter = express.Router();

expenseRouter.post('/create', auth, expensesControllers.createExpenses);

expenseRouter.get("/", expensesControllers.listExpenses);
expenseRouter.delete("/delete/:expensesId", expensesControllers.deleteExpenses);



export default expenseRouter;