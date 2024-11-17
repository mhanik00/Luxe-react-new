import man1 from '../images/man1.jpg'
import man2 from '../images/man2.jpg'
import man3 from '../images/man3.jpg'




const TestimonialCard = ({ image, name, role, quote }) => (
  <div className="bg-gray-800 p-8 rounded-xl hover:shadow-2xl transition duration-300">
    <div className="flex items-center mb-6">
      <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-400">{role}</p>
      </div>
    </div>
    <p className="text-gray-300 italic">{quote}</p>
    <div className="mt-4 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <i key={i} className="fas fa-star"></i>
      ))}
    </div>
  </div>
)

const Testimonials = () => {
  const testimonials = [
    {
      image: man1,
      name: 'James Wilson',
      role: 'CEO, Tech Corp',
      quote: 'The quality of their suits is unmatched. I\'ve never felt more confident in my business meetings.'
    },
    {
      image: man2,
      name: 'Michael Brown',
      role: 'Fashion Designer',
      quote: 'Their attention to detail and customer service is exceptional. A truly luxury experience.'
    },
    {
      image: man3,
      name: 'David Chen',
      role: 'Executive Director',
      quote: 'LUXE has transformed my wardrobe. Their style consultation was invaluable.'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 playfair">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 