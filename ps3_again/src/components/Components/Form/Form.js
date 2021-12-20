import React from "react";
import { useState } from "react/cjs/react.development";

export default function Form(props) {
  const [name, setName] = useState("");
  const [zodiac, setZodiac] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "zodiac") {
      setZodiac(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Cześć ${name}, twój znak zodiaku to ${zodiac}`;
    props.sendMessageToParentComponent(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Imię:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="zodiac">Znak zodiaku</label>
      <input
        type="text"
        name="zodiac"
        id="zodiac"
        value={zodiac}
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="wyślij" />
    </form>
  );
}
