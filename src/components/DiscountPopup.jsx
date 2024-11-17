import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup after a small delay
    const showTimeout = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // Hide popup after 10 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false)
    }, 12000) // 11 seconds total (1 second delay + 20 seconds show time)

    // Cleanup timeouts
    return () => {
      clearTimeout(showTimeout)
      clearTimeout(hideTimeout)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 fade-in">
      <div className="bg-[#fafbfa] rounded-lg p-4 sm:p-6 md:p-8  mr-12 w-3/5  mb-56 md:mb-0 mt-0 md:mt-20 relative transform scale-100">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-gray-500 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        
        <div className="text-center">
          <h2 className="text-xl  sm:text-2xl md:text-3xl font-bold playfair mb-2 sm:mb-3 md:mb-4">Special Offer!</h2>
          <div className="bg-black text-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg mb-2 sm:mb-3 md:mb-4  mx-auto">
            <span className="text-lg sm:text-xl md:text-2xl font-bold">20% OFF</span>
          </div>
          <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
            Get 20% off on your first purchase! Use code:
            <span className="block text-base sm:text-lg md:text-xl font-bold text-black mt-1 sm:mt-2">WELCOME20</span>
          </p>
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-black text-xs sm:text-sm md:text-base"
            />
            <button className="w-full bg-black text-white py-1.5 sm:py-2 rounded-lg hover:bg-gray-800 transition text-xs sm:text-sm md:text-base">
              Claim Discount
            </button>
          </div>
          <p className="text-[10px] sm:text-xs text-gray-500 mt-2 sm:mt-3 md:mt-4">
            *Valid for new customers only. Terms & conditions apply.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DiscountPopup 