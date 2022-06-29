import { browser } from "$app/env";
import { writable, type Writable } from "svelte/store"

const languages = ['vi', 'en'] as const;

function createLanguageStore(): Writable<Language> {
  let language: Language = 'en';

  if (browser) {
    const currentLanguage = localStorage.getItem('language') as Language;
    const perferedLanguage = navigator.language as Language;

    if (currentLanguage) {
      language = currentLanguage;
    }
    else if (languages.includes(perferedLanguage)) {
      language = perferedLanguage;
    }
  }

  const { set, update, subscribe } = writable<Language>(language);

  return {
    subscribe,
    update,
    set: (language: Language) => { localStorage.setItem('language', language); set(language) }
  }
}

export default createLanguageStore();

export type Language = typeof languages[number];