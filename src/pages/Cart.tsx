import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

// interface CartItem {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
//     quantity: number;
// }



export default function Cart() {
    let { cartItems, removeFromCart, updateQuantity } = useCart()
    console.log(cartItems);
    
    // const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
    const [loading, setLoading] = useState<boolean>(false)

    // const increaseQty = (id: number) => {
    //     setCartItems((items) =>
    //         items.map((item) =>
    //             item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    //         )
    //     );
    // };

    // const decreaseQty = (id: number) => {
    //     setCartItems((items) =>
    //         items.map((item) => {
    //             if (item.id === id && item.quantity > 1) {
    //                 return { ...item, quantity: item.quantity - 1 };
    //             }
    //             return item;
    //         })
    //     );
    // };

    // const removeItem = (id: number) => {
    //     setCartItems((items) => items.filter((item) => item.id !== id));
    // };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const formatPrice = (price: number) => `₦${price.toLocaleString()}`;

    const handleCheckout = () => {
        setLoading(true)
        // navigate to checkout page or process order
        // navigate("/checkout", { state: { items: cartItems } });
        setTimeout(() => {
            alert('checkout complete')
            setLoading(false)
        }, 3000);
        localStorage.removeItem('cart')
    };

    return (
        <div className="w-full flex  flex-col justify-center items-center p-6">
            <div className="mb-14 text-3xl font-bold">
                <p>Your cart</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 w-full md:max-w-6xl">
                {/* Cart Items (Left - 2 parts) */}
                <div className="p-6 bg-white rounded-lg shadow">
                    {cartItems.length > 0 ? (
                        cartItems.map(cartItem => (
                            <div key={cartItem.id} className="rounded p-4  bg-gray-50 grid grid-cols-3 md:grid-cols-5 items-center gap-4 my-4">
                                <img src={cartItem.image} alt={cartItem.name} className="h-20 w-20 object-cover" />
                                <p className="text-sm font-medium text-gray-800">{cartItem.name}</p>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="hover:cursor-pointer" onClick={()=>updateQuantity(cartItem.id,cartItem.quantity -1)}>-</div>
                                    <input type="number" value={cartItem.quantity} className="w-10 border text-center" />
                                    <div className="hover:cursor-pointer" onClick={()=>updateQuantity(cartItem.id,cartItem.quantity +1)}>+</div>
                                </div>
                                <p className="text-right font-semibold text-gray-700 break-words sm:text-base">{formatPrice(cartItem.price)}</p>
                                <div className="flex justify-center">
                                    <TrashIcon onClick={()=>removeFromCart(cartItem.id)} className="h-6 w-6" />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>Your cart is empty</div>
                    )}
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
                    <p className="text-lg font-semibold text-center mb-4">Cart Summary</p>
                    <div className="border-t border-b py-4 flex justify-between items-center">
                        <p className="text-gray-700 font-medium">Total</p>
                        <p className="text-gray-900 font-bold">{formatPrice(subtotal)}</p>
                    </div>
                    <button
                        disabled={subtotal == 0}
                        onClick={handleCheckout}
                        className={`w-full mt-6 ${subtotal == 0 ? 'bg-blue-200' : 'bg-blue-600 hover:bg-blue-700'} text-white py-2 rounded-lg  transition`}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4l5-5-5-5v4a10 10 0 00-10 10z"
                                    />
                                </svg>
                                Processing...
                            </div>
                        ) : "Proceed to Checkout"}
                    </button>
                </div>
            </div>

        </div>

    );
}
