import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from 'src/i18n/ko.json';
import Quasar from 'quasar';

Vue.use(VueI18n);

let defaultLang = 'ko';
const allowedLangList = ['ko', 'en'];

try {
    const browserLocale = Quasar.lang.getLocale(); // SSR에서는 undefined 가 리턴됨
    const browserLang = browserLocale.split('-')[0];
    if (allowedLangList.indexOf(browserLang) !== -1) defaultLang = browserLang;
    // console.log('browserLang, parsedLang', browserLang, parsedLang);
} catch (err) {
    // console.log(err);
}

let lang = defaultLang;
const i18n = new VueI18n({
    locale: 'ko',
    fallbackLocale: 'ko',
    messages: {
        // [lang]: langPack.default,
        ko: messages
    },
    silentTranslationWarn: true
});

const changeLangPack = async function(newLang) {
    const langPack = await import(/* webpackChunkName: "lang-[request]" */ `src/i18n/${newLang}.json`);
    i18n.setLocaleMessage(newLang, langPack.default);
    i18n.locale = newLang;

    // Quasar lang pack
    let filename = 'en-us';
    if (newLang === 'ko') filename = 'ko-kr';
    import(/* webpackInclude: /(ko-kr|en-us)\.js$/ */`quasar/lang/${filename}`).then(lang => {
        Quasar.lang.set(lang.default);
    });
    lang = newLang;
};

export default async({ app, ssrContext, urlPath, redirect }) => {
    lang = defaultLang;
    const parsedLang = urlPath.replace(/^\/([^/]+).*/i, '$1');
    if (allowedLangList.indexOf(parsedLang) !== -1) lang = parsedLang;

    // Set i18n instance on app
    app.i18n = i18n;

    changeLangPack(lang);
};

export { i18n, lang, allowedLangList, changeLangPack };
