import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainArea from "./components/MainArea";
import Loader from "./components/Loader";
import { motion } from "framer-motion";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timerId);
    }, []);

    return (
        <div className="bg-[#121416] min-h-screen flex flex-col relative overflow-hidden">
            {/* Full-page animated gradient background */}
            <div className="fixed inset-0 bg-gradient-to-br from-[#121416] via-[#1e2124] to-[#2c3034] opacity-100 z-0"></div>
            
            {/* Animated glow elements */}
            <div className="fixed top-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full filter blur-[80px] animate-pulse-slow z-0"></div>
            <div className="fixed bottom-1/3 -right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px] animate-pulse-slow z-0 animation-delay-2000"></div>
            
            {/* Loader with smooth transition - now properly centered */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: loading ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed inset-0 z-50 flex items-center justify-center ${loading ? 'pointer-events-auto' : 'pointer-events-none'}`}
                style={{ backdropFilter: 'blur(4px)' }} // Optional blur effect
            >
                <Loader />
            </motion.div>

            {/* Main content with fade-in animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col flex-1 z-10"
            >
                <Header />
                <MainArea />
                <Footer />
            </motion.div>
        </div>
    );
}

export default App;