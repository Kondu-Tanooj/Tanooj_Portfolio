import React, { useEffect } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip,faBrain,faLaptopCode,faCode, faDatabase, faDesktop, faCogs } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/ProgrammingSkills.scss';

const programmingLanguages = [
    "C",
    "C++",
    "Java",
    "Python",
    "Solidity",
    "R"
];

const webDevelopment = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "BootStrap",
    "PHP",
    "JSP",
    "ExpressJs",
    "NodeJs",
    "ReactJs",
    "Flask",
    "Django",
    "PostMan"
];

const openSourceTechnologies = [
    "Git",
    "Docker",
    "K8S-Kubernetes",
    "Botpress",
    "WordPress"
];

const appDevelopment = [
    "Android Studio"
];

const uiDesign = [
    "Canvas",
    "Figma"
];

const otherTools = [
    "MS Office (Excel, PowerPoint, Word)",
    "Power BI",
    "AI Tools for Automation"
];


const databases = [
    "SQL",
    "MongoDB",
    "Firebase",
    "Cassandra",
    "PostgreSQL"
];

const operatingSystems = [
    "Linux Distros",
    "Windows",
    "MacOS"
];

const iotDevelopment = [
    "Arduino",
    "NodeMCU",
    "ESP32",
    "Raspberry Pi",
    "MQTT",
    "HTTP",
    "DLMS Meters",
    "Home Automation",
    "Reverse Engineering"
];

const machineLearning = [
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Scikit-learn",
    "LangChain",
    "Hugging Face",
    "FAISS",
    "Chainlit",
    "Streamlit",
    "Natural Language Processing (NLP)",
    "Large Language Models (LLM)"    
];

function ProgrammingSkills() {
    useEffect(() => {
        const skillsContainer = document.getElementById("programming-skills");
        skillsContainer.classList.add("fade-in");
    }, []);
    return (
        <div className="container" id="programming-skills">
            <div className="skills-container">
                <h1>Skills & Expertise</h1>
                <div className="skills-grid">
                    
                    {/* Web Development */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faLaptopCode} size="3x" />
                        <h3>Web Development</h3>
                        <p>Skilled in developing dynamic and responsive websites, leveraging modern web technologies like the MERN stack and PHP. I have worked on creating interactive interfaces for projects such as the SLOG e-logging system, which tracks student attendance, and room automation systems for seamless control of IoT devices. My experience spans both front-end and back-end development, ensuring smooth user experiences and efficient data management.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {webDevelopment.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                    
                    {/* Machine Learning & LLM */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faBrain} size="3x" />
                        <h3>Machine Learning & LLM</h3>
                        <p>Experienced in building machine learning models, especially in NLP and Large Language Models (LLM). I have developed chatbots using LLMs to handle tasks like text summarization, question answering, and conversational interactions. Using tools like Hugging Face, LangChain, and Chainlit, I create intelligent automation solutions to enhance user engagement and streamline processes.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack: </span>
                            {machineLearning.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* IoT Development */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faMicrochip} size="3x" />
                        <h3>IoT Development</h3>
                        <p>With over 50 IoT projects completed, I have developed a diverse range of solutions including smart devices, home automation systems, robotics, and automation platforms. My expertise spans popular IoT technologies and protocols, and I have successfully implemented projects such as smart parking systems, fire fighting robots, emergency reporting systems, and drone technology.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {iotDevelopment.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                    
                    {/* Databases */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Databases</h3>
                        <p>I have experience with both relational databases like MySQL and non-relational databases such as MongoDB. I am skilled in designing efficient, optimized databases, whether for structured data with relational models or for scalable, flexible datasets using NoSQL. This enables me to select the right database technology for each project, ensuring performance and data consistency.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {databases.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Operating Systems */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faDesktop} size="3x" />
                        <h3>Operating Systems</h3>
                        <p>Proficient in working with various operating systems, with a strong focus on Linux distributions like Ubuntu and Kali. I utilize these systems for both development and deployment tasks, ensuring optimal performance in my projects, particularly in IoT, web development, and machine learning. My experience with Linux helps streamline workflows and troubleshoot efficiently in diverse environments.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {operatingSystems.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Programming Languages */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <h3>Programming Languages</h3>
                        <p>Proficient in a wide range of programming languages from foundational ones like C to high-level languages used in modern web development.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {programmingLanguages.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                    
                    {/* Tools & Frameworks */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faCogs} size="3x" />
                        <h3>Tools & Frameworks</h3>
                        <p>Proficient with a variety of tools and frameworks to streamline development, including Docker, Git, and more.</p>
                        
                        <div className="tech-category">
                            {/* Open Source Technologies */}
                            <div className="category">
                                <h4>Open Source Technologies</h4>
                                <div className="flex-chips">
                                    {openSourceTechnologies.map((label, index) => (
                                        <Chip key={index} className='chip' label={label} />
                                    ))}
                                </div>
                            </div>

                            {/* App Development */}
                            <div className="category">
                                <h4>App Development</h4>
                                <div className="flex-chips">
                                    {appDevelopment.map((label, index) => (
                                        <Chip key={index} className='chip' label={label} />
                                    ))}
                                </div>
                            </div>

                            {/* UI Design */}
                            <div className="category">
                                <h4>UI Design</h4>
                                <div className="flex-chips">
                                    {uiDesign.map((label, index) => (
                                        <Chip key={index} className='chip' label={label} />
                                    ))}
                                </div>
                            </div>

                            {/* Other Tools */}
                            <div className="category">
                                <h4>Other Tools</h4>
                                <div className="flex-chips">
                                    {otherTools.map((label, index) => (
                                        <Chip key={index} className='chip' label={label} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProgrammingSkills;
