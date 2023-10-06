import { NavLink } from "react-router-dom";
import { useWishContext } from "../Components/Context/WishContext";
import Wish from "../Components/Wishlist/Wish";

const Wishlist = () => {
  const { wishdata, ClearWishlist } = useWishContext();

  if (Array.isArray(wishdata) && wishdata.length === 0) {
    return <p className="text-sm text-center py-5 text-red-600 font-semibold">There are no items in wishlist......</p>;
  } else {
    return (
      <>
        <section className="px-8 md:px-16 xl:px-32 py-5 text-gray-500 first-slide">
          <div className="">
            <div className="pb-5">
              <ul className="flex space-x-5 justify-between font-semibold">
                <li>Items</li>
                <li className="d-none d-md-block">Price</li>
                <li className="d-none d-md-block">Quantity</li>
                <li className="">Company</li>
                <li>Remove</li>
              </ul>
              <hr className="my-2" />
            </div>

            <div className="">
              {wishdata.map((elm) => {
                return (
                  <div className="" key={elm.id}>
                    <Wish {...elm} />
                  </div>
                );
              })}
            </div>

            <hr className="mt-5" />
            <div className="py-4 flex justify-between items-center">
              <NavLink to="/product">
                <button className="bg-txt p-2 text-white rounded-md font-semibold">
                  Continue Shopping
                </button>
              </NavLink>
              <button
                className="bg-red-400 text-white p-2 rounded-md font-semibold"
                onClick={ClearWishlist}
              >
                Clear Items
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Wishlist;
