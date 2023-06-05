import "./App.css";

import Main from "./main";
import Root from "./Root";
import ProductDetailPage from "./components/productsDetailPage/productDetailPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main />} />
        <Route path=":id" element={<ProductDetailPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
