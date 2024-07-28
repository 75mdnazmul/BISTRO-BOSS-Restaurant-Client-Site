import fromOurMenuImg from "../../../assets/home/featured.webp"
import "./FeaturedManu.css"

const FeaturedManu = () => {
    return (
        <div className="mb-12 sm:mb-12 md:mb-20 lg:mb-24 xl:mb-24 Featured-Menu pt-1 pb-12 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-20">
            <div className="mx-auto text-center mt-10 sm:mt-10 md:mt-14 lg:mt-20 xl:mt-20 mb-12 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-16 w-6/12 sm:w-6/12 md:w-6/12 lg:w-4/12 xl:w-4/12 text-slate-700">
                <i className=" text-yellow-300 text-lg sm:text-md md:text-md lg:text-lg xl:text-lg">---Check it out---</i>
                <div className="w-full h-1 bg-slate-100 mt-3"></div>
                <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl py-2 font-bold text-slate-100">Featured Manu</h2>
                <div className="w-full bg-slate-100 h-1"></div>
            </div>
            <div className="md:flex lg:flex xl:flex justify-center items-center px-12 sm:px-12 md:px-20 lg:px-40 xl:px-40">
                <div className="pb-8 sm:pb-8">
                    <img src={fromOurMenuImg} alt="From Our Menu Img" />
                </div>
                <div className="md:ml-10 space-y-3 text">
                    <p className="text-white text-lg">Aug 20, 2029</p>
                    <p className="text-white text-xl uppercase">Where can i get some ?</p>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn bg-transparent text-xl border-b-8 border-0 border-yellow-600 hover:bg-yellow-600 text-white  hover:border-0 uppercase">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedManu;

