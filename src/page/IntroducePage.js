import React from 'react'
import classnames from "classnames/bind";
import styles from "./IntroducePage.module.scss";
import Navbar from '../component/navbar/Navbar';
import Introduce from '../component/introduce/Introduce';
import Footer from '../component/Footer/Footer';
import WhyChooseUs from '../component/whychooseus/WhyChooseUs';
import Introduct_Function from '../component/Introduct_Function/Introduct_Function';
import TeamMember from '../component/teamMember/TeamMember';
import Introduceweb from '../component/introduceweb/Introduceweb';

const cx = classnames.bind(styles);
function IntroducePage() {
    return (
        < div className={cx("wrapper")}>
            <Navbar />
            <div className={cx("intro")}>
                <Introduce />
            </div>
            <Introduceweb />
            <Introduct_Function />
            <WhyChooseUs />
            <TeamMember />
            <Footer />
        </div>
    )
}
export default IntroducePage;