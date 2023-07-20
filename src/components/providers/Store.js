export const reducer = (state, action) => {
  switch (action.type) {
    case 'setBudgetAmount' : return setBudgetAmount(state,action);
    case 'addExpense' : return addExpense(state, action);
    case 'editExpense' : return editExpense(state, action);
    case 'deleteExpense' : return deleteExpense(state,action);
    default: return state;
  }
};

const setBudgetAmount = (state, action) => {
  const { amount } = action.payload;
  return {
    ...state,
    budgetAmount : amount,
  };
};

const addExpense = (state, action) => {
  const { expense } = action.payload;
  const maxId = Math.max(...state.expenses.map((e) => e.id)) + 1;
  expense.id = maxId;
  return {
    ...state,
    expenses : state.expenses.concat(expense),
  };
};

const deleteExpense = (state, action) => {
  const { id } = action.payload;
  return {
    ...state,
    expenses : state.expenses.filter(e => e.id !== id),
  };
};

const editExpense = (state, action) => {
  const { expense } = action.payload;
  return {
    ...state,
    expenses : state.expenses.map(e => {
      if (e.id === expense.id) {
        e = expense;
      }
      return e;
    }),
  };
};
