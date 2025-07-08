import React from "react";
import { motion } from "framer-motion";

function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full bg-gradient-to-br from-white/5 to-white/[0.03] backdrop-blur-lg border-t border-white/10 mt-20 py-8"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo/branding */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 mb-4 md:mb-0"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Smart Email AI
                        </span>
                    </motion.div>

                    {/* Navigation links */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {['Features', 'Pricing', 'Docs', 'Contact'].map((item) => (
                            <motion.a
                                key={item}
                                whileHover={{
                                    scale: 1.05,
                                    color: '#22d3ee'
                                }}
                                className="text-white/80 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    {/* Social links */}
                    <div className="flex space-x-4 mt-6 md:mt-0">
                        {[
                            { icon: 'github', path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
                            { icon: 'twitter', path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                            { icon: 'discord', path: 'M20.5 14.6c0 4.6-4.5 8.3-10 8.3s-10-3.7-10-8.3S5.5 6.3 10 6.3s10 3.7 10 8.3zM7 15.9c-.6.3-1.2.5-1.9.6-.1 0-.2-.1-.2-.2v-.5c0-.8.5-1.4 1.1-1.7.6-.3 1.2-.5 1.9-.6.1 0 .2.1.2.2v.5c0 .8-.5 1.4-1.1 1.7zm6.9 0c-.6.3-1.2.5-1.9.6-.1 0-.2-.1-.2-.2v-.5c0-.8.5-1.4 1.1-1.7.6-.3 1.2-.5 1.9-.6.1 0 .2.1.2.2v.5c0 .8-.5 1.4-1.1 1.7z' }
                        ].map((social) => (
                            <motion.a
                                key={social.icon}
                                whileHover={{
                                    scale: 1.2,
                                    backgroundColor: 'rgba(34, 211, 238, 0.1)'
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-all"
                            >
                                <svg className="w-5 h-5 text-white/80 hover:text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d={social.path} clipRule="evenodd" />
                                </svg>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-xs text-white/50">
                        © {new Date().getFullYear()} Smart Email AI. All rights reserved.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;