import project1Image1 from '../../assets/netpay.jpg';
import project1Image2 from '../../assets/netpay1.jpg';


const Project3 = () => {
    const websiteLink = 'https://netpay-bef44.web.app/';
    const gitLink = 'https://github.com/Mamun-Ur-Rashid/netplay'
    const gitLinkServer = 'https://github.com/muhammadali246397/netpay-server'

    return (
        <div>
            <section className="bg-gray-100">
                <div className=" mx-auto  py-16">
                    <div className="max-w-screen-xl  mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            NetPay (Team Project)
                        </h2>

                        {/* live Link */}
                        <div className='mb-8'>
                            <a
                                href={websiteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-2xl"
                            >
                                Live website ||
                            </a>
                            <a
                                href={gitLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-2xl px-4 "
                            >
                                Git client
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
                                    Home page
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img
                                    src={project1Image2}
                                    alt="Project 1 Image 2"
                                    className="h-80 w-full object-cover mb-4"
                                />
                                <p className="text-gray-800 text-4xl text-center">
                                    service page
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Technologies Used
                            </h3>
                            <ul className="list-disc pl-6 mb-4">

                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Tailwind</li>
                                <li>Node js</li>
                                <li>Express js</li>
                                <li>MongoDB</li>
                                <li>Firebase</li>
                                <li>varcel</li>
                            </ul>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Project Description
                            </h3>
                            <p className="text-gray-800">
                                This is an online money transfer website. Users can transfer money using it.
                                ●  It’s a group project. Making this almost 7 weeks needs.
                                ●  Users can create accounts and doing Send Money, Cash Out, Bill pay and many more.

                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project3;