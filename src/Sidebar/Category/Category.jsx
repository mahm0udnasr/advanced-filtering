import Input from "../../components/Input";
import "./Category.css";

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <Input name={"category"} label={"All"} />
        <Input name={"category"} label={"Sneakers"} />
        <Input name={"category"} label={"Flats"} />
        <Input name={"category"} label={"Sandals"} />
        <Input name={"category"} label={"Heels"} />
      </div>
    </div>
  );
};

export default Category;
