import React, { useState } from "react";
//import Accordion from "./compenents/accordion";
//import Search from './compenents/search';
import Dropdown from "./compenents/dropdown";

/*const items = [
  {
    title: "React Nedir",
    content: "React  bir frontend javascript frameworküdür.",
  },
  {
    title: "Neden React Kullanırız",
    content: "Çünkü React geliştiricilerin favori js kütüphanesidir.",
  },
  {
    title: "React Nasıl Kullanırız.",
    content: "You use React by creating compenents.",
  },
];*/

const options = [
  {
    label: "The Color Black",
    value: "black",
  },
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Shade of Blue",
    value: "blue",
  },

  {
    label: "The Color Yellow",
    value: "yellow",
  },
  {
    label: "The Shade of Orange",
    value: "orange",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button style={{alignItems:"center"}} onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
