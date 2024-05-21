import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./Statistics.module.scss";
import Chart1 from "../chart/Chart1";
import Chart2 from "../chart/Chart2";
import Chart3 from "../chart/Chart3";
import Chart4 from "../chart/Chart4";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
const cx = classnames.bind(styles);

function Statistics() {
    const [isActiveCpn, setActiveCpn] = useState(1);
    const handleClick = (e) => {
        e.preventDefault();
        setActiveCpn(e.target.key);
        console.log(e.target);
    };

    return (
        <div className={cx("view")}>
            <div className={cx("inner-chart")}>
                <div className={cx("container")}>
                    <div className={cx("wrap")}>
                        <div
                            className={cx("inner-box", "box-f")}
                            onClick={(e) => setActiveCpn(1)}
                            key={1}

                            style={
                                isActiveCpn === 1
                                    ? { border: "1px solid rgb(235, 146, 11)" }
                                    : { border: "1px solid rgb(217, 211, 211)" }
                            }
                        >
                            <div className={cx("inner-title", "sales")}>Sales</div>
                            <div className={cx("inner-desc", "sales2")}>Last Year</div>
                            <figure className={cx("chart")}>
                                <img
                                    src="https://raw.githubusercontent.com/pichukov/PublicAssets/master/curvedOffsetChart.png"
                                    alt=""
                                    className={cx("w-max")}
                                />
                            </figure>
                            <div className={cx("inner-value", "sales3")}>
                                <span>175k</span>
                                <span className={cx("span-red")}>16.2%</span>
                            </div>
                        </div>
                        <div
                            className={cx("inner-box", "box-f")}
                            onClick={(e) => setActiveCpn(2)}

                            key={2}
                            style={
                                isActiveCpn === 2
                                    ? { border: "1px solid rgb(235, 146, 11)" }
                                    : { border: "1px solid rgb(217, 211, 211)" }
                            }
                        >
                            <div className={cx("inner-title")}>Sessions</div>
                            <div className={cx("inner-desc")}>Last Month</div>
                            <figure className={cx("chart2")}>
                                <img
                                    src="https://static.wixstatic.com/media/e83229_ba3f33e11d8f41ed9d1867259ef2879d~mv2.gif"
                                    alt=""
                                    className={cx("w-max", "img2")}
                                />
                            </figure>
                            <div className={cx("inner-value", "section")}>
                                <span>45.1k</span>
                                <span className={cx("span-green")}>+12.6%</span>
                            </div>
                        </div>
                        <div
                            className={cx("inner-box", "box-f")}
                            onClick={(e) => setActiveCpn(3)}

                            key={3}
                            style={
                                isActiveCpn == 3
                                    ? { border: "1px solid rgb(235, 146, 11)" }
                                    : { border: "1px solid rgb(217, 211, 211)" }
                            }
                        >
                            <div className={cx("inner-icon")}>
                                <i className={cx("fa-light fa-dollar-sign", "i1")}></i>
                            </div>
                            <div className={cx("box-body")}>
                                <div className={cx("inner-title")}>Total Profit</div>
                                <div className={cx("inner-desc")}>Last week</div>
                                <div className={cx("inner-v1")}>1.28k</div>
                                <div className={cx("inner-v2")}>
                                    <span> -12.2%</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={cx("inner-box", "box-f")}
                            onClick={(e) => setActiveCpn(4)}

                            key={4}
                            style={
                                isActiveCpn == 4
                                    ? { border: "1px solid rgb(235, 146, 11)" }
                                    : { border: "1px solid rgb(217, 211, 211)" }
                            }
                        >
                            <div className={cx("inner-icon", "inner-pad")}>
                                <i className={cx("fa-solid fa-chart-simple", "i2")}></i>
                            </div>
                            <div className={cx("box-body")}>
                                <div className={cx("inner-title")}>Total Sales</div>
                                <div className={cx("inner-desc")}>Last week</div>
                                <div className={cx("inner-v1")}>$4,673</div>
                                <div className={cx("inner-v2")}>
                                    <span> +25.2%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("inner-map")}>
                <div className={cx("container")}>
                    <div className={cx("inner-box")}>
                        <div className={cx("inner-content")}>
                            {isActiveCpn === 1 && <Chart1 />}
                            {isActiveCpn === 2 && <Chart2 />}
                            {isActiveCpn === 3 && <Chart3 />}
                            {isActiveCpn === 4 && <Chart4 />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;