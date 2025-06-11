import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleRadioChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <div>
        <Input
          name="colors"
          label="All"
          className="all"
          value={""}
          handleChange={handleRadioChange}
        />
        <Input
          name="colors"
          label="Black"
          value={"black"}
          handleChange={handleRadioChange}
          color={"black"}
        />
        <Input
          name="colors"
          label="Blue"
          value={"blue"}
          handleChange={handleRadioChange}
          color={"blue"}
        />
        <Input
          name="colors"
          label="Red"
          value={"red"}
          handleChange={handleRadioChange}
          color={"red"}
        />
        <Input
          name="colors"
          label="Green"
          value={"green"}
          handleChange={handleRadioChange}
          color={"green"}
        />
        <Input
          name="colors"
          label="White"
          value={"white"}
          handleChange={handleRadioChange}
          color={"white"}
        />
      </div>
    </div>
  );
};

export default Colors;
