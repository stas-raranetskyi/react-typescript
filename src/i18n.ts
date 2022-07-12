import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.use(resourcesToBackend((language: string, namespace: string, callback: any) => {
		import(`./locales/${language}/${namespace}.json`)
			.then((resources) => {
				callback(null, resources);
			})
			.catch((error) => {
				callback(error, null);
			});
	}))
	.init({
		fallbackLng: 'uk',
		defaultNS: 'translations',
		detection: {
			order: ['querystring', 'cookie', 'localStorage'],
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
