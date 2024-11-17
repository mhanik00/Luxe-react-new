import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of your navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { title: 'Home', id: 'hero' },
    { title: 'Collections', id: 'featured-collection' },
    { title: 'Categories', id: 'categories' },
    { title: 'Products', id: 'featured-products' },
    { title: 'Services', id: 'luxury-services' },
    { title: 'Values', id: 'brand-values' },
    { title: 'Testimonials', id: 'testimonials' }
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-2xl font-bold playfair"
          >
            LUXE
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-800 hover:text-gray-600 transition cursor-pointer"
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-800 hover:text-gray-600"
              onClick={handleSearchToggle}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <Link to="/account" className="text-gray-800 hover:text-gray-600">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <button className="text-gray-800 hover:text-gray-600 relative">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </button>
            <button 
              className="md:hidden text-gray-800"
              onClick={handleMobileMenuToggle}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="flex justify-end mb-4">
          <button onClick={handleMobileMenuToggle}>
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-800 hover:text-gray-600 text-lg text-left px-4"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div id="searchOverlay" className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Search</h2>
                <button onClick={handleSearchToggle} className="text-gray-500 hover:text-gray-700">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <input 
                type="text" 
                placeholder="Search for products..." 
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 