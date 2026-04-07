import { motion } from 'framer-motion';
import Card from './UI/Card.jsx';
import ProgressBar from './UI/ProgressBar.jsx';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations/translations';
import { useState } from 'react';
import { Monitor, Brain, Database, Cloud, Shield, UserCheck, Sparkles } from 'lucide-react';

const Skills = () => {
    const { language } = useLanguage();

    // Expertises Coeurs (Barres de progression)
    const webMobileExpertise = [
        { name: 'JavaScript / TypeScript', level: 90 },
        { name: 'React.js / Next.js', level: 90 },
        { name: 'Flutter / Dart', level: 85 },
        { name: 'Tailwind CSS / UI Design', level: 90 },
    ];

    const backendExpertise = [
        { name: getTranslation(language, 'skills.items.apiArchitect'), level: 90 },
        { name: getTranslation(language, 'skills.items.pythonBackend'), level: 85 },
        { name: getTranslation(language, 'skills.items.fintechIntegration'), level: 90 },
        { name: getTranslation(language, 'skills.items.nodeIntegration'), level: 85 },
        { name: getTranslation(language, 'skills.items.sqlDatabases'), level: 85 },
        { name: getTranslation(language, 'skills.items.nosqlDatabases'), level: 80 },
    ];

    const aiDataExpertise = [
        { name: getTranslation(language, 'skills.items.aiDev'), level: 85 },
        { name: getTranslation(language, 'skills.items.tf_pytorch'), level: 80 },
        { name: getTranslation(language, 'skills.items.rag'), level: 85 },
        { name: getTranslation(language, 'skills.items.agentic_ai'), level: 80 },
        { name: getTranslation(language, 'skills.items.cv_opencv'), level: 75 },
        { name: getTranslation(language, 'skills.items.mldl'), level: 85 },
        { name: getTranslation(language, 'skills.items.dataAnalysis'), level: 90 },
        { name: getTranslation(language, 'skills.items.dataAnnotation'), level: 80 },
        { name: getTranslation(language, 'skills.items.r_language'), level: 75 },
    ];

    const iotExpertise = [
        { name: getTranslation(language, 'skills.items.c_language'), level: 80 },
        { name: getTranslation(language, 'skills.items.arduino'), level: 85 },
    ];

    // Compétences Secondaires & Outils (Badges)
    const webFrameworks = [
        'Vue.js', 'Angular', 'React Native', 'PHP', 'Laravel', 'WordPress', 'Bootstrap', 'HTML5/CSS3'
    ];

    const aiTools = [
        'NLP', 'LLM Reasoning', 'LSTM', 'Transformers', 'Qdrant', 'YOLOv10-X', 'Image Segmentation', 
        'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy', 'Scikit-learn', 'Tableau', 'R', 'Streamlit'
    ];

    const backendAPIs = [
        'Flask', 'Socket.io', 'Webhooks', 'RESTful API', 'Swagger'
    ];

    const databases = [
        'SQLite', 'Supabase', 'Vector DB', 'Firebase'
    ];

    const devOpsCloud = [
        'Docker', 'Hugging Face', 'Gradio', 'Vercel', 'Netlify', 'LWS', 'Hetzner', 'VPS Hosting'
    ];

    const designTools = [
        'Figma', 'Canva', 'Jira', 'UML', 'GitHub / GitLab', 'Roboflow', 'Weights & Biases', getTranslation(language, 'skills.items.labelStudio'), 'Wokwi', 'Blynk', 'Tinkercad'
    ];

    const otherSkills = [
        'Cybersécurité', 'LaTeX', 'Microsoft Office', 'VBA', 'Digital Marketing'
    ];

    const personalSkills = getTranslation(language, 'skills.personalSkillsList');
    const interests = getTranslation(language, 'skills.interestsList');

    return (
        <section id="skills" className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center mb-16 text-blue-400"
                >
                    {getTranslation(language, 'skills.title')}
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Colonne GAUCHE : Expertises Principales */}
                    <div className="space-y-12">
                        <Card>
                            <h3 className="text-2xl font-semibold mb-8 text-blue-500 flex items-center">
                                <Monitor className="mr-3 text-blue-500" size={28} />
                                {getTranslation(language, 'skills.webMobile')}
                            </h3>
                            <div className="space-y-6">
                                {webMobileExpertise.map((skill) => (
                                    <ProgressBar key={skill.name} label={skill.name} value={skill.level} />
                                ))}
                            </div>
                            <div className="mt-8 flex flex-wrap gap-2">
                                {webFrameworks.map(skill => <SkillBadge key={skill} name={skill} />)}
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-2xl font-semibold mb-8 text-blue-500 flex items-center">
                                <Brain className="mr-3 text-blue-500" size={28} />
                                {getTranslation(language, 'skills.aiDataScience')}
                            </h3>
                            <div className="space-y-6">
                                {aiDataExpertise.map((skill) => (
                                    <ProgressBar key={skill.name} label={skill.name} value={skill.level} />
                                ))}
                            </div>
                            <div className="mt-8 flex flex-wrap gap-2">
                                {aiTools.map(skill => <SkillBadge key={skill} name={skill} color="blue" />)}
                            </div>
                        </Card>
                    </div>

                    {/* Colonne DROITE : Services, DevOps & Outils */}
                    <div className="space-y-12">
                        <Card>
                            <h3 className="text-2xl font-semibold mb-8 text-blue-500 flex items-center">
                                <Database className="mr-3 text-blue-500" size={28} />
                                {getTranslation(language, 'skills.apiDatabase')}
                            </h3>
                            <div className="space-y-6">
                                {backendExpertise.map((skill) => (
                                    <ProgressBar key={skill.name} label={skill.name} value={skill.level} />
                                ))}
                            </div>
                            <div className="mt-8 border-t border-gray-700/50 pt-6">
                                <h4 className="text-sm font-uppercase tracking-wider text-gray-400 mb-4 uppercase">Technos & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[...backendAPIs, ...databases].map(skill => <SkillBadge key={skill} name={skill} color="indigo" />)}
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-2xl font-semibold mb-8 text-blue-500 flex items-center">
                                <Cloud className="mr-3 text-blue-500" size={28} />
                                {getTranslation(language, 'skills.deployment')}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {devOpsCloud.map(skill => <SkillBadge key={skill} name={skill} color="purple" />)}
                            </div>
                            <div className="mt-8 border-t border-gray-700/50 pt-6">
                                <h4 className="text-sm font-uppercase tracking-wider text-gray-400 mb-4 uppercase">{getTranslation(language, 'skills.tools')}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {designTools.map(skill => <SkillBadge key={skill} name={skill} color="gray" />)}
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-2xl font-semibold mb-8 text-blue-500 flex items-center">
                                <Shield className="mr-3 text-blue-500" size={28} />
                                {getTranslation(language, 'skills.cybersecurity')} & {getTranslation(language, 'skills.iot')}
                            </h3>
                            <div className="space-y-6 mb-8">
                                {iotExpertise.map((skill) => (
                                    <ProgressBar key={skill.name} label={skill.name} value={skill.level} />
                                ))}
                            </div>
                            <div className="border-t border-gray-700/50 pt-6">
                                <h4 className="text-sm font-uppercase tracking-wider text-gray-400 mb-4 uppercase">Other Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {otherSkills.map(skill => <SkillBadge key={skill} name={skill} color="slate" />)}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Soft Skills & Interests */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <Card>
                        <h3 className="text-2xl font-semibold mb-8 text-blue-500 flex items-center">
                            <UserCheck className="mr-3 text-blue-500" size={28} />
                            {getTranslation(language, 'skills.personalSkills')}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {personalSkills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </Card>

                    <Card>
                        <h3 className="text-2xl font-semibold mb-8 text-blue-500 flex items-center">
                            <Sparkles className="mr-3 text-blue-500" size={28} />
                            {getTranslation(language, 'skills.interests')}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {interests.map((interest, index) => (
                                <motion.span
                                    key={interest}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium"
                                >
                                    {interest}
                                </motion.span>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

const SkillBadge = ({ name, color = "blue" }) => {
    const colors = {
        blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
        gray: "bg-gray-500/10 text-gray-400 border-gray-500/20",
        slate: "bg-slate-500/10 text-slate-300 border-slate-500/20",
    };

    return (
        <span className={`px-3 py-1 text-xs font-medium border rounded-md transition-all hover:scale-105 hover:bg-opacity-20 ${colors[color] || colors.blue}`}>
            {name}
        </span>
    );
};

export default Skills;