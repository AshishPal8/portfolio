import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[200px] md:w-[240px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 md:min-h-[280px] xs:min-h-[240px] flex justify-evenly items-center flex-col"
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

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]"
      >
        Hello! 👋 I'm <span className="text-[#915eff] font-bold">Ashish</span>,
        an aspiring frontend developer based in{" "}
        <span className="text-[#915eff] font-bold">Ghaziabad, UP, India</span>.
        Proficient in HTML, CSS, and JavaScript, I specialize in React and
        enhance user interfaces with Tailwind CSS for styling and Framer Motion
        for dynamic animations. My skills also extend into the realm of 3D
        graphics using Three.js. I bring a keen eye for design, a passion for
        creating seamless user experiences, and a commitment to staying current
        with industry trends. As a recent graduate, I'm excited about
        contributing my skills to innovative projects and collaborating with
        fellow developers. Beyond coding, I enjoy exploring frontend trends,
        experimenting with design concepts, and delving into the world of 3D
        graphics. Let's build something amazing together! 🚀
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
