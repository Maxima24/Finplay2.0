import { BrowserRouter as Router, Routes,createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from '../pages/index';
import Login from '../pages/login';
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';
import { Children } from 'react';
import AppLayout from './appLayout';
import Learning from '../pages/learning';
import Lesson from '../pages/lesson';
import News from '../pages/news'
import Achievements from '../pages/achievements';
import Community from '../pages/community';
import Challenges from '../pages/challenges';
import ChallengeDetails from '../pages/challenge-details';
import Settings from '../pages/settings';
import Trading from '../pages/trading';
import Transactions from '../pages/transactions';

const router = createBrowserRouter([{element:<AppLayout/>,children:[
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/learning",
        element: <Learning/>,
    },
    {
        path: "/lesson/:id",
        element: <Lesson/>
    },
    {
        path: "/news",
        element: <News/>
    },
    {
        path:"/achievements",
        element:<Achievements/>
    },
    {
        path:"/community",
        element:<Community/>
    },
    {
        path:'/challenges',
        element:<Challenges/>
    },
    {
        path:'/challenges/:id',
        element:<ChallengeDetails/>
    },
    {
        path:'/settings',
        element:<Settings/>
    },
    {
        path:'/transactions',
        element:<Trading/>
    },
    {
        path:'/budget',
        element:<Transactions/>
    }
]}])

function App() {
   
  return (
    <RouterProvider router={router} />
  );
}

export default App;
