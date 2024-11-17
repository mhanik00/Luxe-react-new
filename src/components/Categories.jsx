import suits from '../images/suits.jpg'
import casual from '../images/casual.jpg'
import footwear from '../images/footwear.jpg'
import accessories from '../images/accsecories.jpg'


const CategoryCard = ({ image, title }) => (
  <a href="#" className="group relative overflow-hidden rounded-lg hover-scale">
    <img src={image} alt={title} className="w-full h-80 object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <h3 className="text-white text-2xl font-bold">{title}</h3>
    </div>
  </a>
)

const Categories = () => {
  const categories = [
    { title: 'Suits', image: suits },
    { title: 'Casual Wear', image: casual },
    { title: 'Footwear', image: footwear },
    { title: 'Accessories', image: accessories }
  ]

  return (
    <section id="categories" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 playfair">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 category-grid">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories