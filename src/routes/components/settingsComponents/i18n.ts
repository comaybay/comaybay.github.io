import createI18nStore, { type Translation } from "src/utils/createI18nStore";

export default createI18nStore<HeaderComponentsTranslation>({
  'vi': {
    selectLanguage: "Ngôn ngữ:",
  },
  'en': {
    selectLanguage: "Language:",
  },
});

interface HeaderComponentsTranslation extends Translation {
  selectLanguage: string;
}