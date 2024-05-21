import React from 'react'
import classnames from "classnames/bind";
import styles from "./Introduceweb.module.scss";
const cx = classnames.bind(styles);

function Introduce2() {
  return (
    <div className={cx("container")}>
        <div className={cx("text-box")}>
            <h1 className={cx("text-title")}>Văn Minh <span className={cx("highlight1")}>sống</span> và <span className={cx("highlight2")}>đồng hành</span> cùng các bạn trẻ</h1>
            <p>Trước thực trạng chất lượng sống trọ của các bạn trẻ ở Đà Nẵng còn nhiều khó khăn, thiếu thốn về vật chất và tinh thần, năm 2021 nhà trọ Văn Minh ra đời. Từ những nỗ lực phát triển hệ thống chuỗi nhà trọ Văn Minh tại Đà Nẵng, cho đến nay đã có đến 10 cơ sở được mở cửa theo phong cách tối giản, tiện nghi...</p>
            <button className={cx("btn-more")}>Tìm hiểu thêm</button>
        </div>
        <div className={cx("image-box")}>
            <img className={cx("photo-intro")} src="https://nhatrovanminh.com/_next/image?url=%2Fimages%2Fbanner-v2.jpg&w=1920&q=100" alt="Phòng trọ Văn Minh"/>
        </div>
    </div>
  );
}

export default Introduce2