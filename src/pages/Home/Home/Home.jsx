import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PupularInstructor from "../PupularInstructor/PupularInstructor";
import Additon from "../Addition/Additon";
// import { useState } from "react";
// import { motion, spring } from "framer-motion";
import "./Home.css";
import useAuth from "../../../Hooks/useAuth";
import Section2 from "../Addition/Section2";
import Facilitys from "../Addition/Facilitys";
import Sponser from "../Addition/Sponser";
import Upcoming from "../Addition/Upcoming";

const Home = () => {
  const { darkmod, setDarkmod } = useAuth();
//   const [isOn, setIsOn] = useState(false);
  // const [Theme, setTheme] = useState('light');

  // const toggleSwitch = () => {
  //     setIsOn(!isOn)
  //     setTheme(Theme === "light" ? "dark" : "light")
  // };


//   data-theme={darkmod}
  return (
    <div className="">
      <Helmet>
        <title>Sumner Sports camp | Home</title>
      </Helmet>
      {/* <div
        className="fixed z-30 mt-5 ml-36 md:mt-8 switch md:ml-40"
        data-isOn={darkmod}
        onClick={toggleSwitch}
      >
        <motion.div className="handle" layout transition={spring} />
      </div> */}
            
      <Banner></Banner>
      <Facilitys></Facilitys>
      <PopularClass></PopularClass>
      <PupularInstructor></PupularInstructor>
      <Additon></Additon>
      <Sponser></Sponser>
      <Upcoming></Upcoming>
      <Section2></Section2>      
    </div>
  );
};

export default Home;
