import React, { useState } from "react";
import { render } from "react-dom";
import { ParamInput, Button, Checkbox, TextInput, Radio, Select, Toggle } from "../src";

const root = document.getElementById("root");

const App = () => {
  const [vals, setVals] = useState({
    text: "Hello world",
    toggle: true,
    number: 400,
    range: 400,
    slider: 400,
    colorHex: "#f62696",
    colorRgba: "rgba(200,120,34,1)",
    textOption: "Option 1",
    numberOption: 10,
    objectOption: "first"
  });

  const handleChange = (e, name, value) => {
    console.info(name, typeof value, value);
    setVals(vals => Object.assign({}, vals, { [name]: value }));
  };

  const blockStyle = { width: "300px", display: "inline-block", margin: "1em" };
  return (
    <>
      <div style={blockStyle}>
        <ParamInput
          name={"text"}
          value={vals.text}
          attributes={{
            type: "text",
            default: "Hi",
            validation: value => (value.length < 15 ? null : "Length must be less than 15")
          }}
          onChange={handleChange}
        />
      </div>
      <div style={blockStyle}>
        <ParamInput
          name={"toggle"}
          value={vals.toggle}
          attributes={{
            type: "boolean",
            default: true,
            validation: value => (value ? null : "Must be true")
          }}
          onChange={handleChange}
        />
      </div>
      <div style={blockStyle}>
        <ParamInput
          name={"number"}
          value={vals.number}
          attributes={{
            type: "number",
            default: 400,
            validation: value => (value < 450 || value > 455 ? null : "Not in range")
          }}
          onChange={handleChange}
        />
      </div>
      <div style={blockStyle}>
        <ParamInput
          name={"range"}
          value={vals.range}
          attributes={{
            type: "number",
            default: 400,
            min: 400,
            max: 500,
            step: 10,
            validation: value => (value < 430 || value > 465 ? null : "Not in range")
          }}
          onChange={handleChange}
        />
      </div>
      <div style={blockStyle}>
        <ParamInput
          name={"slider"}
          value={vals.slider}
          attributes={{
            type: "number",
            default: 400,
            min: 400,
            max: 500,
            step: 10,
            slider: true,
            validation: value => (value < 430 || value > 465 ? null : "Not in range")
          }}
          onChange={handleChange}
        />
      </div>
      <div style={blockStyle}>
        <ParamInput
          name={"colorHex"}
          value={vals.colorHex}
          attributes={{
            type: "color",
            model: "hex",
            default: "#f62696"
          }}
          onChange={handleChange}
        />
      </div>
      <div style={blockStyle}>
        <ParamInput
          name={"colorRgba"}
          value={vals.colorRgba}
          attributes={{
            type: "color",
            model: "rgba",
            default: "rgba(200,120,34,1)"
          }}
          onChange={handleChange}
        />
      </div>
      <div style={blockStyle}>
        <ParamInput
          name={"textOption"}
          value={vals.textOption}
          attributes={{
            type: "text",
            default: "Option 1",
            options: ["Option 1", "Option 2", "Option 3"],
            validation: value => (value === "Option 1" ? null : "Should be Option 1")
          }}
          onChange={handleChange}
        />
      </div>
      <div style={blockStyle}>
        <ParamInput
          name={"numberOption"}
          value={vals.numberOption}
          attributes={{
            type: "number",
            default: 10,
            options: [10, 13, 30]
          }}
          onChange={handleChange}
        />
      </div>
      <div style={blockStyle}>
        <ParamInput
          name={"objectOption"}
          value={vals.objectOption}
          attributes={{
            type: "object",
            default: "first",
            options: { first: {}, second: {} }
          }}
          onChange={handleChange}
        />
      </div>
      {/* <h3>Base inputs:</h3>

      <span>Button</span>
      <Button>I'm a button</Button>
      <Select label="Select input: ">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
      <span>Toggle</span>
      <Toggle status={true}>On</Toggle>
      <Toggle status={false}>Off</Toggle>
      <TextInput label="Text input: "></TextInput> */}
    </>
  );
};
render(<App></App>, root);
