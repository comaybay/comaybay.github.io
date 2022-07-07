import createI18nStore, { type Translation } from "src/utils/createI18nStore";

export default createI18nStore<HeaderComponentsTranslation>({
  'vi': {
    selectLanguage: "Ngôn ngữ:",
    selectMode: "Chế dộ:",
    selectModeOptions: {
      light: "Sáng",
      dark: "Tối",
      system: "Hệ thống"
    }
  },
  'en': {
    selectLanguage: "Language:",
    selectMode: "Mode:",
    selectModeOptions: {
      light: "Light",
      dark: "Dark",
      system: "System"
    }
  },
});

interface HeaderComponentsTranslation extends Translation {
  selectLanguage: string;
  selectMode: string;
  selectModeOptions: {
    light: string;
    dark: string;
    system: string;
  }
}