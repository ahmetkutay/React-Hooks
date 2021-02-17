import React, { /*{ useState }*/ useState } from "react";
import Accordion from "./compenents/accordion";
import Search from "./compenents/search";
import Dropdown from "./compenents/dropdown";
import Translate from "./compenents/translate";
import Route from "./compenents/route";
import Header from "./compenents/header";

const items = [
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
];

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
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
