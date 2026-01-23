// Google Analytics Event Tracking Utility
// Usage: import { trackEvent } from './utils/analytics';

export const trackEvent = (eventName, eventParams = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
};

// Predefined tracking functions for common events

export const trackCVDownload = () => {
    trackEvent('download_cv', {
        event_category: 'engagement',
        event_label: 'CV Download',
        value: 1
    });
};

export const trackProjectView = (projectTitle) => {
    trackEvent('view_project', {
        event_category: 'engagement',
        event_label: projectTitle,
        value: 1
    });
};

export const trackProjectVideoView = (projectTitle) => {
    trackEvent('view_project_video', {
        event_category: 'engagement',
        event_label: `${projectTitle} - Video`,
        value: 1
    });
};

export const trackContactFormSubmit = (success = true) => {
    trackEvent('contact_form_submit', {
        event_category: 'conversion',
        event_label: success ? 'Success' : 'Failed',
        value: success ? 1 : 0
    });
};

export const trackLanguageChange = (newLanguage) => {
    trackEvent('language_change', {
        event_category: 'engagement',
        event_label: newLanguage.toUpperCase(),
        value: 1
    });
};

export const trackThemeChange = (newTheme) => {
    trackEvent('theme_change', {
        event_category: 'engagement',
        event_label: newTheme === 'dark' ? 'Dark Mode' : 'Light Mode',
        value: 1
    });
};

export const trackCertificateView = (certificateTitle) => {
    trackEvent('view_certificate', {
        event_category: 'engagement',
        event_label: certificateTitle,
        value: 1
    });
};

export const trackSectionView = (sectionName) => {
    trackEvent('section_view', {
        event_category: 'navigation',
        event_label: sectionName,
        value: 1
    });
};

export const trackSocialLinkClick = (platform) => {
    trackEvent('social_link_click', {
        event_category: 'engagement',
        event_label: platform,
        value: 1
    });
};
