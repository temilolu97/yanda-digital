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
import 'swiper/css/autoplay';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



const Home = () => {
    let products = {
        smartphones: [

            {
                id: 1,
                name: "XIAOMI Redmi Note 14 6.67\" 8GB RAM/256 GB ROM HyperOS -108MP AI Camera - Midnight Black",
                price: 284501,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/8340104/1.jpg?0878",
            },
            {
                id: 2,
                name: "Poco C61 6.71\" 3GB RAM / 64GB ROM Android 14 - Black",
                price: 86400,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/1512883/1.jpg?2183",
            },
            {
                id: 3,
                name: "Samsung Galaxy A06 6.7\" 4GB RAM/64GB ROM Android 14 - Black",
                price: 142688,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/3416104/1.jpg?8164",
            },
            {
                id: 4,
                name: "Samsung Galaxy A25 5G 6.5\" 8GB RAM/256GB ROM Android 14 - Light Blue",
                price: 459259,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/7186104/1.jpg?4082",
            },
            {
                id: 5,
                name: "Samsung Galaxy A55 5G 6.4\" 8GB RAM/128GB ROM Android 13 - Black",
                price: 564000,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/7461863/1.jpg?8642",
            },
            {
                id: 6,
                name: "Samsung Galaxy A16 6.7\" HD 4GB RAM/128GB ROM Android 14 5000mah - Gray",
                price: 225000,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/9842193/1.jpg?2123",
            },
            {
                id: 7,
                name: "Samsung Galaxy A35 5G 6.6\" 8GB RAM/256GB ROM Android 14 - Awesome Navy",
                price: 551000,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/1505873/1.jpg?5703",
            },
            {
                id: 8,
                name: "Hmd Aura 6.56\" 4GB + 64GB 4G LTE, Dual SIM, 5000mAh - Black",
                price: 140105,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/4121473/1.jpg?2750",
            },
        ],
        accessories: [
            {
                id: 9,
                name: "Oraimo FreePods Lite 40-hour Playtime ENC True Wireless Earbuds",
                price: 18727,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/6291752/1.jpg?3301",
            },
            {
                id: 10,
                name: "Oraimo FreePods 3C ENC Calling Noise Cancellation True Wireless Earbuds",
                price: 35721,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/0989042/1.jpg?1126",
            },
            {
                id: 11,
                name: "4pcs Mobile Gaming Thumb Sleeve Sets, Wasp Feelers(2 Pair)",
                price: 2315,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/1938042/1.jpg?1750",
            },
            {
                id: 12,
                name: "Ace Elec 50000 MAh Power Banks With LED Light Portable Super Fast Charger",
                price: 25500,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/0157843/1.jpg?2245",
            },
            {
                id: 13,
                name: "XIAOMI Band 6 Fitness Tracker Bluetooth Watch",
                price: 56700,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/437377/1.jpg?7503",
            },
            {
                id: 14,
                name: "itel PowerPulse A1160 Power-Bank 20000mAh 12W Fast Charging TypeC",
                price: 15273,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/7595563/1.jpg?1325",
            },
            {
                id: 15,
                name: "Ace Elec 50000 MAh Power Banks With LED Light Portable Super Fast Charger..",
                price: 24900,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/3460204/1.jpg?9808",
            },
            {
                id: 16,
                name: "VIC ♛20000mAh Power Banks Portable Charger Ultra Slim Battery Pack( Type C Input)",
                price: 6790,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/3417743/1.jpg?3810",
            },
            {
                id: 17,
                name: "Ace Elec Power Banks 30000 MAh Portable Super Fast Charger",
                price: 14824,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/0106592/1.jpg?5616",
            },
            {
                id: 18,
                name: "Oraimo Traveler 4 20000mAh 10.5W Power Banks",
                price: 13500,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/4165793/1.jpg?1884",
            },
            {
                id: 19,
                name: "Philly 20000mAh Power Charging Bank",
                price: 7895,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/5791463/1.jpg?4960",
            }


        ],
        electronics: [
            {
                id: 54,
                name: "Zealot S67 Portable 60W Wireless Bluetooth Speaker",
                price: 75500,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/16/2950272/1.jpg?6369"
            },
            {
                id: 55,
                name: "Qsonic Bolan 2.1 Hometheater Cinematic SoundBar With SubWoofer",
                price: 87989,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/191166/1.jpg?0765"
            },
            {
                id: 56,
                name: "Nexus 32\" Inches FHD TV (H620B(SA) - Black + 2 Years Warranty",
                price: 126000,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/2636301/1.jpg?4094"
            },
            {
                id: 57,
                name: "Tedber Sinecraft Home Theater S22 Bluetooth SoundBar With Woofer.",
                price: 89000,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/4841902/1.jpg?2714"
            },
            {
                id: 58,
                name: "F&D HT330 Bluetooth Soundbar + Subwoofer - Black",
                price: 230000,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/3411072/1.jpg?2346"
            },
            {
                id: 59,
                name: "TCL 55 Inches UHD 4k Google Smart TV (55P635) + 1 Year Warranty",
                price: 529999,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/5518204/1.jpg?0754"
            },
            {
                id: 60,
                name: "Smart Android Tv Box MXQ Pro 5G 4K Ultra HD Video + HDMI Cable",
                price: 21999,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/7429543/1.jpg?2703"
            },
            {
                id: 61,
                name: "Royal 50 Inches 4k UHD Google TV (RTV50GT8W) + 1 Year Warranty",
                price: 390999,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/0412362/1.jpg?0981"
            },
            {
                id: 62,
                name: "Royal 43 Inches Smart TV (RTV43E5N) + 2 Years Warranty",
                price: 269999,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/0412362/1.jpg?4383"
            },
            {
                id: 63,
                name: "Binatone 30 AMP Automatic Voltage Protector (AVP-3000) - White + 2 Years Warranty",
                price: 18999,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/325358/1.jpg?5892"
            },
            {
                id: 64,
                name: "LG 5W XBOOM Portable & Powerful Bass Speaker (AUD 2TBK)",
                price: 43999,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/6435393/1.jpg?0229"
            },
            {
                id: 65,
                name: "LG 40W Bluetooth Sound Bar (AUD 1 SK) - Black",
                price: 79999,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/3796591/1.jpg?0833"
            },
            {
                id: 66,
                name: "Mora 32'' LED HD TV (TV 32D2N)-Black With Free Bracket",
                price: 139999,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/4990004/1.jpg?6063"
            },
            {
                id: 67,
                name: "LG 5W Powerful Bass Bluetooth Speaker (G2KB)",
                price: 49999,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/9667283/1.jpg?5682"
            },
            {
                id: 68,
                name: "Mora 32'' Smart LED HD TV (TV 32D4N)-Black With Free Bracket",
                price: 179999,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/4990004/1.jpg?6483"
            },
            {
                id: 69,
                name: "Hikers 32'' Frameless Android Smart HD LED TV - Black + 1 Year Warranty",
                price: 133500,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/6271583/1.jpg?5337"
            },
            {
                id: 70,
                name: "Sonivia Powerful Bluetooth Home Theater with extra bass",
                price: 33929,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/1983504/1.jpg?5539"
            },
            {
                id: 71,
                name: "Hikers 43'' Inch Frameless Android Smart FHD LED TV - Black-One Year Warranty",
                price: 207358,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/4471583/1.jpg?5817"
            },
            {
                id: 72,
                name: "Zealot S67 Portable 75W Wireless Bluetooth Speaker",
                price: 68999,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/2841083/1.jpg?3956"
            },
            {
                id: 73,
                name: "itel 5 Sockets 3Metre Cord Power Strip Extension Box",
                price: 6350,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/0489081/1.jpg?9877"
            },
            {
                id: 74,
                name: "Letv 32'' Inches Frameless HD LED TV-Black + 1 YEAR WARRANTY",
                price: 106145,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/1848104/1.jpg?1085"
            },
            {
                id: 75,
                name: "P9 Wireless Bluetooth Headset Headphone Black",
                price: 7140,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/2319752/1.jpg?1235"
            },
            {
                id: 76,
                name: "Mi+ NETFLIX, Prime Video, YouTube installed MXQ pro Smart Box with MI+ 32” LED Tv",
                price: 125499,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1217393/1.jpg?8591"
            },
            {
                id: 77,
                name: "3D VR Headset/Virtual Reality For All Phone",
                price: 9505,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/6208372/1.jpg?7782"
            },
            {
                id: 78,
                name: "P47 Wireless Bluetooth Headphone Foldable Stereo Headset",
                price: 5600,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/4969141/1.jpg?7739"
            },
            {
                id: 79,
                name: "Hikers 32'' Inches Frameless HD LED TV-Black",
                price: 113015,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/3961583/1.jpg?4014"
            },
            {
                id: 80,
                name: "Djack Super Powerful Bluetooth Home Theatre System (D3L) - Black",
                price: 56000,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/8341442/1.jpg?5436"
            },
            {
                id: 81,
                name: "Qasa 12V 4.5Ah Pin Type Rechargeable Fan Replacement Battery",
                price: 15990,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/942454/1.jpg?5232"
            },
            {
                id: 82,
                name: "Super X Bass 3 In 1 Bluetooth Home Theater",
                price: 44950,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/6595283/1.jpg?1639"
            },
            {
                id: 83,
                name: "Tedber TS-R800 Tetherdown Soundbar System + Woofer – With Adaptive Sound, Bluetooth 2.1, Smart Surround Sound, 200W Total Peak Power",
                price: 89800,
                image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/2934004/1.jpg?3177"
            },
        ],
    };

    const { hash } = useLocation();
    console.log(hash);
    

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [hash]);


    return (
        <main id="home" className="px-6 md:px-16 py-10">
            <section className="lg:h-screen">
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
                            <a href='#phones' className=''>Shop Now →</a>
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
            <section className='flex flex-col items-center mt-16'>
                <h3 className="text-3xl font-semibold mb-2">Our Values</h3>
                <div className='md:border p-3 md:p-4 lg:rounded-full shadow-lg grid grid-cols-2 md:grid-cols-4 gap-6'>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-1'>
                        <div className='bg-yellow-100 h-15 w-15 border rounded-full flex items-center justify-center'>
                            <CheckBadgeIcon className='h-10 w-10 ' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold text-center'>Quality</p>
                            <p className='text-sm text-center'>We only stock tested and trusted products</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-1'>
                        <div className='bg-yellow-100 h-15 w-15 border rounded-full flex items-center justify-center'>
                            <AdjustmentsHorizontalIcon className='h-10 w-10 ' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold text-center'>Accessibility</p>
                            <p className='text-sm text-center'>Competitive prices for everyday users</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-1'>
                        <div className='bg-yellow-100 h-15 w-15 border rounded-full flex items-center justify-center'>
                            <ChatBubbleBottomCenterIcon className='h-10 w-10 ' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold text-center'>Service</p>
                            <p className='text-sm text-center'>Fast response, fast delivery</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-1'>
                        <div className='bg-yellow-100 h-15 w-15 border rounded-full flex items-center justify-center'>
                            <ShieldCheckIcon className='h-10 w-10 ' />
                        </div>
                        <div>
                            <p className='text-xl font-semibold text-center'>Integrity</p>
                            <p className='text-sm text-center'>What you see is what you get</p>
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

            <Section id="phones" title="Smartphones" items={products.smartphones} />
            <Section id="accessories" title="Gadgets & Accessories" items={products.accessories} />
            <Section id="electronics" title="Electronics" items={products.electronics} />

            <section className="mt-16 text-center">
                <p className="text-green-600 font-medium">Free delivery in Lagos on orders above ₦150,000</p>
                <p className="text-yellow-600">7-day return policy on eligible items</p>
            </section>
        </main>
    )
}

export default Home