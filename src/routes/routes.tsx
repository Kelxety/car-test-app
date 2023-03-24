import { Routes as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import Car from "../pages/Car";

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Car />} />
    </Router>
  );
}
