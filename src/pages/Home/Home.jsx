import Navbar from "../shared/Navbar";
import Banner from "../../components/Banner";
import Footer from "../shared/Footer";
import TouristsSpot from "../../components/TouristsSpot";
import Countries from "../AddCountries/Countries";
import Contact from "../Contact/Contact";
import TravelTipsBlog from "../../components/TravelTipsBlog";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <>
      <div className="container mx-auto ">
        <Navbar />
        <Banner />
        <Categories></Categories>
        <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        <Footer />
      </div>
    </>
  );
};

// No need to define propTypes for properties in this component

export default Home;
