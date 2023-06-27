import project1Image1 from '../../assets/project-1Classes.jpg';
import project1Image2 from '../../assets/p1ins.jpg';
import project1Image3 from '../../assets/p1l.jpg';

const Project1 = () => {
    const websiteLink = 'https://another-project-a12.web.app/';
    const gitLink = 'https://github.com/nahian255/forigenLanguage-b7-a12-client-'
    const gitLinkServer = 'https://github.com/nahian255/forigenLanguage-b7-a12-server'

    return (
        <div>
            <section className="bg-gray-100">
                <div className=" mx-auto  py-16">
                    <div className="max-w-screen-xl  mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            WorldSpeak Language Safari
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
                                    Class section
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img
                                    src={project1Image2}
                                    alt="Project 1 Image 2"
                                    className="h-80 w-full object-cover mb-4"
                                />
                                <p className="text-gray-800 text-4xl text-center">
                                    Instractoro section
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img
                                    src={project1Image3}
                                    alt="Project 1 Image 3"
                                    className="h-80 w-full object-cover mb-4"
                                />
                                <p className="text-gray-800 text-4xl text-center">
                                    Login section
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
                                WorldSpeak Language Safari is an innovative foreign language learning platform that aims to transform the way individuals learn and master new languages. With a strong focus on personalization, interactivity, and immersive experiences, our platform offers a comprehensive and engaging solution for language learners of all levels.

                                At the core of WorldSpeak Language Safari is a personalized learning experience tailored to the individual needs and proficiency levels of each learner. Our advanced algorithms assess users&apos; current language skills and adapt the lessons and exercises accordingly, ensuring that learners are always challenged at the right level to maximize their progress.

                                Gone are the days of tedious textbooks and monotonous exercises. WorldSpeak Language Safari introduces interactive and immersive lessons that bring language learning to life. Through real-life scenarios, learners engage in conversations, interactive exercises, and multimedia content, allowing them to develop their language skills in a practical and engaging manner.

                                With a vast library of languages to choose from, WorldSpeak Language Safari caters to learners with diverse language interests and goals. Whether you&apos;re interested in popular languages like Spanish, French, or Mandarin, or you&apos;re exploring less commonly taught languages, our platform offers a wide range of options.

                                In addition to personalized learning and interactive lessons, WorldSpeak Language Safari provides comprehensive progress tracking and assessments. Learners can monitor their advancement, view detailed performance analytics, and identify areas for improvement, enabling them to track their progress and stay motivated throughout their language learning journey.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project1;