import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const SearchOverlay = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Search</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
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
  )
}

export default SearchOverlay 