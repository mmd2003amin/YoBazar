import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import i18n from "../i18n";

const Language = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [lang, setLang] = useState("فا");

  const languageHandler = (e) => {
    const name = e.target.innerText.split("");
    setLang(`${name[0]}${name[1]}`);
    setShowOptions(false);
    i18n.changeLanguage(e.target.dataset.lang);
  };

  return (
    <div>
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="mx-2 centering cursor-pointer w-20 justify-start"
      >
        <h1>{lang}</h1>
        <IoIosArrowDown className="size-4 mr-2" />
      </div>

      <div
        className={`${
          showOptions ? "top-11 opacity-100" : "bottom-16 opacity-0"
        } duration-75 absolute bg-white border rounded-md`}
      >
        <div
          data-lang="fa"
          onClick={languageHandler}
          className=" hover:bg-cyan-700 hover:text-white p-2 px-5 text-sm transition-all cursor-pointer rounded-t-md"
        >
          فارسی
        </div>

        <div
          data-lang="en"
          onClick={languageHandler}
          className=" hover:bg-cyan-700 hover:text-white p-2 px-5 text-sm transition-all cursor-pointer rounded-b-md"
        >
          English
        </div>
      </div>
    </div>
  );
};

export default Language;
