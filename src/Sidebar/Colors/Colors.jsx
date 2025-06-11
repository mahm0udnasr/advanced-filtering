import Input from "../../components/Input";
import "./Colors.css";

const Colors = () => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <div>
        <Input name="colors" label="All" />
        <Input name="colors" label="Black" />
        <Input name="colors" label="Blue" />
        <Input name="colors" label="Red" />
        <Input name="colors" label="Green" />
        <Input name="colors" label="White" />
      </div>
    </div>
  );
};

export default Colors;
