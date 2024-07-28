import FoodCard from '../../Shared/FoodCard/FoodCard';

const OrderTabs = ({ items }) => {
    
    return (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center gap-y-12  w-auto sm:w-auto md:w-auto lg:w-[1200px] xl:w-[1200px] mx-auto pb-12">
                    {
                        items.map(item => <FoodCard
                            key={item._id}
                            item={item}
                        ></FoodCard>)
                    }
                </div>
    );
};

export default OrderTabs;