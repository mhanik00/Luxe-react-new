import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRulerCombined, faUserTie, faHome } from '@fortawesome/free-solid-svg-icons'

const ServiceCard = ({ icon, title, description }) => (
  <div className="text-center p-8 hover:bg-white hover:shadow-xl rounded-lg transition duration-300">
    <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
      <FontAwesomeIcon icon={icon} className="text-2xl" />
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const LuxuryServices = () => {
  const services = [
    {
      icon: faRulerCombined,
      title: 'Personal Tailoring',
      description: 'Expert tailors ensuring the perfect fit for your garments'
    },
    {
      icon: faUserTie,
      title: 'Style Consultation',
      description: 'Professional advice to enhance your personal style'
    },
    {
      icon: faHome,
      title: 'Home Fitting',
      description: 'Luxury shopping experience in the comfort of your home'
    }
  ]

  return (
    <section id="luxury-services" className="py-24 bg-gradient-to-r from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 playfair">Luxury Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LuxuryServices 