import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DispatchContext } from './../providers/DispatchContext';

export const ExpenseDeleteData = () => {
  // 支出を削除する
  // URLパラメータで指定された要素を削除する
  // URLパラメータからidを取得する
  // distpatchを呼び出してexpensesの配列からidの要素を削除する
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const { id } = useParams();

  useEffect(() => {
    dispatch({
      type: 'deleteExpense',
      payload: {
        id: parseInt(id),
      },
    });
    navigate('/');
  }, []);

  return '';
};
