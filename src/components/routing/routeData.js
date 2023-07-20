import { Layout } from './../layouts/Layout';
import { Home } from './../pages/Home';
import { About } from './../pages/About';
import { Budget } from './../pages/Budget';
import { ExpenseAdd } from './../pages/ExpenseAdd';
import { ExpenseEdit } from './../pages/ExpenseEdit';
import { ExpenseDelete } from './../pages/ExpenseDelete';
import { NotFound } from './../pages/NotFound';

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
                path: 'budget', 
                element: <Budget />,
            },
            {
                path: 'add',
                element : <ExpenseAdd />,
            },
            {
                path: 'edit/:id',
                element : <ExpenseEdit />,
            },
            {
                path: 'delete/:id',
                element : <ExpenseDelete />,
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
    }
];
