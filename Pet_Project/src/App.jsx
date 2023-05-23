import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DogRootLayout from "./components/UI/DogRootLayout";
import RootLayout from "./components/UI/Root";
import ErrorPage from "./components/UI/ErrorPage";
import HomePage from "./pages/Home";
import CharlieProfilePage from "./pages/CharlieProfile";
import RosyProfilePage from "./pages/RosyProfile";
import PorshaProfilePage from "./pages/PorshaProfile";


const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />, 
      errorElement: <ErrorPage />, 
      children: [
        { index: true, element: <HomePage />},
        {
        path: 'dogs', 
        element: <DogRootLayout />,
        errorElement: <ErrorPage />,
        children: [
     
        {path: 'Charlie', element: <CharlieProfilePage /> },
    
        { path: 'Rosy',  element: <RosyProfilePage /> },
    
        { path: 'Porsha', element: <PorshaProfilePage /> },
    ],
    },
  ],
  },
  ]);
  

function App() {
    return <RouterProvider router={router} />;
}

export default App;