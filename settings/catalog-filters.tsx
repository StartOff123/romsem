import {
	BsSortAlphaDown,
	BsSortDown,
	BsSortDownAlt,
	BsSortNumericDownAlt
} from 'react-icons/bs';

import { SelectOptions } from '@/ui/select';

export const sortFilter: SelectOptions[] = [
	{
		title: 'По возрастанию цены',
		value: 'asc',
		icon: <BsSortDownAlt />
	},
	{
		title: 'По убыванию цены',
		value: 'desc',
		icon: <BsSortDown />
	},
	{
		title: 'По популярности',
		value: 'popular',
		icon: <BsSortNumericDownAlt />
	},
	{
		title: 'По алфавиту',
		value: 'alphabetically',
		icon: <BsSortAlphaDown />
	}
];
