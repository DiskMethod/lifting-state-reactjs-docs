import React, { useState } from "react";

import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

const Calculator = (props) => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleOnTemperatureChange = (temperature, scale) => {
    if (scale === "c") {
      setCelsius(temperature);
      setFahrenheit(tryConvert(temperature, toFahrenheit));
    } else {
      setFahrenheit(temperature);
      setCelsius(tryConvert(temperature, toCelsius));
    }
  };

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleOnTemperatureChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleOnTemperatureChange}
      />
      <BoilingVerdict celsius={celsius} />
    </div>
  );
};

export default Calculator;
