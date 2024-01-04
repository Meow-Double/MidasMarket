import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import TypesProduct from "./pages/TypesProduct/TypesProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Drawer from "./pages/Drawer/Drawer";
import { useAction } from "hooks";
import { useEffect } from "react";
import DefiniteProducts from "pages/DefiniteProducts/DefiniteProducts";
import NotFound from "pages/NotFound/NotFound";

const App: React.FC<{}> = () => {
  const { fetchCart} = useAction();

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/корзина" element={<Drawer />} />
        <Route path="/виды/:id" element={<TypesProduct />} />
        <Route path="/меню/:type" element={<DefiniteProducts />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
