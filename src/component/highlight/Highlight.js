import React, { Component } from "react";
import classnames from "classnames/bind";
import styles from "./Highlight.module.scss";
// import TypeProducts from './TypeProducts/TypeProducts';
import Card from "./components/Card";
// import { FiHeart } from "react-icons/fi";
// import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
const cx = classnames.bind(styles);

class Highlight extends Component {
  render() {
    return (
      // <div className={cx("main")}>
      <div className={cx("container")}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Highlight;
// </div>
//     <div className="profile-container">
//         <a href="https://www.facebook.com/vcoch2711">
//             <FiHeart className="nav-icons" />
//         </a>
//         <a href="https://www.facebook.com/vcoch2711">
//             <AiOutlineShoppingCart className="nav-icons" />
//         </a>
//         <a href="https://www.facebook.com/vcoch2711">
//             <AiOutlineUserAdd className="nav-icons" />
//         </a>
//     </div>
// </div>
