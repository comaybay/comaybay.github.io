import createI18nStore, { type Translation } from "src/utils/createI18nStore";

export default createI18nStore<IndexPage>({
  'vi': {
    introduction: "Xin chào! Mình là Cmb, mình thích sáng tạo và tiêu thụ vật chất và ý thức",
  },
  'en': {
    introduction: "Hello! I'm Cmb, I like to create and consume stuff"
  }
});

interface IndexPage extends Translation {
  introduction: string;
}