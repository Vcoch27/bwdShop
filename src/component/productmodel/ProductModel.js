import React from "react";
import classnames from "classnames/bind";
import styles from "./ProductModel.module.scss";
const cx = classnames.bind(styles);

function ProductModel() {
    return (
        <div className={cx("container")}>
            <div className={cx("nameProduct")} >
                <div className={cx("back")} id={cx("cartImage")}>
                    <input className={cx("cb")} type="checkbox" />
                    <img className={cx("product-img")}
                        title=" Bộ ba - bộ 3 hũ mận vẽ hoa mai đỏ MNV-QT09 quà tết "
                        alt="Bộ ba - bộ 3 hũ mận vẽ hoa mai đỏ MNV-QT09 quà tết"
                        src="https://quatetmynghe.com/www/uploads/images/3(15).jpg" />
                </div>

                <a href="/khay-hop-mut-son-mai/bo-ba-bo-3-hu-man-ve-hoa-mai-do-mnv-qt09-qua-tet-2-myngheviet.vn/" id={cx("product_name")}>
                    Bộ ba - bộ 3 hũ mận vẽ hoa mai đỏ MNV-QT09 quà tết
                </a>

                {/* <span className={cx("alert-text", "bold")}></span> */}
            </div>
            <div className={cx("cartUnitDisplay")}>720.000 VNĐ </div>
            <div className={cx("cartQuantity")}>
                <input type="number" className={cx("inputQuantity")} size="1" value="1" name="" />
                <span className={cx("alert-text", "bold")}></span>
            </div>
            <div className={cx("cartQuantityUpdate")}>
                <input className={cx("change")} type="image" rel='2' title="Thay đổi số lượng" alt=""
                    src="https://quatetmynghe.com/www/images/refresh.png" />
            </div>
            <div className={cx("cartTotalDisplay")}>720.000 VNĐ</div>
            <div className={cx("cartRemoveItemDisplay")}>
                <a href="/product/del/2">
                    <img className={cx("remove-product-img")} title=" Xóa sản phẩm " alt=""
                        src="https://quatetmynghe.com/www/images/cross.png" />
                </a>
            </div>
        </div>
    );
}

export default ProductModel;
