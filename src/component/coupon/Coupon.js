import React from 'react'
import classnames from "classnames/bind";
import styles from "./Coupon.module.scss";
const cx = classnames.bind(styles);
function Coupon() {
    return (
        <div>
            <div classnames={cx("wrapper")} >
                <div className={cx("voucher-available")}>
                    <div className={cx("elememt-voucher")}>
                        <div className={cx("left-coupon")}>
                            ss
                        </div>
                        <div className={cx("right-coupon")}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coupon
