import { ExpenseList } from './../blocks/ExpenseList';
import { MyFab } from './../blocks/MyFab';
import { Summary } from './../blocks/Summary';

export const Home = () => {
  return (
    <>
      <Summary />
      <ExpenseList />
      <MyFab />
    </>
  );
};
