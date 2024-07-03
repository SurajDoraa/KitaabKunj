'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Kitaabkunj" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Kitaabkunj</span> is your gateway to a revolutionary future, 
        where you can explore any book you've ever dreamt of, without the need to{' '}
        <span className="font-extrabold text-white">
          buy
        </span>{' '}
        the book.{' '}
        <span className="font-extrabold text-white"> Have a collection of unused books?</span> Kitaabkunj turns them
         into treasures for others to{' '}
        <span className="font-extrabold text-white">rent</span>. Dive into this{' '}
        <span className="font-extrabold text-white">biblioverse</span> and unlock 
        endless literary adventures as you scroll down.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;