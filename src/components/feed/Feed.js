import React, { useEffect, useState } from "react";
import axios from "axios";
import banner from "../images/eatingtogether.svg";
import "./feed.css";

import Carousel from "react-elastic-carousel";
const YOUR_APP_ID = "16ad8eb2";
const YOUR_APP_KEY = "11c514b334846bac22e3a9697a53f51e";
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
const Feed = () => {
  const [recipe, setrecipe] = useState([]);
  const [Extrarecipe, setExtrarecipe] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      let recipeResponce = await axios.get(
        `https://api.edamam.com/search?q=${randomfood}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
      );

      setrecipe(recipeResponce.data.hits);
    };

    //  get some extra recipe

    const getExtraRecipes = async () => {
      let recipeRes = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );

      setExtrarecipe(recipeRes.data.categories);
    };
    getRecipes();
    getExtraRecipes();
  }, [setExtrarecipe, setrecipe]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];
  return (
    <>
      <div className="container">
        <div className="row banner_area ">
          <section className="col-12 col-md-6 col-lg-5 mt-4 left_wrapper ">
            <h2>Best Food Delivery </h2>
            <h3>In your Home</h3>
            <p>Easy -- Fast -- Reliable</p>
            <small>
              Order your favorite food (pizza , chicken & so on) , we will
              deliver them to your doorstep very quick
            </small>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              tempora unde reiciendis maxime recusandae ducimus consequuntur
              ipsam fuga molestiae adipisci, corporis nobis possimus iure culpa
              nemo voluptates sunt fugit ipsum.
            </p>
            <button className="btn btn-info mt-5">Order Now</button>
          </section>
          <section className="col-12 col-md-6 col-lg-7 mt-4">
            <img src={banner} alt="..." className="image-fluid top_bottom" />
          </section>
        </div>
      </div>

      <div className="row my-4 loader_parent container-fluid ">
        <h2 className="mt-5 text-center main-heading">High Demand Dish</h2>
        {Extrarecipe.length === 0 ? (
          <div class="loader">
            <span>Loading...</span>
          </div>
        ) : (
          <Carousel breakPoints={breakPoints}>
            {Extrarecipe.map((recipe) => {
              const { strCategoryThumb, idCategory, strCategory } = recipe;

              return (
                <div className="item1 " key={idCategory}>
                  <div className="card mt-4 ">
                    <img
                      src={strCategoryThumb}
                      className="card-img-top image_hover"
                      alt="..."
                    />
                    <div className="card-body text-center">
                      <p className="card-text">{strCategory}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        )}
        <h2 className="mt-5 text-center main-heading">
          Order Your Favourite Dish
        </h2>
        {recipe.length === 0 ? (
          <div class="loader">
            <span>Loading...</span>
          </div>
        ) : (
          <Carousel breakPoints={breakPoints}>
            {recipe.map((recipes, idx) => {
              const { image } = recipes.recipe;

              return (
                <div className="item1 " key={idx}>
                  <div className=" mt-2 ">
                    <img
                      src={image}
                      className="card-img-top image_hover"
                      alt="..."
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </>
  );
};

export default Feed;
