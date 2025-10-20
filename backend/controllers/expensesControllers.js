import { request } from "express";
import Expenses from "../models/expensesModel.js";

const expensesControllers = {
  createExpenses: async (req, res) => {
    try {
      const { expenseDesc, expenseAmount } = req.body;
      if (!expenseDesc || !expenseAmount)
        return res
          .status(400)
          .json({ msg: "Please enter your expenses description or amount" });
      const newExpense = new Expenses({
        expenseDesc,
        expenseAmount,
        postedBy: req.user,
      });

      await (await newExpense.save()).populate("postedBy", "-password");

      return res
        .status(201)
        .json({ msg: "New expenses added successfully", data: newExpense });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  listExpenses: async (req, res) => {
    try {
      const expenses = await expenses.find()
        .sort({ createdAt: -1 })
        .populate("postedBy", "-password");
      return res.status(200).json({ msg: "All expenses", data: expenses });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteExpenses: async (req, res) => {
    try {
      const expensesId = req.params.expensesId;

      // if (!expensesId)
      //     return res.status(400).json({ msg: 'Id not found' });

      const expenses = await expenses.findOne({ expensesId });

      // if (!expenses)
      //     return res.status(400).json({ msg: 'expenses not found' });

      const deletedExpenses = await expenses.findByIdAndDelete(expensesId);
      return res
        .status(200)
        .json({ msg: "expenses deleted successfully", data: deletedExpenses });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default expensesControllers;
