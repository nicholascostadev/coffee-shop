import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { Delivery } from "./pages/Delivery";
import { Home } from "./pages/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<div>Test</div>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  );
};
