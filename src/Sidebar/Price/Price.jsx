import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleRadioChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <Input
          name={"price"}
          label={"All"}
          value={""}
          handleChange={handleRadioChange}
        />
        <Input
          name={"price"}
          label={"$0 - $50"}
          value={50}
          handleChange={handleRadioChange}
        />
        <Input
          name={"price"}
          label={"$50 - $100"}
          value={100}
          handleChange={handleRadioChange}
        />
        <Input
          name={"price"}
          label={"$100 - $150"}
          value={150}
          handleChange={handleRadioChange}
        />
        <Input
          name={"price"}
          label={"Over $150"}
          value={200}
          handleChange={handleRadioChange}
        />
      </div>
    </div>
  );
};

export default Price;
