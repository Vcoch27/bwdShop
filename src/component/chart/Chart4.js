import React from 'react'
import classnames from "classnames/bind";
import styles from "./Chart4.module.scss";
const cx = classnames.bind(styles);
function Chart4() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('text')}>
                <p id={cx('text')}>Tên của biểu đồ là cái này nhaaaaa</p>
            </div>
            <section id={cx("skills")} className={cx("toad-fullscreen")}>
                <article className={cx("skills")}>
                    <div className={cx("t-6")}>
                        <p>Doanh mục 1<span></span><span className={cx("skills")}></span></p>
                    </div>
                    <div className={cx("t-6")}>
                        <p>Doanh mục 2<span></span><span className={cx("skills")}></span></p>
                    </div>

                    <div className={cx("t-6")}>
                        <p>Doanh mục 3<span></span><span className={cx("skills")}></span></p>
                    </div>
                    <div className={cx("t-6")}>
                        <p>Doanh mục 4<span></span><span className={cx("skills")}></span></p>
                    </div>

                    <div className={cx("t-6")}>
                        <p>Doanh mục 5<span></span><span className={cx("skills")}></span></p>
                    </div>
                    <div className={cx("t-6")}>
                        <p>Doanh mục 6<span></span><span className={cx("skills")}></span></p>
                    </div>

                    <div className={cx("t-6")}>
                        <p>Doanh mục 7<span></span><span className={cx("skills")}></span></p>
                    </div>
                    <div className={cx("t-6")}>
                        <p>Doanh mục 8<span></span><span className={cx("skills")}></span></p>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Chart4
