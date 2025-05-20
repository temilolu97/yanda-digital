import { useState } from "react";
import { useLocation } from "react-router-dom";
import cartHelper from "../utils/cartHelper";
import { useCart } from "../contexts/CartContext";

export default function SingleProduct() {
    const location = useLocation();
    const product = location.state?.item;
    const [quantity, setQuantity] = useState(1);

    const {addToCart} = useCart()

    const increaseQty = () => setQuantity((q) => q + 1);
    const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

    const formatPrice = (price: number) => `₦${price.toLocaleString()}`;

    if (!product) return <p className="text-center py-10">Product not found.</p>;


    const handleAddToCart = (item: any) => {
        item.quantity = quantity;
        cartHelper.addToCart(item)
    }
    return (
        <div className="min-h-screen max-w-5xl mx-auto p-6">
            <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Image */}
                <div className="flex items-center justify-center bg-gray-100 p-6">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-96 object-contain transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {product.name}
                        </h1>
                        <p className="text-3xl text-blue-600 font-semibold mb-6">
                            {formatPrice(product.price)}
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {product.description || "This is a high-quality, premium product with exceptional performance and design. Order now and experience the difference."}
                        </p>
                    </div>

                    {/* Quantity & Action */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <button
                                onClick={decreaseQty}
                                disabled={quantity <= 1}
                                className={`px-4 py-2 text-xl font-bold ${quantity <= 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-black"
                                    }`}
                            >
                                −
                            </button>
                            <span className="px-6 text-lg font-medium">{quantity}</span>
                            <button
                                onClick={increaseQty}
                                className="px-4 py-2 text-xl font-bold text-gray-600 hover:text-black"
                            >
                                +
                            </button>
                        </div>

                        <button onClick={()=>addToCart(product)} className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-lg w-full sm:w-auto">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
