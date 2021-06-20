import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
const YOUR_APP_ID = "16ad8eb2";
const YOUR_APP_KEY = "11c514b334846bac22e3a9697a53f51e";
const ApiContext = createContext();
let listitem = [
  "milk",
  "pizza",
  "veg biryani",
  "chickenbiryani",
  "Eggs",
  "rice",
  "chicken",
  "ice",
  "tomato",
];
const randomfood = listitem[Math.floor(Math.random() * listitem.length)];
const ContextProvider = ({ children }) => {
  const [recipe, setrecipe] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      let recipeResponce = await axios.get(
        `https://api.edamam.com/search?q=${randomfood}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
      );

      setrecipe(recipeResponce.data.hits);
    };
    getRecipes();
  }, [setrecipe]);

  return (
    <>
      <ApiContext.Provider
        value={{
          recipe,
        }}
      >
        {children}
      </ApiContext.Provider>
    </>
  );
};

export { ContextProvider, ApiContext };
