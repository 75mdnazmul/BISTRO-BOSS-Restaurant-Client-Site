import img1 from "../../../assets/home/slide1.webp"
import img2 from "../../../assets/home/slide2.webp"
import img3 from "../../../assets/home/slide4.webp"
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const ChefRecommends = () => {
    return (
        <div className="mb-24 flex flex-col items-center">
            <SectionTitle
                subHeading={"---Should Try---"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            {/* Food Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center gap-y-10 xl:w-[1200px]">
                <div className="card w-[350px] shadow-xl text-center bg-slate-300 ">
                    <figure><img className="w-[400px] h-[280px] hover:scale-125 transition duration-500" src={img1} alt="food" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-3xl text-slate-900">Salads</h2>
                        <p className="mb-3 text-slate-800 text-xl">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions mx-auto">
                            <button className="btn bg-slate-300 text-yellow-600 text-xl border-b-8 border-0 hover:bg-slate-800 hover:text-[#fda706] hover:border-0 border-yellow-600 uppercase">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] shadow-xl text-center bg-slate-300 ">
                    <figure><img className="w-[400px] h-[280px] hover:scale-125 transition duration-500" src={img2} alt="foods" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-3xl text-slate-900">Pizzas</h2>
                        <p className="mb-3 text-slate-800 text-xl">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions mx-auto">
                            <button className="btn bg-slate-300 text-yellow-600 text-xl border-b-8 border-0 hover:bg-slate-800 hover:text-[#fda706] hover:border-0 border-yellow-600 uppercase">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] shadow-xl text-center bg-slate-300 ">
                    <figure><img className="w-[400px] h-[280px] hover:scale-125 transition duration-500" src={img3} alt="foods" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-3xl text-slate-900">Desserts</h2>
                        <p className="mb-3 text-slate-800 text-xl">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions mx-auto">
                            <button className="btn bg-slate-300 text-yellow-600 text-xl border-b-8 border-0 hover:bg-slate-800 hover:text-[#fda706] hover:border-0 border-yellow-600 uppercase">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;