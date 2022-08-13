import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn-Component";

const Shop = () => {
  return <h1>Shop Component</h1>;
};
const Cart = () => {
  return <h1>Cart Component</h1>;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="Cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
