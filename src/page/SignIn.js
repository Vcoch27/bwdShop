import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./SignInPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext.js";
import Popup from "../component/popup/Popup.js";

const cx = classnames.bind(styles);

function SignInPage() {
  const { login, showErrorMessage, showMessage, textMessage, typeMessage } =
    useAppContext();
  const initialState = {
    password: "",
    email: "",
  };
  const [values, setValues] = useState(initialState);
  const handeChange = (e) => {
    console.log(values);

    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password, email } = values;
    if (!password || !email) {
      showErrorMessage();
    }
    const currentUser = { password, email };
    login(currentUser);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-message")}>
        {showMessage && <Popup type={typeMessage} text={textMessage} />}
      </div>
      <form className={cx("form-sign-up")} onSubmit={handleSubmit}>
        <h1>SIGN IN</h1>
        <div className={cx("other-way-signIn")}>
          <button>
            <FontAwesomeIcon icon={faGooglePlusG} />
          </button>
          <button>
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button>
            <FontAwesomeIcon icon={faGithub} />
          </button>
          <button>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </button>
        </div>
        <p>or use your email password</p>
        <div className={cx("fields")}>
          <input
            type="text"
            className={cx("email-field")}
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={(e) => handeChange(e)}
          />
          <input
            type="password"
            className={cx("password-field")}
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={(e) => handeChange(e)}
          />
        </div>
        <a href="forgot-pass">Forget Your Password?</a>
        <button className={cx("button-sunmit")} type="submit">
          SIGN IN
        </button>
      </form>
      <div className={cx("right-side")}>
        <h1>Hello, Friend!</h1>
        <h2>Welcome to 3HT TEAM</h2>
        <h3>If you do not already have an account?</h3>
        <Link to="/sign-up">
          <button>SIGN UP</button>
        </Link>
      </div>
    </div>
  );
}

export default SignInPage;
