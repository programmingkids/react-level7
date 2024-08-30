import { Layout } from './../layouts/Layout';
import { Home } from './../pages/Home';
import { About } from './../pages/About';
import { Budget } from './../pages/Budget';
import { ExpenseAdd } from './../pages/ExpenseAdd';
import { ExpenseEdit } from './../pages/ExpenseEdit';
import { ExpenseDelete } from './../pages/ExpenseDelete';
import { NotFound } from './../pages/NotFound';

// 各URLとコンポーネントを設定する
export const routeData = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
