import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";
import MoreItemButton from "../../Shared/MoreItemButton/MoreItemButton";
import { Link } from "react-router-dom";

const FromOurMenu = () => {
    const [menu, loading, error] = useMenu();
    if (loading) {
        return <div className="flex items-center justify-center h-[100vh]">
            <span className="loading loading-spinner w-[50px] text-warning"></span>
        </div>;
    }

    if (error) {
        return <div>Error loading menu: {error.message}</div>;
    }
    
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div>
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="flex justify-center pb-12 sm:pb-12 md:pb-20 lg:pb-20 xl:pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 max-w-[480px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
                    {
                        popular.map(item => <MenuItems
                            key={item._id}
                            item={item}
                        ></MenuItems>)
                    }
                </div>
            </div>
            <Link to='/menu'>
                <MoreItemButton name='View full menu'></MoreItemButton>
            </Link>
        </div>
    );
};

export default FromOurMenu;