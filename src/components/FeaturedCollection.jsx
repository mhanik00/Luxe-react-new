import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import summer from '../images/summer.jpg'
import evening from '../images/evenig.jpg'
import casual from '../images/casual.jpg'

const FeaturedCollection = () => {
  return (
    <>
      <header  className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center playfair">Featured Collection</h1>
          <p className="text-center text-lg text-gray-600 mt-4">
            Explore our handpicked selection of the finest menswear and accessories.
          </p>
        </div>
      </header>
      <section id="featured-collection" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 playfair">Summer Collection 2023</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Experience the perfect blend of comfort and sophistication with our latest summer collection. 
                Featuring lightweight fabrics and contemporary designs crafted for the modern gentleman.
              </p>
              <div className="space-y-4">
                {['Premium Italian fabrics', 'Modern tailored fit', 'Sustainable materials'].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-gray-800 mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a 
                href="#" 
                className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
              >
                View Collection
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src={summer}
                  alt="Summer Collection" 
                  className="w-full mx-auto object-cover rounded-lg shadow-lg h-80"
                />
                <div className="absolute bottom-6 right-6 bg-white py-3 px-6 rounded-full shadow-lg">
                  <span className="text-lg font-semibold">New Arrivals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src={evening}
                  alt="Luxury Collection" 
                  className="w-full mx-auto object-cover rounded-lg shadow-xl h-96"
                />
                <div className="absolute top-6 left-6 bg-black bg-opacity-75 py-3 px-6 rounded-lg">
                  <span className="text-lg font-semibold">Exclusive</span>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <h2 className="text-3xl font-bold mb-6 playfair">Luxury Evening Wear</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Indulge in our exclusive evening wear collection. Each piece is meticulously crafted using the finest materials and expert tailoring techniques to ensure unparalleled elegance.
              </p>
              <div className="space-y-4">
                {['Hand-finished details', 'Luxury silk blends', 'Bespoke fitting service'].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <FontAwesomeIcon icon={faStar} className="text-gold mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a 
                href="#" 
                className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition"
              >
                Explore Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl font-bold mb-6 playfair">Casual Luxury</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Discover our premium casual wear collection that combines comfort with sophistication. Perfect for those who appreciate luxury in their everyday style.
              </p>
              <div className="space-y-4">
                {['Premium cotton blends', 'Modern casual cuts', 'Versatile styling options'].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <FontAwesomeIcon icon={faStar} className="text-gold mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <a 
                href="#" 
                className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
              >
                Shop Collection
              </a>
            </div>
            <div>
              <div className="relative">
                <img 
                  src={casual}
                  alt="Casual Luxury Collection" 
                  className="w-full mx-auto object-cover rounded-lg shadow-xl h-96"
                />
                <div className="absolute bottom-6 right-6 bg-black text-white py-3 px-6 rounded-lg">
                  <span className="text-lg font-semibold">Premium Casual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedCollection 