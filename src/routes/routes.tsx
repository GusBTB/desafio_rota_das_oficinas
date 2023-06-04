import { Navigate, Route, Routes as RouteComponent } from "react-router-dom";
import NumberToRoman from "../pages/NumberToRoman";
import Home from "../pages/Home";
import GameOfLife from "../pages/GameOfLife";
import RestaurantBillDivisor from "../pages/RestaurantBillDivisor";

const Routes = () => {
  return (
    <RouteComponent>
      <Route element={<Home />} path="/" />
      <Route element={<NumberToRoman />} path="/numbersToRoman" />
      <Route element={<GameOfLife />} path="/gameOfLife" />
      <Route
        element={<RestaurantBillDivisor />}
        path="/restaurantBillDivisor"
      />
      <Route path="*" element={<Navigate replace to={"/"} />} />
    </RouteComponent>
  );
};
export default Routes;
