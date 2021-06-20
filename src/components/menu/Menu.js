import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import "./menu.css";
import checkicon from "../images/check.gif";
const YOUR_APP_ID = "16ad8eb2";
const YOUR_APP_KEY = "11c514b334846bac22e3a9697a53f51e";

const Menu = () => {
  const [recipe, setrecipe] = useState([]);
  const [search, setsearch] = useState("");
  const [categoryName, setcategoryName] = useState([]);
  const [searchrecipe, setsearchrecipe] = useState([]);
  const [selectcategory, setselectcategory] = useState("Breakfast");
  const [category, setcategory] = useState([]);
  const [alphabetName, setalphabetName] = useState("a");
  const [recipeByalphabet, setrecipeByalphabet] = useState([]);
  useEffect(() => {
    const getRecipes = async () => {
      let recipeRes = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );

      setrecipe(recipeRes.data.categories);
      setcategoryName(recipeRes.data.categories);
    };
    getRecipes();

    const getcategory = async () => {
      const getres = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectcategory}`
      );
      setcategory(getres.data.meals);
    };
    getcategory();
  }, [setrecipe, setsearchrecipe, selectcategory]);

  const getrecipebyalphabet = async (e) => {
    e.preventDefault();
    const getData = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabetName}`
    );

    setrecipeByalphabet(getData.data.meals);
    setalphabetName("");
  };

  const handel_select = (e) => {
    e.preventDefault();
    setselectcategory(e.target.value);
  };

  const SearchRecipe = async (e) => {
    e.preventDefault();

    if (search !== "") {
      let searchRes = await axios.get(
        `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
      );
      setsearchrecipe(searchRes.data.hits);
      setsearch("");
    }
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  const handelbtn = ({ strCategoryThumb, idCategory, strCategory }) => {
    console.log(strCategoryThumb, idCategory * 50, strCategory);
  };
  return (
    <div className="container-fluid ">
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search your recipes ....."
          aria-label="Search"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button
          class="btn btn-outline-primary"
          type="submit"
          disabled={!search}
          onClick={SearchRecipe}
        >
          Search
        </button>
      </form>

      <div className="row  menu_items my-4">
        {searchrecipe.length ? (
          searchrecipe.map((items, idx) => {
            const { image, label, calories, mealType } = items.recipe;

            return (
              <div className="col-6 col-md-4 col-lg-3 col-xl-3 my-2 " key={idx}>
                <div className="cards ">
                  <img src={image} className="card-img-top " alt="..." />

                  <p className="text-cente mt-3">
                    {label} Rs.{Math.trunc(calories)}
                  </p>
                  <p>{mealType}</p>
                  <button className="btn">
                    <img src={checkicon} alt="checkicon" width="30px" /> cart
                  </button>
                </div>
              </div>
            );
          })
        ) : recipe.length ? (
          recipe.map((items) => {
            const { strCategoryThumb, idCategory, strCategory } = items;
            return (
              <div
                className="col-6 col-md-4 col-lg-3 col-xl-3 my-2 "
                key={idCategory}
              >
                <div className="cards ">
                  <img
                    src={strCategoryThumb}
                    className="card-img-top "
                    alt="..."
                  />

                  <p className="text-center">
                    {strCategory} Rs.{idCategory * 50}
                  </p>
                  <button className="btn" onClick={() => handelbtn(items)}>
                    <img src={checkicon} alt="checkicon" width="30px" /> cart
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>loading</p>
        )}
      </div>
      <hr />
      <h3 className="mt-5  main-heading">filter by categories</h3>

      <div className="text-center my-2">
        <select onChange={handel_select}>
          <option value="Breakfast">-- filter by Category</option>
          {categoryName &&
            categoryName.map((category) => {
              const { strCategory, idCategory } = category;

              return (
                <option value={strCategory} key={idCategory}>
                  {strCategory}
                </option>
              );
            })}
        </select>
      </div>

      {category && (
        <Carousel breakPoints={breakPoints}>
          {category.map((category) => {
            const { idMeal, strMeal, strMealThumb } = category;
            return (
              <div key={idMeal} className="mx-3 my-5">
                <img
                  src={strMealThumb}
                  alt=""
                  className="card-img-top image_hover"
                />
                <p>{strMeal}</p>
                <button className="btn">
                  <img src={checkicon} alt="checkicon" width="30px" /> cart
                </button>
              </div>
            );
          })}
        </Carousel>
      )}
      <hr />
      <h3 className="mt-5  main-heading">filter by alphabet</h3>

      <div className="search_input">
        <input
          type="text"
          aria-label="Search"
          className="input_controls "
          placeholder="Enter recipe first alphabet"
          maxLength={1}
          value={alphabetName}
          onChange={(e) => setalphabetName(e.target.value)}
        />
        <button
          class="btn btn-outline-primary m-2"
          onClick={getrecipebyalphabet}
        >
          Search
        </button>
      </div>
      {recipeByalphabet && (
        <Carousel breakPoints={breakPoints}>
          {recipeByalphabet.map((category) => {
            const { idMeal, strMeal, strMealThumb } = category;
            return (
              <div key={idMeal} className="mx-3 my-5">
                <img
                  src={strMealThumb}
                  alt=""
                  className="card-img-top image_hover"
                />
                <p>{strMeal}</p>
                <button className="btn">
                  <img src={checkicon} alt="checkicon" width="30px" /> cart
                </button>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default Menu;
