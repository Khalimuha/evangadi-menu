// * using .map() method with out destructuring

// import { Component } from "react";
// import "./App.css";
// import Menu from "./components/Menu/Menu.jsx";
// import { menuData } from "./commonResources/data.js";

// class App extends Component {
//   render() {
//     return (
//       <div>
// {
  // <div className="foods-container">
  //   {menuData.map((singleUserData, i) => {
  //     return (
  //       <Menu
  //         key={i}
  //         img={singleUserData.img}
  //         title={singleUserData.title}
  //         price={singleUserData.price}
  //         desc={singleUserData.desc}
  //       />
  //     );
  //   })}
  // </div>
// }

// * using .map() method with out destructuring

import { Component } from "react";
import "./App.css";
// import Food from "./components/FoodItem/Food.jsx";
import FoodItem from "./components/FoodItem/FoodItem.jsx"
import {menuData} from "./commonResources/data.js"
import Header from "./components/Header/Header.jsx";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="foods-container">
          {menuData.map(({ img, title, price, desc, id }) => {
            return (
              <FoodItem
                key={id}
                img={img}
                title={title}
                price={price}
                desc={desc.substring(0, 250) + " . . ."}
              />
            );
          })}
          ;
        </div>
        ;
      </div>
    );
  }
}
export default App;
