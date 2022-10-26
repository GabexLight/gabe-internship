import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ItemDetails2 from "./pages/itemDetails2";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/authorId/:authorId" element={<Author />} />
        <Route path="/item-details/:nftId"  element={<ItemDetails />} />
        <Route path="/item-details2/:nftId"  element={<ItemDetails2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
