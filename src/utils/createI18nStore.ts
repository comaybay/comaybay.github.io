import { derived, type Readable } from "svelte/store";
import language, { type Language } from "../stores/language";

/** Create a i18n store, it's value is a translation
 * The translation is chosen by the value of language store
 * @param translations translation in all supported languages
 */
function createI18nStore<T extends Translation>(translations: I18nTranslations<T>): I18n<T> {
  const { subscribe } = derived(language, $language => translations[$language]);
  return {
    subscribe,
    translations
  };
}

export default createI18nStore;

export type Translation = {
  [key: string]: string | Translation;
}

/** translation in all supported languages */
type I18nTranslations<T extends Translation> = {
  [Property in Language]: T;
}

interface I18n<T extends Translation> extends Readable<T> {
  /** translation in all supported languages */
  translations: I18nTranslations<T>;
}