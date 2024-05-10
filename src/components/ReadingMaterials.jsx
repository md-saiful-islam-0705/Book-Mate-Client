import { FaBook } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { MdOutlineBookOnline } from "react-icons/md";
import { LuFileAudio } from "react-icons/lu";
import { IoNewspaper } from "react-icons/io5";
const ReadingMaterials = () => {
  return (
    <>
      <div className="my-6 space-y-1">
        <h1 className="text-3xl text-center font-bold">
          Welcome to the library
        </h1>
        <p className="text-center">Explore Our Reading Collection</p>
        <div className="flex items-center text-center w-48 mx-auto">
          <hr className="flex-grow border-black" />
          <div className="mx-2 text-3xl text-black">
            <FaBook />
          </div>
          <hr className="flex-grow border-black" />
        </div>
        <div>
          <div className="flex justify-around items-center  py-8">
            <div className="text-center flex flex-col items-center">
             <p className="text-gray-500 border-2 hover:border-purple-500 hover:text-purple-500 p-5 rounded-xl text-4xl"> 
                <MdOutlineBookOnline />
              </p>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Ebooks</h3>
            </div>
            <div className="text-center flex flex-col items-center">
              <p className="text-gray-500 border-2 hover:border-purple-500 hover:text-purple-500 p-5 rounded-xl text-4xl">
                <LuFileAudio />
              </p>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Audiobooks</h3>
            </div>
            <div className="text-center flex flex-col items-center">
              <p className="text-gray-500 border-2 hover:border-purple-500 hover:text-purple-500 p-5 rounded-xl text-4xl">
                <IoNewspaper />
              </p>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Magazines</h3>
            </div>
            <div className="text-center flex flex-col items-center">
              <p className="text-gray-500 border-2 hover:border-purple-500 hover:text-purple-500 p-5 rounded-xl text-4xl">
              <GiBookshelf />
              </p>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Kids' Items</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadingMaterials;
