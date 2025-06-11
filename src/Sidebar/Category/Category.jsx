import Input from "../../components/Input";
import "./Category.css";

const Category = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <Input
          name={"category"}
          label={"All"}
          value={""}
          onChange={handleRadioChange}
        />
        <Input
          name={"category"}
          label={"Sneakers"}
          value={"sneakers"}
          handleChange={handleRadioChange}
        />
        <Input
          name={"category"}
          label={"Flats"}
          value={"flats"}
          handleChange={handleRadioChange}
        />
        <Input
          name={"category"}
          label={"Sandals"}
          value={"sandals"}
          handleChange={handleRadioChange}
        />
        <Input
          name={"category"}
          label={"Heels"}
          value={"heels"}
          handleChange={handleRadioChange}
        />
      </div>
    </div>
  );
};

export default Category;
