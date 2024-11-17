import hero from '../images/hero.jpg'

const Hero = () => {
  return (
    <header id="hero" className="relative h-96 md:h-screen">
      <div 
        className="absolute inset-0 bg-center bg-cover" 
        style={{backgroundImage: `url(${hero})`}}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl hero-text">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold playfair mb-6">
            Elevate Your Style
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover our latest collection of premium menswear and accessories.
          </p>
          <a 
            href="#" 
            className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero 