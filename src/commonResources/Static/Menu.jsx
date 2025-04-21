
import React from "react"; 
class Menu extends Component {
  render() {
    return (
      <>
        <div className="foods-container">
          <div className="single-food">
            <div className={this.props.img}>
              <img src="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp" />
            </div>
            <div className="title-price" />
            <h3 className={this.props.title}>TIMATIM SELAXA (ቲማቲም ሰላጣ)</h3>
            <p className={this.props.price}>$5.99</p>
            <div className={this.props.description}>
              Timatim Salata refers to a type of fresh Ethiopian tomato salad
              that’s also popular in Eritrea. It’s made with diced tomatoes,
              minced onions, and finely chopped peppers dressed with a mixture
              of berbere spices, olive oil, vinegar, and lemon juice.
            </div>
          </div>

          <div className="single-food">
            <div className={this.props.img}>
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280" />
            </div>
            <div className="title-price">
              <h3 className={this.props.title}>TIBS (ጥብስ)</h3>
              <p className={this.props.price}>$22.99</p>
            </div>
            <div className={this.props.description}>
              Sliced beef or lamb, pan-fried in butter, garlic and onion, tibs
              is one of the most popular dishes among Ethiopians. It comes in a
              variety of forms, varying in type, size or shape of the cuts of
              meat used, and can range from hot to mild or contain...
            </div>
          </div>

          <div className="single-food">
            <div className={this.props.img}>
              <img src="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg.webp" />
            </div>
            <div className="title-price">
              <h3 className={this.props.title}>KITFO (ክትፎ)</h3>
              <p className={this.props.price}>$25.99</p>
            </div>
            <div className={this.props.description}>
              Made from the leanest meat, kitfo is viewed as a big treat by
              ordinary Ethiopians, while its nutritional powers are also
              praised. Similar to French steak tartare, the meat is minced and
              warmed in a pan with a little butter, mitmita (a stronger version
              of berbere)...
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Menu

