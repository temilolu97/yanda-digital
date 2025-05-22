import { useNavigate } from 'react-router-dom';
interface SectionProps{
    id:string
    items:any[],
    title:string
}
const Section = ({id, items,title}:SectionProps) => {
    const formatPrice = (price:any) => `₦${price.toLocaleString()}`;
    const navigate= useNavigate()
    

    return (
        <section id={id} className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="hover:cursor-pointer p-4 bg-white shadow-md hover:shadow-lg hover:border hover:border-gray-400 transition flex flex-col items-center text-center"
                        onClick={()=>navigate(`/products/${item.id}`,{state:{item}})}
                    >
                        <img src={item.image} className='h-40 w-40  object-contain mb-4'/>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-primary text-blue-600 font-semibold mb-2">{formatPrice(item.price)}</p>
                        {/* <button className='border text-sm font-bold  border-gray-200 rounded-md bg-gray-100 flex items-center px-4 py-2 gap-3'>
                            <ShoppingBagIcon className='h-6 w-6'/>
                            Add to Cart
                        </button> */}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Section