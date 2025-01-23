import React from "react";
import pro1 from '../assets/images/Chatbot_llm.png';
import pro2 from '../assets/images/mvgr_chatbot.png';
import pro3 from '../assets/images/wastewatch.png';
import pro4 from '../assets/images/E-gram.png';
import pro5 from '../assets/images/slog.png';
import pro6 from '../assets/images/room_automation.png';
import pro7 from '../assets/images/fakelogo.png';
import pro8 from '../assets/images/EMS.png';
import pro9 from '../assets/images/RRS.png';
import pro10 from '../assets/images/iot.png';
import pro11 from '../assets/images/portfolio.png'
import '../assets/styles/Project.scss';
const projects = [
    {
        title: "My Portfolio",
        description: "This is my portfolio made with ReactJS. In this portfolio, I had delpoyed chatbot named Luffy which is made with the help of Botpress an OpenSource platform. I hope this Bot can help u know details on my projects and other information.",
        image: pro11,
        demo:"https://kondu-tanooj.github.io/Tanooj_Portfolio/",
        link: "https://github.com/Kondu-Tanooj/Tanooj_Portfolio",
    },
    {
        title: "ChatBot_LLM",
        description: "This ChatBot is made with langchain and chainlit framework , it is developed on RAG model. This mainly aims to give responce on the requested question by retriveing from the given data either pdf or csv.  ",
        image: pro1,
        demo:"#",
        link: "https://github.com/Kondu-Tanooj/GEN_AI/tree/main/Chatbot_langchain(llm)/",
    },
    {
        title: "MVGR ChatBot",
        description: "This project is made with my team as our Social Relavent Project. For this chatbot we had used an open source platform 'BotPress', which is an easy tool for making chatbot.",
        image: pro2,
        demo:"https://kondu-tanooj.github.io/MVGR_CHATBOT/",
        link: "https://github.com/Kondu-Tanooj/MVGR_CHATBOT",
    },
    {
        title: "SLOG",
        description: "The SLOG (Swecha Log) system is an innovative e-logging solution designed to efficiently monitor the entry (IN) and exit (OUT) flow of students and visitors at the Swecha Learning Center (SLC) of our college. This system streamlines attendance tracking by automating the process of recording student IDs via scanning and storing the data in a centralized database.",
        image: pro5,
        demo:"#",
        link: "https://github.com/Kondu-Tanooj/slog/",
    },
    {
        title: "Room Automation",
        description: "Here we control our SLC room using the we site, an intresting feature here is if there are no members in the room the room will automatically turn off the all the switches. The count of members will be taken from the project SLOG.",
        image: pro6,
        demo:"#",
        link: "https://github.com/Kondu-Tanooj/Room_Automation/",
    },
    {
        title: "Event Management System",
        description: "This was a PHP based project, it is used to make students event management easier. Here participants can register by filling form and get their QR code , for their attendence we scan the QR. For any notification we can send bulk mail them.",
        image: pro8,
        demo:"#",
        link: "https://github.com/Kondu-Tanooj/EMS/",
    },
    {
        title: "Fake Logo Detection",
        description: "In this project, I had trained a machine learning model which is to detect whether the selected logo is fake or Original. It is a quite intresting project , we also used Flask for web pages routing.",
        image: pro7,
        demo:"#",
        link: "https://github.com/Kondu-Tanooj/Fake-Logo-Detection/",
    },
    {
        title: "Railway Reservation System",
        description: "In this Project, We are able to create a program that is used in the Railway Reservation System. This application will produce tickets to the passenger according to the Trains scheduled. While logging from the Employee, we can add new Trains and schedule new Trains. Here we are having the feature of wallet system for payments. ",
        image: pro9,
        demo:"#",
        link: "https://github.com/Kondu-Tanooj/Railway-Reservation-System/",
    },
    {
        title: "IoT Projects",
        description: "In this repository, I had uploaded all my iot projects codes here. I had worked over 50 IoT projects. These projects are of using MQTT,HTTP protocols and GSM module and other modules. Worked with various controllers like ESP32, ESP8266, Arduino Nano, Uno , Mega, Raspberry Pi pico, pi-3,4...etc. ",
        image: pro10,
        demo:"#",
        link: "https://github.com/Kondu-Tanooj/Railway-Reservation-System/",
    },
    {
        title: "E-gram",
        description: "This project is made with basic HTML, CSS, JS and PHP. Here we can share any message to all the users who are registered in this via E-mail.",
        image: pro4,
        demo:"#",
        link: "https://github.com/Kondu-Tanooj/E-gram/",
    },
    {
        title: "Waste Watch",
        description: "This project is made with basic HTML, CSS, JS, Node and MySql. Here any one can share the photo and location of waste contained place. If it is solved, then can update there as solved.",
        image: pro3,
        demo:"#",
        link: "https://github.com/Kondu-Tanooj/WasteWatch/",
    },
];

const ProjectCard = ({ title, description, image, demo, link }) => (
    <div className="project">
        <a href={link} target="_blank" rel="noreferrer">
            <img src={image} className="zoom" alt={title} width="100%" />
        </a>
        <a href={link} target="_blank" rel="noreferrer">
            <h2>{title}</h2></a>
            {demo !== "#" && (
            <a href={demo} target="_blank" rel="noreferrer">
                <h2>Demo</h2>
            </a>
        )}        
        <p>{description}</p>
    </div>
);

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        demo={project.demo}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Project;
