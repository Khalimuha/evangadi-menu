
// import React from "react"; 
// import "./Menu.css"
// function Menu({ img, title, price, desc }) {
//   return (
//     <div className="single-food">
//       <img src={img} alt={title} />
//       <div className="title-price">
//         <h3>{title}</h3>
//         <p>{price}</p>
//       </div>
//       <p className="food-desc">{desc}</p>
//     </div>
//   );
// }

// export default Menu;

// class-based Menu component
import { Component } from 'react';
import './menu.css';

class Menu extends Component {
  render() {
    const { img, title, price, desc } = this.props;

    return (
      <div className="single-food">
      
        <img src={img} alt={title} />
        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
          </div>

          <div className='food-desc'> {desc}</div>
      </div>
    );
  }
}

export default Menu;




