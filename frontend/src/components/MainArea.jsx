import React, { useState } from "react";
import { motion } from "framer-motion";
import sendPostData from "../ConfigAPI.js";

function MainArea() {
    const [generatedEmail, setGeneratedEmail] = useState("")

    const handleSendData = async () => {
        try {
            const rawEmail = document.getElementById('input').value;
            const tone = document.getElementById('tone').value;
            console.log("Sending POST data:", { rawEmail, tone });

            // Sending POST data to the server
            const response = await sendPostData({ rawEmail, tone });
            console.log("Response from server:", response);

            if (response) {
                setGeneratedEmail(response);
            } else {
                console.error("No generated email returned from server.");
            }


            document.getElementById('input').value = "";
            document.getElementById('tone').value = "";
        } catch (error) {
            console.error("Error sending POST data:", error);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center w-full mt-18">
            <div className="w-full max-w-[600px] px-4 mb-10">
                <div className="relative w-full mb-4 group">
                    <div className="absolute -inset-0.5 rounded-xl animate-glow z-0 transition-all duration-500"></div>
                    <textarea
                        name="input"
                        id="input"
                        placeholder="Enter your text here..."
                        className="relative z-10 w-full min-h-40 rounded-xl text-white border border-[#40474f] bg-[#1e2124] placeholder:text-[#a2abb3] p-5 text-base font-normal leading-normal focus:outline-none"
                    ></textarea>
                </div>

                <div className="relative w-full mt-7 group">
                    <div className="absolute -inset-0.5 rounded-xl animate-glow-tone z-0 transition-all duration-500"></div>
                    <input
                        type="text"
                        name="tone"
                        id="tone"
                        placeholder="Tone (optional)"
                        className="relative z-10 w-full rounded-xl text-white border border-[#40474f] bg-[#1e2124] placeholder:text-[#a2abb3] p-5 text-base font-normal leading-normal focus:outline-none"
                    />
                </div>
            </div>

            <div className="mt-8 mb-12 flex gap-4">
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(34, 211, 238, 0.5)",
                        transition: { duration: 0.3 },
                    }}
                    whileTap={{
                        scale: 0.95,
                        boxShadow: "0 0 5px rgba(34, 211, 238, 0.5)",
                        transition: { duration: 0.1 },
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                    }}
                    className="relative overflow-hidden group text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-3 rounded-xl transition-all duration-300 cursor-pointer shadow-lg"
                    onClick={handleSendData}
                >
                    <span className="relative z-10 font-medium tracking-wide">
                        Generate
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                </motion.button>

                <motion.button
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(156, 163, 175, 0.3)",
                        transition: { duration: 0.3 },
                    }}
                    whileTap={{
                        scale: 0.95,
                        boxShadow: "0 0 5px rgba(156, 163, 175, 0.3)",
                        transition: { duration: 0.1 },
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                    }}
                    className="relative overflow-hidden group text-white bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 px-8 py-3 rounded-xl transition-all duration-300 cursor-pointer shadow-lg"
                >
                    <span className="relative z-10 font-medium tracking-wide">Clear</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </motion.button>
            </div>

            <div className="flex flex-col justify-center items-center w-full max-w-3xl mx-auto mb-10">  {/* Added margin-bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl border border-white/10 p-6 shadow-xl"
                >
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                            Generated Email
                        </h2>
                        <p className="text-white/70 text-sm font-medium leading-normal max-w-md">
                            Your AI-generated email will appear here...
                        </p>

                        <div className="relative mt-6 w-full max-h-[300px] overflow-y-auto rounded-lg bg-white/5 border border-white/20 p-4 pr-12">
                            {generatedEmail ? (
                                <>
                                    <motion.pre
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-white/90 text-base whitespace-pre-wrap"
                                    >
                                        {generatedEmail}
                                    </motion.pre>

                                    <button
                                        onClick={() => navigator.clipboard.writeText(generatedEmail)}
                                        className="absolute top-3 right-3 p-2 bg-cyan-600 rounded-full hover:bg-cyan-700 transition-all cursor-pointer"
                                        title="Copy to clipboard"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            className="w-5 h-5 text-white"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8m-7 8h6m2-20a2 2 0 012 2v16a2 2 0 01-2 2H8l-4-4V4a2 2 0 012-2h12z" />
                                        </svg>
                                    </button>
                                </>
                            ) : (
                                <p className="text-white/40 text-sm text-center">
                                    Response will be shown once you have generated.
                                </p>
                            )}
                        </div>


                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default MainArea;