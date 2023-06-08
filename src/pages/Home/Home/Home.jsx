import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PupularInstructor from "../PupularInstructor/PupularInstructor";
import Additon from "../Addition/Additon";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Sumner Sports camp | Home</title>
      </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PupularInstructor></PupularInstructor>
            <Additon></Additon>
        </div>
    );
};

export default Home;