import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Tailwind Style
import "./style.css";

// import your route components
import Homepage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

// Example Components
import ProductId from "./pages/examples/products/ProductId";
import ProductIndex from "./pages/examples/products/ProductIndex";
import Login from "./pages/Login";
import FlowbiteComponentSample from "./pages/examples/FlowbiteComponentSample";
import DashboardLayout from "./Layout/DashboardLayout";

// Lazy load page split example
const Dashboard = lazy(() => import("./pages/Dashboard"));

import { RecoilRoot } from "recoil";
import PageOne from "./pages/examples/recoilsample/PageOne";
import PageTwo from "./pages/examples/recoilsample/PageTwo";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Logout from "./pages/Logout";
import TableExample from "./pages/examples/TableExample";
import MenuGroup from "./pages/examples/menugroup/MenuGroup";
import HomePageMenuGroup from "./pages/examples/menugroup/HomePageMenuGroup";
// import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    // Recoil Root
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          {/* Home index */}
          <Route index element={<Homepage />}></Route>
          {/* Protected Wrapper */}
          <Route path="/" element={<ProtectedRoutes />}>
            {/* Dashboard Layout Wrapper */}
            <Route
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <DashboardLayout />
                </Suspense>
              }
            >
              {/* Example components */}
              <Route path="/example">
                <Route index element={<Dashboard />} />
                {/* Flowbites */}
                <Route
                  path="flowbitecomponents"
                  element={<FlowbiteComponentSample />}
                />
                {/* Menu Group */}
                <Route path="menugroup" element={<MenuGroup />}>
                  <Route index element={<HomePageMenuGroup />}></Route>
                  <Route path="recoilpageone" element={<PageOne />}></Route>
                  <Route path="recoilpagetwo" element={<PageTwo />}></Route>
                </Route>
                <Route path="tableexample" element={<TableExample />}></Route>
                <Route path="productsexample" element={<ProductIndex />}>
                  <Route path=":product_id" element={<ProductId />} />
                </Route>
              </Route>
            </Route>
          </Route>
          {/* Outer Route (not protected and didnt have layout)  */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
