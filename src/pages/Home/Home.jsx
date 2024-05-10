import Navbar from "../shared/Navbar";
import Banner from "../../components/Banner";
import Footer from "../shared/Footer";
import Categories from "../Categories/Categories";
import PopularBooks from "../../components/PopularBooks";
import ReadingMaterials from "../../components/ReadingMaterials";

const Home = () => {
  return (
    <>
      <div className="container mx-auto ">
        <Navbar />
        <Banner />
        <ReadingMaterials></ReadingMaterials>
        <Categories></Categories>
        <PopularBooks></PopularBooks>
        <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        <Footer />
      </div>
    </>
  );
};



export default Home;
