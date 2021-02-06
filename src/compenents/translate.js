import React, { useState } from "react";
import Dropdown from "./dropdown";
import Convert from "./convert";

//Translate APİ
//This api only works localhost:3000
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Turkish",
    value: "tr",
  },
  {
    label: "Russian",
    value: "ru",
  },
  {
    label: "Spanish",
    value: "es",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter a text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
