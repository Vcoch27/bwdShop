import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames/bind";
import styles from "./Product.module.scss";
import image from "./z3325209525585_488d4b7293521b2cae3cef0731562e2a.jpg";
import { useAppContext } from "../../../context/appContext";
const cx = classnames.bind(styles);

function Product({ name, desc, material, price, urlImg, id }) {
  const { addProductInCart, getAllCart } = useAppContext();
  const [show, setShow] = useState(false);
  const handleClick = async function (e) {
    e.preventDefault();
    const currentProduct = { productId: id, quantity: 1 };
    addProductInCart(currentProduct);
    console.log(typeof id);
    getAllCart();
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("main-content")}>
        <div
          className={cx("product-img")}
          onMouseEnter={(e) => {
            setShow(true);
          }}
          onMouseLeave={(e) => {
            setShow(false);
          }}
        >
          <img src={urlImg} alt="Hinhf anhr" />
          {show && (
            <div className={cx("overlay")}>
              <button>
                <FontAwesomeIcon icon={faEye} />
              </button>
              <button>
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button onClick={(e) => handleClick(e)}>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          )}
        </div>
        <h1 className={cx("product-name")}>{name}</h1>
        <h5 className={cx("product-desc")}>{desc}</h5>
        <h5 className={cx("product-price")}>{price} VND</h5>
        <button className={cx("view-product")}>Xem sản phẩm</button>
      </div>
      <span className={cx("type")}>FEATURED</span>
    </div>
  );
}

export default Product;
