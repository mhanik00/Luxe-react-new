import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faLeaf, faAward } from '@fortawesome/free-solid-svg-icons'

const ValueCard = ({ icon, title, description }) => (
  <div className="text-center hover:transform hover:scale-105 transition duration-300">
    <div className="w-16 h-16 mx-auto mb-6">
      <FontAwesomeIcon icon={icon} className="text-4xl text-gray-800" />
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const BrandValues = () => {
  const values = [
    {
      icon: faGem,
      title: 'Premium Quality',
      description: 'Crafted with the finest materials and attention to every detail'
    },
    {
      icon: faLeaf,
      title: 'Sustainable Fashion',
      description: 'Committed to ethical practices and environmental responsibility'
    },
    {
      icon: faAward,
      title: 'Lifetime Guarantee',
      description: 'We stand behind our products with confidence and pride'
    }
  ]

  return (
    <section id="brand-values" className="py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center playfair mb-16">Our Values & Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-black text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-6 playfair text-center">Join Our VIP List</h2>
          <p className="text-gray-400 mb-8 text-center">
            Subscribe to receive exclusive offers, early access to new collections, and style tips from our experts.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-full border border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 md:w-96 text-white"
            />
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition hover:shadow-lg">
              Subscribe Now
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            By subscribing, you agree to receive marketing communications from LUXE.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BrandValues 