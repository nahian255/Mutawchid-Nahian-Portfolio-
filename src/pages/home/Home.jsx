import AboutMe from "./About me";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Projects from "./Project";
import Skills from "./Skills";

const Home = () => {
    return (
        <div>
            <Banner />
            <hr />
            <div className="max-w-screen-xl  mx-auto">
                <AboutMe />
                <hr />
                <Skills />
                <hr />
                <Projects />
                <hr />
                <ContactMe />
            </div>

        </div>
    );
};

export default Home;