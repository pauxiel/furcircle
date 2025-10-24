'use client'

import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Bell, Check } from 'lucide-react';
import data from "../../../data/data";

function SubscribeForm() {
    const {
        newsletterheading,        
        hideSubscribeForm,
      } = data;

    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // TODO: Integrate with actual email service
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    };

  return (
    <>
    { hideSubscribeForm === false ? (
          <motion.section 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center lg:m-7 mt-10 w-full max-w-md p-3"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-slate-800 dark:text-slate-100 font-medium text-lg leading-6 mb-4"
                >
                  {newsletterheading}
                </label>
                <div className="mt-2 flex-col flex sm:flex-row gap-3">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    required
                    className="flex-1 px-4 py-3 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none placeholder:text-gray-500"
                  />
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-violet-600 transition-all flex items-center justify-center gap-2 min-w-[140px]"
                  >
                    {isSubmitted ? (
                      <>
                        <Check className="h-5 w-5" />
                        Joined!
                      </>
                    ) : (
                      <>
                        <Bell className="h-5 w-5" />
                        Join Waitlist
                      </>
                    )}
                  </motion.button>
                </div>
                
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-green-600 font-medium"
                  >
                    Thank you! You&apos;ll be the first to know when we launch.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.section>
        ) : (
          ""
        )}
    </>
  )
}

export default SubscribeForm