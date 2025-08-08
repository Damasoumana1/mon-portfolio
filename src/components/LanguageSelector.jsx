import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors border border-blue-500/20"
        >
            <div className="flex items-center space-x-1">
                <span className="text-sm font-medium text-blue-400">
                    {language === 'fr' ? '🇫🇷' : '🇺🇸'}
                </span>
                <span className="text-sm font-medium text-blue-400">
                    {language === 'fr' ? 'FR' : 'EN'}
                </span>
            </div>
            <motion.div
                animate={{ rotate: language === 'fr' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
                className="text-blue-400"
            >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>
        </motion.button>
    );
};

export default LanguageSelector;