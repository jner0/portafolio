import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mis proyectos</p>
        <h2 className={styles.sectionHeadText}>Proyectos..</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Escribir, que a continuacion se mostraran los proyectos que demuestran mis habilidades o conocimientos. blablabal cada proyecto esta con su descripcion blablabal y con sus links a repositorio .
          Esto demuestra mis blbalbalba con diferentes tecnologias y blablabal
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")