

// Import project images

import { Link } from 'react-router-dom';
import project1Image from '../../assets/project-1.jpg';
import project2Image from '../../assets/project-2.jpg';
import project3Image from '../../assets/project-3.jpg';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import AOS from 'aos';

function Projects() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Projects
                </h2>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img
                            src={project1Image}

                            className="h-40 w-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            WorldSpeak Language Safari
                        </h3>
                        <Link to='/project/languageSafari'>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                View Project
                            </button>
                        </Link>

                    </div>
                    {/* project-2 */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img
                            src={project3Image}

                            className="h-40 w-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            Hero&apos;s Toy
                        </h3>
                        <Link to='/project/heroToy'>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                View Project
                            </button>
                        </Link>

                    </div>
                    {/* project-3 */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img
                            src={project2Image}

                            className="h-40 w-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            Chef Hub
                        </h3>
                        <Link to='/project/chefHub'>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                View Project
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
