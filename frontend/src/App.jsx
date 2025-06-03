import { createBrowserRouter,  } from "react-router";
import Layout from "./components/Layout";
import { RouterProvider } from 'react-router'
import './App.css'




 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <div>Start</div>},
    ]
  },
]);




function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
