import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleButtonClick }) => {
  return (
    <div>
      <h2 className="recommended__title">Recommended</h2>
      <div className="recommended">
        <Button
          onClickHandler={handleButtonClick}
          value={""}
          title={"All Products"}
        />
        <Button
          onClickHandler={handleButtonClick}
          value={"Nike"}
          title={"Nike"}
        />
        <Button
          onClickHandler={handleButtonClick}
          value={"Adidas"}
          title={"Adidas"}
        />
        <Button
          onClickHandler={handleButtonClick}
          value={"Puma"}
          title={"Puma"}
        />
        <Button
          onClickHandler={handleButtonClick}
          value={"Vans"}
          title={"Vans"}
        />
      </div>
    </div>
  );
};

export default Recommended;
