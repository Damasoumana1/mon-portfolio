import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations/translations';
import { testTranslations, validateTranslationStructure } from '../utils/testTranslations';

const TranslationTest = () => {
    const { language, toggleLanguage } = useLanguage();

    const runTests = () => {
        console.clear();
        console.log('🚀 Running translation tests...');

        validateTranslationStructure();
        testTranslations();
    };

    const testKeys = [
        'nav.about',
        'nav.formation',
        'nav.skills',
        'nav.projects',
        'nav.certificates',
        'nav.contact',
        'hero.greeting',
        'hero.title',
        'hero.description',
        'projects.title',
        'certificates.title',
        'contact.title'
    ];

    return (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-sm z-50">
            <h3 className="text-lg font-bold mb-2">🧪 Translation Test</h3>

            <div className="mb-3">
                <p className="text-sm mb-2">Current Language: <strong>{language.toUpperCase()}</strong></p>
                <button
                    onClick={toggleLanguage}
                    className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm"
                >
                    Switch to {language === 'fr' ? 'EN' : 'FR'}
                </button>
            </div>

            <div className="mb-3">
                <button
                    onClick={runTests}
                    className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-sm w-full"
                >
                    Run Console Tests
                </button>
            </div>

            <div className="text-xs">
                <h4 className="font-semibold mb-1">Sample Translations:</h4>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                    {testKeys.slice(0, 6).map(key => (
                        <div key={key} className="flex justify-between">
                            <span className="text-gray-300">{key}:</span>
                            <span className="text-blue-300 ml-2 truncate">
                                {getTranslation(language, key)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-2 text-xs text-gray-400">
                Open DevTools Console for detailed test results
            </div>
        </div>
    );
};

export default TranslationTest;