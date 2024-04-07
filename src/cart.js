import { useDispatch, useSelector } from "react-redux";
import {
  removeitem,
  additem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "./cartslice";
import OrderSummary from "./OrderSummary";
import { IMG_CDN_URL } from "./constant";

const Cart = () => {
  const cartitem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch(); // Corrected

  const handleRemove = (id) => {
    let indexToRemove = cartitem.findIndex((item) => item.id === id);
    dispatch(removeitem(indexToRemove));
  };
  const removeItem = (id) => dispatch(removeitem({ id }));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity({ id }));
  const increaseQuantity = (id) => dispatch(increaseItemQuantity({ id }));

  console.log(cartitem);
  if (cartitem.length === 0) {
    return (
      <div className="flex grow min-h-[60vh] justify-center items-center">
        <p className="font-serif text-4xl">Your cart is empty!</p>
      </div>
    );
  }
  return (
    <div className="md:flex flex-row">
      <div className="w-1/2 pl-10 mt-7">
        <ul className="basis-7/12">
          {cartitem &&
            cartitem.map((item) => {
              console.log(item);
              return (
                <li
                  key={item?.item?.card?.info?.id}
                  className="flex gap-4 justify-between max-w-[600px] my-4"
                >
                  <div className="basis-3/12">
                    <img
                      className="w-full h-full md:h-auto object-cover block rounded-md aspect-square"
                      src={IMG_CDN_URL + item?.card?.info?.imageId}
                      alt=""
                    />
                  </div>
                  <div className="basis-9/12">
                    <p className="text-lg font-semibold">
                      {item?.card?.info?.name}
                    </p>

                    <p className="hidden md:block">
                      {item?.card?.info?.description?.length > 50
                        ? item?.card?.info?.description.slice(0, 50) + "..."
                        : item?.card?.info?.description}
                    </p>

                    <p className="my-2 space-x-1">
                      <span className="font-semibold">
                        ₹
                        {parseFloat(
                          (
                            item?.quantity * parseFloat(item?.itemPrice / 100)
                          ).toFixed(2)
                        )}
                      </span>
                      <span className="text-gray-800 font-normal">
                        ({item?.itemPrice / 100} × {item?.quantity})
                      </span>
                    </p>

                    {/* actions */}
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center">
                        <button
                          onClick={() => decreaseQuantity(item?.card?.info?.id)}
                          disabled={item?.quantity === 1}
                          className={
                            "bg-[#7831a7] hover:scale-95 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md"
                          }
                        >
                          -
                        </button>
                        <p className="font-bold w-8 h-8 flex justify-center items-center">
                          {item?.quantity}
                        </p>
                        <button
                          onClick={() => increaseQuantity(item?.card?.info?.id)}
                          className="bg-[#7831a7] hover:scale-95 text-white font-bold w-8 h-8 rounded-md"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item?.card?.info?.id)}
                        className="border border-[#7831a7] text-xs font-semibold text-[#7831a7]  p-2 px-4 rounded-md"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="w-[40vw]">
        <OrderSummary />
      </div>
    </div>
  );
};
export default Cart;
