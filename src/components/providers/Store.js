// 各アクション名と対応する関数を呼び出す
export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const setBudgetAmount = (state, action) => {
  // 予算額を設定する
  // action.payloadからamountを取り出す
  // 戻り値としてbudgetAmountをamountで更新したstateを返す
};

const addExpense = (state, action) => {
  // 支出を新規追加する
  // action.payloadからexpenseを取り出す
  // 現在のexpensesからidの最大値を取り出す
  // 現在のidの最大値に1を加算する
  // 戻り値としてexpensesにexpenseをconcatしたstateを返す
};

const deleteExpense = (state, action) => {
  // 支出を削除する
  // action.payloadからidを取り出す
  // 戻り値としてexpensesからid以外のstateを返す
};

const editExpense = (state, action) => {
  // 支出を更新する
  // action.payloadからexpenseを取り出す
  // 戻り値としてexpensesのmap処理で
  // idが等しい要素をexpenseで更新したstateを返す
};
