import { useDispatch, useSelector } from "react-redux";
import { removeitem } from "./cartslice";

const Cart = () => {
  const cartitem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch(); // Corrected

  const handleRemove = (id) => {
    let indexToRemove = cartitem.findIndex((item) => item.id === id);
    dispatch(removeitem(indexToRemove));
  };

  console.log(cartitem);
  return (
    <>
       
      {cartitem.map((e) => (
        <div
          className="gradient-to-r from-green-200 via-blue-100 to-purple-200 rounded-lg shadow-xl p-4 flex flex-col justify-between"
          key={e?.id}
        >
          <div>
            <h3 className="text-lg font-semibold">{e?.name}</h3>
            <p className="text-gray-600 font-semibold">
              {e?.price > 0
                ? new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(e?.price / 100)
                : " "}
            </p>
            <p className="mt-2 font-extralight">{e?.description}</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            {e?.imageId && (
              <img
                className="w-12 h-12 object-cover rounded-full"
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  e?.imageId
                }
                alt={e?.name}
              />
            )}
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => handleRemove(e?.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default Cart;
