import React from "react";
import classnames from "classnames/bind";
import styles from "./Popup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { useAppContext } from "../../context/appContext.js";
import { useNavigate } from "react-router-dom";
const link = document.createElement("link");
link.rel = "stylesheet";

const cx = classnames.bind(styles);

function Popup({ type, text }) {
  const { clearAlert } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className={cx("container")}>
      <div className={cx("popup-container active")}>
        <div className={cx("popup-box")}>
          {type === "success" && (
            <div className={cx("success-icon")}>
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
          {type === "error" && (
            <div className={cx("error-icon")}>
              <FontAwesomeIcon icon={faFaceSadTear} />
            </div>
          )}
          <h1>
            {" "}
            {type === "success" && "THÀNH cÔNG"}
            {type === "error" && "Opps..."}
          </h1>
          <p>
            {type === "success" && text}
            {type === "error" && text}
          </p>
          {type === "success" && (
            <button
              className={cx("close-btn")}
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              OK
            </button>
          )}
          {type === "error" && (
            <button
              className={cx("close-btn")}
              onClick={(e) => {
                e.preventDefault();
                clearAlert();
              }}
            >
              OK
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;
