import html from '../../assets/html.jpg'
import css from '../../assets/css.jpg'
import react from '../../assets/react.jpg'
import node from '../../assets/node.jpg'
import mongo from '../../assets/mongo.jpg'
import boos from '../../assets/boos.jpg'
import fir from '../../assets/fir.jpg'
import tail from '../../assets/tail.jpg'
import varcel from '../../assets/varcel.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'



const skills = [
    { image: html },
    { image: css },
    { image: react },
    { image: node },
    { image: mongo },
    { image: boos },
    { image: fir },
    { image: tail },
    { image: varcel },

];

const Skills = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="bg-gray-100 ">
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-6">
                    Skills
                </h2>
                <div data-aos="zoom-out-right" className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="h-40 w-40 object-contain mb-2"

                            />
                            <span className="text-gray-700">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;