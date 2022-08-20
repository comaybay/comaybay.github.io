import createI18nStore, { type Translation } from 'src/utils/createI18nStore';

export default createI18nStore<IndexPage>({
	vi: {
		greetings: 'Xin chào!!',
		introduction: 'Mình là Cmb, mình thích sáng tạo và tiêu thụ nghệ thuật',
		whatICreate:
			'Về những thứ mình tạo ra, vào thời gian rảnh ngoài việc lướt web tối ngày mình đôi khi sẽ vẽ, làm nhạc hoặc lập trình',
		dontExpectQuality:
			'Chất lượng của thứ mình tạo ra có thể sẽ không được hoàn hảo cho lắm do mình là một người đi ngược lại với câu "1 nghề cho chín còn hơn 9 nghề" nhưng hi vọng bạn vẫn tìm được thứ gì đó thú vị từ các sản phẩm của mình!',
		ideaToReality: 'Khi có ý tưởng nào đó khiến nổi hứng lên, ăn ngủ không yên thì mình sẽ cố biến nó thành sự thật!!',
		checkOutMyStuff: 'Bạn có thể liên hệ mình hoặc xem những thứ mình làm tại:'
	},
	en: {
		greetings: 'Hi there!!',
		introduction: "I'm Cmb, I like to create and consume stuff",
		whatICreate:
			'As for what I created, in my free time apart from consuming stuff all day and night I would sometimes draw, make music or do programming',
		dontExpectQuality: `Quality of my works might not be perfect because I'm more of a "jack of all trades master of none" type of guy but I hope you can still find something enjoyable about my works!`,
		ideaToReality:
			'When a new and interesting idea strikes and starts living rent-free in my head, I will try to make it a reality!!',
		checkOutMyStuff: 'You can contact me or check out my stuff at:'
	}
});

interface IndexPage extends Translation {
	greetings: string;
	introduction: string;
	whatICreate: string;
	dontExpectQuality: string;
	ideaToReality: string;
	checkOutMyStuff: string;
}
