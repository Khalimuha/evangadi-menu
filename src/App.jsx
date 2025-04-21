// * using .map() method

// import { Component } from "react";
// import "./App.css";
// import Menu from "./components/Menu/Menu.jsx";
// import { menuData } from "./commonResources/data.js";

// class App extends Component {
//   render() {
//     return (
//       <div>
{
  /* <header className="title">
          <h1>Evangadi Menu React Replica using array .map() method </h1>
          <div></div>
        </header>

        <div className="foods-container">
          {menuData.map((singleUserData, i) => {
            return (
              <Menu
                key={i}
                img={singleUserData.img}
                title={singleUserData.title}
                price={singleUserData.price}
                desc={singleUserData.desc}
              />
            );
          })}
        </div> */
}

// * using destructuring techninque

import { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu.jsx";
import { menuData } from "./commonResources/data.js";

class App extends Component {
  render() {
    return (
      <div>
        <header className="title">
          <h1>Evangadi Menu React Replica using Props </h1>
          <div></div>
        </header>

        <div className="foods-container">
          {menuData.map(({ img, title, price, desc }, i) => {
            return (
              <Menu key={i} img={img} title={title} price={price} desc={desc} />
            );
          })}
          ;
        </div>
      </div>
    );
  }
}
export default App;
