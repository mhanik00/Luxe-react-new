import blackSuit from '../images/black suite.jpg'
import jacket from '../images/jacket.jpg' 
import watch from '../images/watch.jpg'

const ProductCard = ({ image, title, description, price, salePrice, badge }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
    <div className="relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-96 object-cover transition duration-300 group-hover:scale-105"
      />
      {badge && (
        <div className={`absolute top-4 right-4 ${
          badge === 'New' ? 'bg-black' : 
          badge === 'sale' ? 'bg-red-400' : 
          'bg-green-600'
        } text-white px-3 py-1 rounded-full text-sm`}>
          {badge}
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">${price}</span>
          {salePrice && <span className="text-gray-400 line-through ml-2">${salePrice}</span>}
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
)

const FeaturedProducts = () => {
  const products = [
    {
      image: blackSuit,
      title: 'Classic Black Suit',
      description: 'Italian wool blend, perfect for formal occasions',
      price: '599.99',
      badge: 'New'
    },
    {
      image: jacket,
      title: 'Man Retro vintage',
      description: 'Italian wool blend, perfect for formal occasions',
      price: '299.99',
      salePrice: '399.99',
      badge: 'sale'
    },
    {
      image: watch,
      title: 'Designer Watch',
      description: 'Swiss-made automatic movement timepiece',
      price: '799.99',
      badge: 'Best Seller'
    }
  ]

  return (
    <section id="featured-products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 playfair">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts 