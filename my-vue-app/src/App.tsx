import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import './index.css';

import Home from "./components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element:  <Home />
       
      }
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
