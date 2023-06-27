import project1Image1 from '../../assets/project-3.jpg';


const Project2 = () => {
    const websiteLink = 'https://new-project-a11.web.app/';
    const gitLink = 'https://github.com/nahian255/hero-s-toy-b7-a11'
    const gitLinkServer = 'https://github.com/nahian255/hero-s-toy-b7-a11-server-'

    return (
        <div>
            <section className="bg-gray-100">
                <div className=" mx-auto  py-16">
                    <div className="max-w-screen-xl  mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Hero&apos;s Toy
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
                                Git Client ||
                            </a>
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
                                    src={project1Image1}
                                    alt="Project 1 Image 2"
                                    className="h-80 w-full object-cover mb-4"
                                />
                                <p className="text-gray-800 text-4xl text-center">
                                    another Image
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img
                                    src={project1Image1}
                                    alt="Project 1 Image 3"
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
                                <li>Node</li>
                                <li>MongoDB</li>
                                <li>Express js</li>
                                <li>Firebase, varcel</li>
                            </ul>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Project Description
                            </h3>
                            <p className="text-gray-800">
                                Hero&apos;s Toys is an online marketplace that brings together toy enthusiasts and collectors to discover and purchase a wide range of high-quality and unique toys. With a diverse collection of action figures, dolls, board games, and more, Hero&apos;s Toys offers something for everyone. The user-friendly interface allows for easy navigation and secure transactions, while the seller community ensures a constantly evolving inventory of sought-after toys. Join Hero&apos;s Toys and explore a world of excitement and nostalgia, where toy lovers can connect, shop, and find the perfect toys for their collection or as gifts.

                                Please note that this is a condensed summary. You can adjust and expand it further based on your specific project details and goals.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project2;