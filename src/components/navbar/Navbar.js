import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useHistory } from "react-router-dom";
import shoppingbag from "../images/shopping-bag.gif";
import logo from "../images/logo1.png";
const Navbar = () => {
  const history = useHistory();
  const redirestToHome = () => {
    history.push("/");
  };
  return (
    <header className="container-fluid">
      <div className="header">
        <div className="logo " onClick={redirestToHome}>
          <img src={logo} alt="logo" />
        </div>

        <nav class="nav ">
          <NavLink to="/menu" activeClassName="selected" className="nav-link">
            Menu
          </NavLink>
          <NavLink to="/" activeClassName="selected" className="nav-link">
            Offers
          </NavLink>
          <NavLink
            to="/register"
            activeClassName="selected"
            className="nav-link"
          >
            Register
          </NavLink>
          <NavLink to="/login" activeClassName="selected" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/" activeClassName="selected" className="nav-link">
            <img src={shoppingbag} alt="..." width="35px" />
          </NavLink>
        </nav>
      </div>
      <p className="line"></p>
    </header>
  );
};

export default Navbar;

// import React, { useEffect, useState } from "react";
// import logo from "../images/logo.png";
// import { NavLink } from "react-router-dom";
// import "./navbar.css";
// import axios from "axios";
// const YOUR_APP_ID = "16ad8eb2";
// const YOUR_APP_KEY = "11c514b334846bac22e3a9697a53f51e";
// const Navbar = () => {
//   const [data, setdata] = useState([]);
//   const [search, setsearch] = useState("chicken");
//   useEffect(() => {
//     const getapi = async () => {
//       let res = await axios.get(
//         `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
//       );
//       console.log(res.data.hits);
//       setdata(res.data.hits);
//     };
//     getapi();
//   }, [setsearch]);
//   console.log(search);
//   return (
//     <div className="container ">
//       <div className="nav_bar">
//         <div className="logo">
//           <img src={logo} alt="logo" />
//         </div>

//         <div className="links ">
//           <NavLink to="/" activeClassName="selected">
//             Home
//           </NavLink>
//           <NavLink to="/product" activeClassName="selected">
//             Product
//           </NavLink>
//           <input type="search" onChange={(e) => setsearch(e.target.value)} />
//           <button>search</button>
//         </div>
//         {data.length === 0
//           ? "loading..."
//           : data.map((recipe) => {
//               return (
//                 <div className="container">
//                   <p>{recipe.recipe.label}</p>
//                   <img src={recipe.recipe.image} alt=".." />
//                 </div>
//               );
//             })}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
