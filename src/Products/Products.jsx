import data from "../db/data";
import { BsFillBagHeartFill } from "react-icons/bs";
import "./Products.css";

const Products = () => {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img src={data[0].img} alt={data[0].title} className="card-img" />
          <div className="card-details">
            <h3 className="card-title">{data[0].title}</h3>
            <section className="card-reviews">
              {data[0].star}
              {data[0].star}
              {data[0].star}
              {data[0].star}
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>{data[0].prevPrice}</del> {data[0].newPrice}
              </div>
              <div className="bag">
                <BsFillBagHeartFill className="bag-icon"/>
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

export default Products;
