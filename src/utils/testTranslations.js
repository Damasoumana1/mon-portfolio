import { translations, getTranslation } from '../translations/translations';

// Test function to verify all translations are working
export const testTranslations = () => {
    const testKeys = [
        'nav.about',
        'nav.formation',
        'nav.skills',
        'nav.projects',
        'nav.certificates',
        'nav.contact',
        'hero.greeting',
        'hero.name',
        'hero.title',
        'hero.description',
        'hero.contactMe',
        'hero.downloadCV',
        'hero.welcomeMessage',
        'about.title',
        'formation.title',
        'skills.title',
        'projects.title',
        'projects.viewProject',
        'projects.viewVideo',
        'projects.mainProject',
        'projects.company',
        'projects.location',
        'certificates.title',
        'contact.title',
        'footer.rights'
    ];

    console.log('🧪 Testing translations...');

    const languages = ['fr', 'en'];
    let allTestsPassed = true;

    languages.forEach(lang => {
        console.log(`\n📝 Testing ${lang.toUpperCase()} translations:`);

        testKeys.forEach(key => {
            const translation = getTranslation(lang, key);

            if (translation === key) {
                console.error(`❌ Missing translation for "${key}" in ${lang}`);
                allTestsPassed = false;
            } else {
                console.log(`✅ ${key}: "${translation}"`);
            }
        });
    });

    if (allTestsPassed) {
        console.log('\n🎉 All translations are working correctly!');
    } else {
        console.log('\n⚠️ Some translations are missing. Please check the translations file.');
    }

    return allTestsPassed;
};

// Test if all required translation keys exist
export const validateTranslationStructure = () => {
    const requiredSections = ['nav', 'hero', 'about', 'formation', 'skills', 'projects', 'certificates', 'contact', 'footer'];
    const languages = ['fr', 'en'];

    console.log('🔍 Validating translation structure...');

    let isValid = true;

    languages.forEach(lang => {
        if (!translations[lang]) {
            console.error(`❌ Missing language: ${lang}`);
            isValid = false;
            return;
        }

        requiredSections.forEach(section => {
            if (!translations[lang][section]) {
                console.error(`❌ Missing section "${section}" in ${lang}`);
                isValid = false;
            } else {
                console.log(`✅ Section "${section}" exists in ${lang}`);
            }
        });
    });

    if (isValid) {
        console.log('\n✨ Translation structure is valid!');
    }

    return isValid;
};