'use client'

import React from "react";
import { motion } from "framer-motion";
import data from "../../../data/data";

function ComingSoonContent() {
  const { description, title, services } = data;
  
  return (
    <>
      <div className="relative flex flex-col place-items-center">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center font-heading m-10 text-7xl sm:text-8xl lg:text-9xl leading-[6rem] sm:leading-[8rem] lg:leading-[8rem] font-black"
        >
          <span className="text-pink-600 dark:text-pink-400">
            {title}
          </span>
          <span className="">🐾</span>
        </motion.h2>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl px-6 max-w-5xl text-center m-5 text-gray-600 dark:text-gray-400 font-light leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />

        {/* Services Icons */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8 max-w-4xl mx-auto"
        >
          {services?.map((service, index) => (
            <motion.div 
              key={service.name}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center p-6 bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-700 rounded-xl hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors"
            >
              <span className="text-4xl mb-3">{service.icon}</span>
              <span className="text-sm font-medium text-pink-700 dark:text-pink-300">{service.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* About Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600 dark:text-pink-400">
            {data.aboutSection?.title}
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            {data.aboutSection?.content}
          </p>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600 dark:text-pink-400">
            {data.whySection?.title}
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {data.whySection?.content}
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default ComingSoonContent;
