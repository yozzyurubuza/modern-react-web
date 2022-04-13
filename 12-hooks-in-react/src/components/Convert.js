import React, { useState, useEffect } from "react";
import axios from "axios";
import { GT_KEY, GT_LINK } from "../Config";

//Transfer language and text to be converted in this component
const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  //Add debouncedText for useEffect search delay
  const [debouncedText, setDebouncedText] = useState(translated);

  //1st useEffect:
  //Update debouncedText without hitting enter only if user stopped typing after the set time (1 sec).
  useEffect(() => {
    const delayID = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    //If user is still typing, clearTimeout will prevent updating debouncedText
    return () => {
      clearTimeout(delayID);
    };
    //If value of text from input field in Translate Component changes, initiate 1st useEffect.
  }, [text]);

  //2nd useEffect:
  //Trigger search function when user stopped typing.
  useEffect(() => {
    //Helper function
    const doTranslation = async () => {
      const { data } = await axios.post(
        GT_LINK,
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: GT_KEY,
          },
        }
      );
      //Get translated text from google translate api
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
    //If debouncedText value changes from 1st useEffect, initiate 2nd useEffect.
  }, [debouncedText, language]);

  //Display translated text
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
