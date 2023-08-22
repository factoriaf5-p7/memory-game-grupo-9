import { RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import '@fontsource/bangers';
import { Routes } from "@/routes";

const router = createBrowserRouter(createRoutesFromElements(Routes))
const App = () => <RouterProvider router={router} />;

export default App
