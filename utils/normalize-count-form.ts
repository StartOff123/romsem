export type DetailsType = 'weight' | 'size' | 'volume' | 'pieces';

const wordsObj: Record<DetailsType | 'productCount', string[]> = {
	size: ['сантиметр', 'сантиметра', 'сантиметров'],
	pieces: ['кусочек', 'кусочка', 'кусочков'],
	volume: ['миллилитр', 'миллилитра', 'миллилитров'],
	weight: ['грамм', 'грамма', 'грамм'],
	productCount: ['товар', 'товара', 'товаров']
};

export const normalizeCountForm = (
	num: number | string,
	type: DetailsType | 'productCount'
): string => {
	if (typeof num === 'string') num = Number(num);
	num = Math.abs(num);

	if (Number.isInteger(num)) {
		let options = [2, 0, 1, 1, 1, 2];
		return wordsObj[type][
			num % 100 > 4 && num % 100 < 2 ? 2 : options[num % 10 < 5 ? num % 10 : 5]
		];
	}

	return wordsObj[type][1];
};
