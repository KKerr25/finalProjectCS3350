import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Recipe from "./pages/RecipiePage";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "Recipe", element: <Recipe /> },
        { path: "Recipe/:id", element: <Recipe /> },
        // Set this up for future purposes where I can use real data instead of filler stuff...
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer></Footer>
    </>
  );
}

export default App;
