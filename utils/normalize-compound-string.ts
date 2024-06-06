export const normalizeCompoundString = (compound: string[]): string => {
	let compoundSrt: string = '';

	const compoundToLowerCase: string[] = compound.map((item) =>
		item.toLowerCase()
	);

	compoundToLowerCase.forEach((item) => {
		if (compoundToLowerCase.indexOf(item) === 0) {
			compoundSrt += item[0].toUpperCase() + item.slice(1);
		} else {
			compoundSrt += item;
		}

		if (compoundToLowerCase.indexOf(item) + 1 !== compound.length) {
			compoundSrt += ', ';
		}
	});

	return compoundSrt;
};
