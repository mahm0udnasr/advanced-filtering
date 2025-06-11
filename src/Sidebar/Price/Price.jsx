import Input from "../../components/Input";
import "./Price.css";

const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <Input
        name={"price"}
        label={"All"}
        />
        <Input
        name={"price"}
        label={"$0 - $50"}
        />
        <Input
        name={"price"}
        label={"$50 - $100"}
        />
        <Input
        name={"price"}
        label={"$100 - $150"}
        />
        <Input
        name={"price"}
        label={"Over $150"}
        />
      </div>
    </div>
  );
};

export default Price;
