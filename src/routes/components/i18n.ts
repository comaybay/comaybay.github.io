import createI18nStore, { type Translation } from 'src/utils/createI18nStore';

export default createI18nStore<CommonComponentsTranslation>({
	vi: {
		wip: 'Đang xây dựng!'
	},
	en: {
		wip: 'Work in progress!'
	}
});

interface CommonComponentsTranslation extends Translation {
	wip: string;
}
