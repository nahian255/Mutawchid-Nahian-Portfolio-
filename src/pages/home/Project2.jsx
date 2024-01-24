import project1Image1 from '../../assets/dd1.jpg';
import project1Image2 from '../../assets/dd2.jpg';


const Project2 = () => {
    const websiteLink = 'https://dreamdwell-f6259.web.app/';
    const gitLink = 'https://github.com/nahian255/DreamDwell-client?tab=readme-ov-file'
    const gitLinkServer = 'https://github.com/nahian255/dreamDwell-final'

    return (
        <div>
            <section className="bg-gray-100">
                <div className=" mx-auto  py-16">
                    <div className="max-w-screen-xl  mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Dream-Dwell
                        </h2>

                        {/* live Link */}
                        <div className='mb-8'>
                            <a
                                href={websiteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-2xl"
                            >
                                Live Website ||
                            </a>
                            <a
                                href={gitLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-2xl px-4 "
                            >
                                Git Client || </a>
                            <a
                                href={gitLinkServer}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-2xl px-4 "
                            >
                                Git server
                            </a>

                        </div>

                        {/* Image  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img
                                    src={project1Image1}
                                    alt="Project 1 Image 1"
                                    className="h-80 w-full object-cover mb-4"
                                />
                                <p className="text-gray-800 text-4xl text-center">
                                    Home Image
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img
                                    src={project1Image2}
                                    alt="Project 1 Image 2"
                                    className="h-80 w-full object-cover mb-4"
                                />
                                <p className="text-gray-800 text-4xl text-center">
                                    another Image
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Technologies Used
                            </h3>
                            <ul className="list-disc pl-6 mb-4">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Tailwind</li>
                                <li>mantine UI</li>
                                <li>Node</li>
                                <li>MongoDB</li>
                                <li>Express js</li>
                                <li>Firebase</li>
                            </ul>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Project Description
                            </h3>
                            <p className="text-gray-800">
                                Dream-Dwell is a user-centric platform that simplifies the property booking experience, offering a seamless process for users to discover, book, and manage properties. Users can effortlessly add their properties to the platform, providing detailed information such as descriptions, images, amenities, and location details. This feature empowers property owners to showcase their offerings effectively. With a mobile-friendly design.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project2;