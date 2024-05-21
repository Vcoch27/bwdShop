import React, { useRef } from "react";
// import './Slider.module.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "./Slider.css";

export const Slider = () => {
  const sliders = [
    {
      image:
        "https://media.istockphoto.com/id/1324734873/photo/vietnamese-fishermen-are-doing-basketry-for-fishing-equipment-at-morning-in-thu-sy-village.jpg?b=1&s=170667a&w=0&k=20&c=5WwgExcw6oI5Z7Et7zgJoA8Z17kg_es3-QSZUDDp-9M=",
      title: "GỐM SỨ BÁT TRÀNG",
      subtitle: "Thương hiệu gốm sự số 1 Việt Nam",
      description:
        "Thương hiệu Gốm Minh Đường thuộc Công ty TNHH Thương mại & Sản xuất Gốm Bát Tràng Việt Nam. Chúng tôi chuyên sản xuất, phân phối và trưng bày các sản phẩm gốm sứ Bát Tràng chính hãng tới tay người tiêu dùng với giá xuất xưởng, không qua trung gian. ",
    },
    {
      image:
        "https://www.gomnghethuat.com/wp-content/uploads/chuot-gom-cac-buoc-lam-ra-san-pham-gom.jpg",
      title: "GỐM SỨ BÁT TRÀNG",
      subtitle: "Thương hiệu gốm sự số 1 Việt Nam",
      description:
        "Thương hiệu Gốm Minh Đường thuộc Công ty TNHH Thương mại & Sản xuất Gốm Bát Tràng Việt Nam. Chúng tôi chuyên sản xuất, phân phối và trưng bày các sản phẩm gốm sứ Bát Tràng chính hãng tới tay người tiêu dùng với giá xuất xưởng, không qua trung gian. ",
    },
    {
      image:
        "https://globalopentour.com/wp-content/Content/images/non-la-lang-chuong-ha-noi-1.jpeg",
      title: "GỐM SỨ BÁT TRÀNG",
      subtitle: "Thương hiệu gốm sự số 1 Việt Nam",
      description:
        "Thương hiệu Gốm Minh Đường thuộc Công ty TNHH Thương mại & Sản xuất Gốm Bát Tràng Việt Nam. Chúng tôi chuyên sản xuất, phân phối và trưng bày các sản phẩm gốm sứ Bát Tràng chính hãng tới tay người tiêu dùng với giá xuất xưởng, không qua trung gian. ",
    },
    {
      image:
        "https://cdn.tripways.com/2020/08/01121046/Chinese-Silk-rolls-833x521.jpg",
      title: "GỐM SỨ BÁT TRÀNG",
      subtitle: "Thương hiệu gốm sự số 1 Việt Nam",
      description:
        "Gốm Minh Đường – Thương hiệu Gốm Sứ Bát Tràng Chính Hãng. Thương hiệu Gốm Minh Đường thuộc Công ty TNHH Thương mại & Sản xuất Gốm Bát Tràng Việt Nam. Chúng tôi chuyên sản xuất, phân phối và trưng bày các sản phẩm gốm sứ Bát Tràng chính hãng tới tay người tiêu dùng với giá xuất xưởng, không qua trung gian. ",
    },
  ];
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      {/* <Navbar className='nav' /> */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.image} className="swiper-slide ">
            <div className="content">
              <div className="sub-content">
                <div className="title" data-swiper-parallax="-300">
                  <p>{slide.title}</p>
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  <p>{slide.subtitle}</p>
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
            <img src={slide.image} alt={slide.title} />
            <div className="overlay">.</div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
