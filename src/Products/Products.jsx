import Product from "../components/Product";
import data from "../db/data";
import "./Products.css";

const Products = () => {
  return (
    <section className="card-container">
      {data.map((item, index) => (
        <Product
          key={index}
          title={item.title}
          img={item.img}
          star={item.star}
          reviews={item.reviews}
          prevPrice={item.prevPrice}
          newPrice={item.newPrice}
        />
      ))}
    </section>
  );
};

export default Products;
