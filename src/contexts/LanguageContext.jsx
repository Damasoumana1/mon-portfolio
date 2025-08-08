import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Récupérer la langue sauvegardée ou utiliser l'anglais par défaut
        return localStorage.getItem('portfolio-language') || 'en';
    });

    useEffect(() => {
        // Sauvegarder la langue dans localStorage
        localStorage.setItem('portfolio-language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
    };

    const value = {
        language,
        setLanguage,
        toggleLanguage,
        isEnglish: language === 'en',
        isFrench: language === 'fr'
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};