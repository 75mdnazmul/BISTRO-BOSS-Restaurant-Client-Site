
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center my-10 sm:my-10 md:my-10 lg:my-20 xl:my-20 w-7/12 sm:w-6/12 md:w-6/12 lg:w-4/12 xl:w-5/12 text-slate-700 font-sans">
            <i className=" text-yellow-600 text-lg sm:text-md md:text-md lg:text-lg xl:text-lg">{subHeading}</i>
            <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl py-2 font-bold text-slate-700 border-y-4 border-gray-300 w-full mt-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;