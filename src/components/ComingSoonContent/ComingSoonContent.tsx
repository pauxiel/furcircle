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
          className="text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {title}
          </span>
          <span className="">🐾</span>
        </motion.h2>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl md:text-3xl px-6 max-w-5xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin"
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
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-4xl mb-3">{service.icon}</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{service.name}</span>
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
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100">
            {data.aboutSection?.title}
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            {data.aboutSection?.content}
          </p>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100">
            {data.whySection?.title}
          </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            {data.whySection?.content}
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default ComingSoonContent;
