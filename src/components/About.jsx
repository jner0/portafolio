import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { lan } from "../constants/language";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 - index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = ({ language }) => {
  console.log("laan", language);
  return (
    <>
      <motion.div variants={textVariant()}>
        {language === lan.ES ? (
          <>
            <p className={styles.sectionSubText}>Introducción</p>
            <h2 className={styles.sectionHeadText}>Descripción General.</h2>
          </>
        ) : (
          <>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>General description.</h2>
          </>
        )}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {language === lan.ES ? (
          <>
            Soy desarrollador de software con experiencia en desarrollo
            front-end usando JavaScript y frameworks como React y Angular.
            Actualmente estoy estudiando más sobre el desarrollo de back-end
            para convertirme en un desarrollador Full-stack, me estoy enfocando
            principalmente en Node.js. Comencé mi carrera en la Industria de la
            tecnología en el campo del Soporte Técnico, lo que me permite
            trabajar con tiempos de entrega y esto me ayudó mejorar mis
            habilidades de comunicación y la forma de trabajar en equipo. Mi
            tiempo trabajando con plataformas de gestión de datos fue lo que me
            motivó a ingresar en el mundo del desarrollo de software.
          </>
        ) : (
          <>
            I am a software developer with experience in front-end development.
            using JavaScript and frameworks such as React and Angular. Currently
            I am studying more about back-end development to become a Full-stack
            developer, I'm mainly focusing on Node.js. I began my career in the
            technology industry in the field of Technical Support, which allows
            me to work with delivery times and This helped me improve my
            communication skills and the way I teamwork. My time working with
            management platforms Data was what motivated me to enter the world
            of software development. software.
          </>
        )}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
