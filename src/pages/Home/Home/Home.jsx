import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PupularInstructor from "../PupularInstructor/PupularInstructor";
import Additon from "../Addition/Additon";
import { useState } from "react";
import { motion, spring } from "framer-motion";
import './Home.css'

const Home = () => {

    const [isOn, setIsOn] = useState(false);
    const [Theme, setTheme] = useState('light');

    const toggleSwitch = () => {
        setIsOn(!isOn)
        setTheme(Theme === "light" ? "dark" : "light")
    };

    return (
        <div data-theme={Theme}>
            
            <Helmet>
        <title>Sumner Sports camp | Home</title>
      </Helmet>
      <div className="fixed z-30 mt-5 ml-36 md:mt-7 switch md:ml-64" data-isOn={isOn} onClick={toggleSwitch}>
                <motion.div className="handle" layout transition={spring} />
            </div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PupularInstructor></PupularInstructor>
            <Additon></Additon>
        </div>
    );
};

export default Home;