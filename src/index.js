import React from 'react'

import App from './App'
import './index.css'

import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next';

import global_es from './i18n/es/global.json'
import global_en from './i18n/en/global.json'

i18next.init({
    interpolation: {
        escapeValue: false,
    },
    lng: 'es',
    resources: {
        es: {
            translation: global_es,
        },
        en: {
            translation: global_en,
        },
    },
})
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

root.render(<React.StrictMode>
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
</React.StrictMode>);