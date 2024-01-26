// src/components/Banner.js
import img from '../../assets/nahian.jpg'

const Banner = () => {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto px-4 py-36">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <h3 className='text-2xl'>Hi I&apos;m  </h3>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                            Mutwchid Nahian
                        </h1>
                        <p className="text-4xl text-gray-700 mb-8">
                            Junior Web developer
                        </p>
                        <p className='mb-8'>MERN stack developer // React JS developer</p>
                        <button onClick={() => window.location.href = 'mailto:mutawchidnahian854@gmail.com'} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                            Hire Me
                        </button>

                        <a href="https://docs.google.com/document/d/1AfSPJYMZ6IqiOSD1UdohbZon1rVdYOiPsQKNYkicW3g/edit" download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4">
                            Resume
                        </a>

                    </div>
                    <div className="md:w-1/2 mt-12 md:mt-2">
                        <img
                            className="rounded-full h-72 w-72 object-cover mx-auto"
                            src={img}

                            alt="Profile"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
