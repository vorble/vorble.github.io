// A LangMap is an object which holds data in several languages.
// Use LangMap class for user-facing text.
// Use langmap() function as a shorthand for new LangMap().
// Example LangMap with German and Chinese strings:
//   lm = langmap({ dede: 'Hallo.', zhcn: '你好.' })
// Get the text for a particular language with .get()
//   lm.get('dede') -> 'Hallo.'
//   lm.get('enus') -> 'Hallo.' // Fallback to first language given during creation.
//   lm.get('zhcn') -> '你好.'
const LANGS = ['dede', 'enus', 'zhcn'];
export class LangMap {
    constructor(langs) {
        let def;
        // JavaScript promises to keep object key order stable, right? ...right?
        // Relied upon to have first specified language in the constructor be the
        // default.
        for (const langID of Object.keys(langs)) {
            if (langID === 'dede' || langID === 'enus' || langID === 'zhcn') {
                this[langID] = langs[langID];
                if (!def) {
                    def = langs[langID];
                }
            }
        }
        if (typeof def === 'undefined') {
            throw new Error('No languages given!');
        }
        this.def = def;
    }
    get(langID) {
        const lookedUp = this[langID];
        return typeof lookedUp === 'undefined' ? this.def : lookedUp;
    }
    getDefault() {
        return this.def;
    }
}
export function langmap(langs) {
    return new LangMap(langs);
}
export function langmapFull(langs) {
    return new LangMap(langs);
}
function lookupLangID(lang) {
    if (!Array.isArray(lang)) {
        lang = [lang];
    }
    for (const l of lang) {
        switch (l) {
            case 'en-US': return 'enus';
            case 'de-DE': return 'dede';
            case 'zh-CN': return 'zhcn';
        }
    }
    console.error(`Couldn\'t map language ${lang}! Spinning the wheel...`);
    return LANGS[Math.floor(Math.random() * LANGS.length)];
}
export let langID = lookupLangID(window.navigator.languages);
