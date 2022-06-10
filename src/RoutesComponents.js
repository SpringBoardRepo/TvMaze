import Search from "./Search";
import { Route, Routes } from "react-router-dom";
import ShowDetails from "./ShowDetails";

function RoutesComponents() {
  return (
    <Routes>
      <Route exact path="/" element={<Search />}></Route>
      <Route exact path="/showDetails/:id" element={<ShowDetails />}></Route>
    </Routes>
  );
}

export default RoutesComponents;
