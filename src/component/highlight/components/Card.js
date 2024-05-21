import React from 'react'
import classnames from "classnames/bind";
import styles from "./Card.scss";
import 'bootstrap/dist/css/bootstrap.css';
import Anh from '../img/img1.png';
const cx = classnames.bind(styles);

function Card() {
    return (
        <div>
            <div className="container">
                <section className={cx("wsk-cp-product")}>
                    <div className={cx("wsk-cp-img")}>
                        <img src={Anh} alt="Product" className={cx("img-responsive")} />
                    </div>
                    <div className={cx("wsk-cp-text")}>
                        <div className={cx("category")}>
                            <span>Ethnic</span>
                        </div>
                        <div className={cx("title-product")}>
                            <h3>My face not my heart</h3>
                        </div>
                        <div className={cx("description-prod")}>
                            <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                        </div>
                    </div>
                </section>
                {/* Repeat for other sections */}
            </div>
        </div>
    )
}
export default Card;

