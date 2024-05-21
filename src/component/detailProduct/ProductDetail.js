import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDownLong } from "react-icons/fa6";
import hinh1 from "./img/hinh1.jpg";
import hinh2 from "./img/hinh2.jpg";
import hinh3 from "./img/hinh3.jpg";
import hinh4 from "./img/hinh4.jpg";
import Comment from "../Comment/Comment.js"
import classnames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
const cx = classnames.bind(styles);
function HeaderDetail() {
  const [value, setValue] = useState(1);
  const handleChange = (event) => {
    setValue(parseInt(event.target.value)); // cập nhật giá trị khi input thay đổi
  };

  const [selectedImage, setSelectedImage] = useState(1); // mặc định hiển thị ảnh có id là 1
  const [transformValue, setTransformValue] = useState(0);

  const handleImageClick = (id) => {
    setSelectedImage(id);
  };

  useEffect(() => {
    // Tính toán giá trị transform dựa trên selectedImage
    const newTransformValue = (selectedImage - 1) * -100;
    setTransformValue(newTransformValue);
  }, [selectedImage]);





  return (
    <div className={cx("wrapper")}>
      <div className={cx("card-wrapper")}>
        <div className={cx("card")}>
          {/* card left */}
          <div className={cx("product-imgs")}>
            <div className={cx("img-display")}>
              <div className={cx("img-showcase", "box")} style={{ transform: `translateX(${transformValue}%)` }}>
                <img src={hinh1} alt="" className='showcase' />
                <img src={hinh2} alt="" className='showcase' />
                <img src={hinh3} alt="" className='showcase' />
                <img src={hinh4} alt="" className='showcase' />
                <div className={cx("loop")}></div>
              </div>
            </div>
            <div className={cx("img-select")}>
              <div className={cx("img-item")}>
                <a href="#1" data-id="1" onClick={() => handleImageClick(1)}>
                  <img src={hinh1} alt="" className='select' />
                </a>
              </div>
              <div className={cx("img-item")}>
                <a href="#2" data-id="2" onClick={() => handleImageClick(2)}>
                  <img src={hinh2} alt="" className='select' />
                </a>
              </div>
              <div className={cx("img-item")}>
                <a href="#3" data-id="3" onClick={() => handleImageClick(3)}>
                  <img src={hinh3} alt="" className='select' />
                </a>
              </div>
              <div className={cx("img-item")}>
                <a href="#4" data-id="4" onClick={() => handleImageClick(4)}>
                  <img src={hinh4} alt="" className='select' />
                </a>
              </div>
            </div>
          </div>


          {/* card right */}
          <div className={cx("product-content")}>
            <h2 className={cx("product-title")}>trống lắc</h2>

            <a href="#1" className={cx("product-link")}>
              Chi tiết hơn về sản phẩm  <div className={cx("icondown")}><FaDownLong /></div>
            </a>
            <div className={cx("product-rating")}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
              <span>4.7(21)</span>
            </div>

            <div className={cx("product-price")}>
              <p className={cx("last-price")}>
                Giá Cũ: <span>80.000 VNĐ</span>
              </p>
              <p className={cx("new-price")}>
                Giá Mới: <span>50.000 VNĐ (-37,5%)</span>
              </p>
            </div>

            <div className={cx("product-detail")}>
              <h4>Thông tin:</h4>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque pariatur corrupti possimus suscipit assumenda ipsum reiciendis corporis molestias recusandae maiores eligendi enim consequuntur, sunt at repellendus. Voluptates nam dolore voluptas!</p>
              <ul>
                <li>Xuất xứ: <span>Huế</span></li>
                <li>Khả lăng: <span>Còn hàng</span></li>
                <li>Lại: <span>Đồ chơi truyền thống</span></li>
                <li>Giao hàng: <span>Toàn quốc</span></li>
                <li>Phí vận chuyển: <span>Miễn phí</span></li>
              </ul>
            </div>

            <div className={cx("purchase-info")}>
              <input
                type="number"
                min="0"
                value={value}
                onChange={handleChange}
              />
              <button type='button' className={cx("btn")}>
                Thêm vào giỏ hàng <FaCartArrowDown />
              </button>
            </div>

            <div className={cx("share-to-social")}>
              <p>Chia sẽ tới: </p>
              <a href="#1">
                <FaFacebook />

              </a>
              <a href="#1">
                <SiZalo />
              </a>
              <a href="#1">
                <IoIosMail />
              </a>

              <a href="#1">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>

      </div>
      <div className={cx("wrapper_rate")}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  )
}
export default HeaderDetail;
