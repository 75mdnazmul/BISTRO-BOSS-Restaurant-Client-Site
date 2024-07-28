import { Link } from "react-router-dom";
import img from "../../assets/error.webp"
import useTitleName from "../../Hooks/useTitleName";

const ErrorPage = () => {
    useTitleName('Error page')

    return (
        <div className="container text-center">
            <div className="w-5/12 mx-auto">
                < img src={img} alt="Error"/>
            </div>
            <div className="">
                <Link to='/'>
                    <button className='px-5 my-5 rounded-xl font-bold py-2 text-lg text-bold' style={{ color: 'white', backgroundColor: '#04B4AE' }} title="Go to the Home">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;