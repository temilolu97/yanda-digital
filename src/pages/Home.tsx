import React from 'react'
import Section from '../components/Section';
import iphone1 from '../assets/products/iphone14.png'
import iphone2 from '../assets/products/iphone16.png'
import samsung from '../assets/products/samusung s21.jpg'
import pixel from '../assets/products/google pixel 9.jpg'
import tecno from '../assets/products/Camon 30.jpg'
import jblheadphone from '../assets/products/jbl headphone.png'
import jblspeaker from '../assets/products/jbl speaker.jpg'
import powerbank from '../assets/products/powerbank.jpg'
import wirelessCombo from '../assets/products/wireless combo.jpg'
import dellmonitor from '../assets/products/dell monitor.png'
import { AdjustmentsHorizontalIcon, ChatBubbleBottomCenterIcon, CheckBadgeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation'
import 'swiper/css/autoplay';



const Home = () => {
    const products = {
        smartphones: [
            { id: 1, name: 'iPhone 16 Pro Max (512GB)', price: 2921000, image: iphone2 },
            { id: 2, name: 'iPhone 16 Pro (512GB)', price: 2921000, image: iphone2 },
            { id: 3, name: 'iPhone 16 Plus (512GB)', price: 419999, image: iphone2 },
            { id: 4, name: 'iPhone 14 (512GB)', price: 1099000, image: iphone1 },
            { id: 5, name: 'Samsung Galaxy S24 Ultra (12GB/1TB)', price: 2904070, image: samsung },
            { id: 6, name: 'Samsung Galaxy S25 Ultra (12GB/512GB)', price: 2017000, image: samsung },
            { id: 7, name: 'OPPO Reno 13 5G (12GB/512GB)', price: 844000, image: samsung },
            { id: 8, name: 'Google Pixel 8 Pro (12GB/128GB)', price: 1196000, image: pixel },
            { id: 9, name: 'Tecno Phantom X2 Pro 5G (12GB/256GB)', price: 490900, image: tecno },
            { id: 10, name: 'Tecno Camon 30 (12GB/256GB)', price: 371700, image: tecno },
        ],
        accessories: [
            { id: 11, name: 'JBL LIVE 220 BT Wireless Headphone', price: 31280, image: jblheadphone },
            { id: 12, name: 'LDNIO 20000mAh Power Bank', price: 31000, image: powerbank },
            { id: 13, name: 'JBL Charge 4 Portable Bluetooth Speaker', price: 85000, image: jblspeaker },
        ],
        electronics: [
            { id: 14, name: 'Logitech MK235 Wireless Combo', price: 25500, image: wirelessCombo },
            { id: 15, name: 'HP CS500 Wireless Combo', price: 33000, image: wirelessCombo },
            { id: 16, name: 'Dell 27-inch Monitor', price: 175000, image: dellmonitor },
        ],
    };

    return (
        <main className="px-6 md:px-16 py-10">
            <section className="h-screen ">
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Left Side - Text */}
                    <div className="text-center md:text-left space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Welcome to <span className="text-blue-600">Yanda Digital</span>
                        </h1>
                        <p className="text-lg text-gray-700">
                            Your trusted destination for smartphones, gadgets, and everyday electronics at unbeatable prices.
                            Shop the best brands, latest models, and reliable accessories — all delivered straight to your doorstep.
                        </p>
                        <p className="italic text-gray-500">Discover tech that fits your lifestyle.</p>
                        <button className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                            Shop Now →
                        </button>
                    </div>

                    {/* Right Side - Carousel */}
                    <div className="w-full">
                        <Swiper
                            modules={[Autoplay]}
                            navigation
                            loop
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            className=""
                        >
                            <SwiperSlide>
                                <img src={iphone2} alt="Smartphone" className="w-full h-full rounded-xl" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={jblheadphone} alt="Laptop" className="w-full h-full rounded-xl" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={dellmonitor} alt="Accessories" className="w-full h-full rounded-xl" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>


            {/* <section className="mt-16 space-y-4">
                <h2 className="text-3xl font-semibold">About Us</h2>
                <p className="text-gray-700">
                    Yanda Digital is a Nigerian electronics e-commerce store focused on delivering quality phones,
                    accessories, and gadgets to customers nationwide with a clear mission to simplify your access to technology.
                </p>

            </section> */}
            <section className='flex flex-col items-center mt-40 md:mt-16'>
                <h3 className="text-3xl font-semibold mb-2">Our Values</h3>
                <div className='md:border md:p-4 rounded-full shadow-lg grid grid-cols-1 md:grid-cols-4 '>
                    <div className='flex items-center gap-4 mb-1'>
                        <div className='bg-yellow-100 h-15 w-15 border rounded-full flex items-center justify-center'>
                            <CheckBadgeIcon className='h-10 w-10 ' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold'>Quality</p>
                            <p className='text-sm'>We only stock tested and trusted products</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mb-1'>
                        <div className='bg-yellow-100 h-15 w-15 border rounded-full flex items-center justify-center'>
                            <AdjustmentsHorizontalIcon className='h-10 w-10 ' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold'>Accessibility</p>
                            <p className='text-sm'>Competitive prices for everyday users</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mb-1'>
                        <div className='bg-yellow-100 h-15 w-15 border rounded-full flex items-center justify-center'>
                            <ChatBubbleBottomCenterIcon className='h-10 w-10 ' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold'>Service</p>
                            <p className='text-sm'>Fast response, fast delivery</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mb-1'>
                        <div className='bg-yellow-100 h-15 w-15 border rounded-full flex items-center justify-center'>
                            <ShieldCheckIcon className='h-10 w-10 ' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold'>Integrity</p>
                            <p className='text-sm'>What you see is what you get</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="mt-16">
                <h2 className="text-3xl font-semibold mb-4 text-center">Our Services</h2>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='border h-20 p-4 rounded-lg bg-gray-100 font-bold flex items-center justify-center'>
                        <p>Sales of new and pre-owned smartphones</p>
                    </div>
                    <div className='border h-20 p-4 bg-gray-100 font-bold flex items-center justify-center'>
                        <p>Accessories and gadgets</p>
                    </div>
                    <div className='border h-20 p-4 rounded-lg bg-gray-100 font-bold flex items-center justify-center'>
                        <p>Nationwide delivery</p>
                    </div>
                    <div className='border h-20 p-4 rounded-lg bg-gray-100 font-bold flex items-center justify-center'>
                        <p>Warranty-backed products</p>
                    </div>
                    <div className='border h-20 p-4 rounded-lg bg-gray-100 font-bold flex items-center justify-center'>
                        <p>Online customer support</p>
                    </div>
                </div>
            </section>

            <Section title="Smartphones" items={products.smartphones} />
            <Section title="Gadgets & Accessories" items={products.accessories} />
            <Section title="Electronics" items={products.electronics} />

            <section className="mt-16 text-center">
                <p className="text-green-600 font-medium">Free delivery in Lagos on orders above ₦150,000</p>
                <p className="text-yellow-600">7-day return policy on eligible items</p>
            </section>
        </main>
    )
}

export default Home