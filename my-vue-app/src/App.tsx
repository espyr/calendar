import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import './index.css';

import Calendar from "./components/Calendar";
import MyPeriod from "./components/MyPeriod";
import MyEvents from "./components/MyEvents";
import MyTodoList from "./components/MyTodoList";
import MyStatistics from "./components/MyStatistics";
import MainLayout from './components/MainLayout';

const router = createBrowserRouter([
  

    
      {
        index: true,
        element: <MainLayout><Calendar /></MainLayout> 
      },
      {
        path: 'my-period',
        element: <MainLayout><MyPeriod /></MainLayout>
      },
      {
        path: "/my-events",
        element: <MainLayout><MyEvents /></MainLayout>
      },
      {
        path: "/my-todo-list",
        element: <MainLayout><MyTodoList /></MainLayout>
      },
      {
        path: "/my-statistics",
        element: <MainLayout><MyStatistics /></MainLayout>
      }
    
  
]);

function App() {
  return <RouterProvider router={router}>

    
  </RouterProvider>;
}

export default App;
