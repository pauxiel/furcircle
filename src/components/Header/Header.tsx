'use client'

import React from "react";
import { motion } from "framer-motion";
import { Heart } from 'lucide-react';
import Image from 'next/image';
import data from "../../../data/data";
import Navigation from "../Navigation/Navigation";

function Header() {
  const { sitename, sitetagline, siteurl, sitelogo } = data;
  return (
    <>
    <section className="container mx-auto p-4 text-center">
      <Navigation />      
    </section>
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="z-10 w-full max-w-5xl items-center justify-between text-sm"
      >
        <div className="bottom-0 left-0 flex h-30 md:h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
            href={siteurl}
            rel="noopener noreferrer"
          >
            <div className="flex flex-col text-center items-center">
              <motion.div 
                className="flex items-center gap-3 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {sitelogo ? (
                  <Image 
                    src={sitelogo} 
                    alt={sitename} 
                    width={48}
                    height={48}
                    className="object-contain rounded-lg"
                  />
                ) : (
                  <Heart className="h-8 w-8 text-pink-500" />
                )}
                <h1 className="text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-bold">
                  {sitename}
                </h1>
              </motion.div>
              <p className="text-xl font-medium m-2 text-slate-800 dark:text-slate-100">
                {sitetagline}
              </p>
            </div>
          </motion.a>
        </div>
      </motion.header>
    </>
  );
}

export default Header;
