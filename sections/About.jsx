'use client';
import { motion     } from "framer-motion";
import { TypingText } from "../components";
import { fadeIn, staggerContainer } from '../utils/motion';
import   styles       from '../styles';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText  
        title="| About Metaversus"
        textStyles="text-center"
      />
      <motion.p
        variants={fadeIn('up','tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">My Future</span> is a sample website that I will be doing 
        just for a fun and <span className="font-extrabold text-white">non-romantic</span> way of expressing 
        the <span className="font-extrabold text-white">knowledge</span> that I've acquired 
        while all the <span className="font-extrabold text-white">learning processes</span> that I've gone
        through and not necessarily an og project but a follow-through of a professional programmer I met via online resource and so.
      </motion.p>
      <motion.img 
        variants={fadeIn('up','tween',0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
