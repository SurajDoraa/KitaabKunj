'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav 
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center relative`}>
      <h2 className="absolute left-1/2 transform -translate-x-1/2 font-extrabold text-[24px] leading-[30px] text-white">
        KITAABKUNJ
      </h2>
      <div className="ml-auto flex space-x-4">
        <Link href="/signin" className="text-white hover:underline">Sign In</Link>
        <Link href="/signup" className="text-white hover:underline">Sign Up</Link>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
