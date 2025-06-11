import { useState } from "react";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import data from "./db/data";
import Product from "./components/Product";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // search input filter
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = data.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );
  // radio filters
  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  // buttons filters
  const handleButtonClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }, index) => {
        <Product
          key={index}
          title={title}
          img={img}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />;
      }
    );
  }
  const products = filteredData(data, selectedCategory, query);
  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange} />
      <Navigation handleButtonClick={handleButtonClick}/>
      <Recommended />
      <Products products={products} />
    </>
  );
}

export default App;
