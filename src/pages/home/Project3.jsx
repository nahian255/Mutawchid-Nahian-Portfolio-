import project1Image1 from '../../assets/project-2.jpg';
import project1Image2 from '../../assets/chef.jpg';
import project1Image3 from '../../assets/chefone.jpg';


const Project3 = () => {
    const websiteLink = 'https://auth-project-a10.web.app/';
    const gitLink = 'https://github.com/nahian255/Chef-hunter-b7-a10'

    return (
        <div>
            <section className="bg-gray-100">
                <div className=" mx-auto  py-16">
                    <div className="max-w-screen-xl  mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Chef Hub
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
                                Git Client
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
                                    Home
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img
                                    src={project1Image2}
                                    alt="Project 1 Image 2"
                                    className="h-80 w-full object-cover mb-4"
                                />
                                <p className="text-gray-800 text-4xl text-center">
                                    chef Part
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img
                                    src={project1Image3}
                                    alt="Project 1 Image 3"
                                    className="h-80 w-full object-cover mb-4"
                                />
                                <p className="text-gray-800 text-4xl text-center">
                                    Recipi
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
                            </ul>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Project Description
                            </h3>
                            <p className="text-gray-800">
                                Chef Hub is an innovative online platform that serves as a hub for culinary enthusiasts, connecting aspiring chefs, food lovers, and industry professionals. Our platform offers a comprehensive range of features and resources to empower individuals in their culinary journey and foster a vibrant culinary community. <br />
                                Chef Hub provides a platform for users to share their favorite recipes, culinary creations, and cooking tips. Discover a wide variety of recipes from different cuisines, browse through user-generated content, and find inspiration for your next culinary adventure.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project3;