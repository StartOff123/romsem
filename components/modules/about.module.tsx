import React from 'react';

const About = () => {
	return (
		<div className="space-y-2">
			<h1 className="text-2xl text-zinc-400 font-bold">
				Заказать суши в Златоусте
			</h1>
			<p className="text-lg text-zinc-400">
				Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с
				доставкой на дом, приготовленные по классическим и адаптированным к
				европейской аудитории рецептам, а также собственным наработкам наших
				поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши
				в Златоусте с доставкой на дом или в офис.
			</p>
			<p className="text-lg text-zinc-400">В нашем меню более 20 видов суши:</p>
			<ul className="py-2 list-disc pl-5 text-zinc-400 text-lg">
				<li>Классические с сырым лососем, тунцом, окунем.</li>
				<li>Экзотические с тигровой креветкой, морским гребешком. </li>
				<li>Пикантные с копченым лососем, угрем. </li>
			</ul>
			<p className="text-lg text-zinc-400">
				В меню также представлены гунканы: с начинкой из красной икры и тобико,
				а также феликсы, где японский майонез сочетается с рыбой,
				морепродуктами, угрем. Любители острых блюд могут купить суши с соусом
				спайси. Популярные начинки — копченая курица, снежный краб, креветки,
				гребешки, тунец, лосось и окунь.
			</p>
		</div>
	);
};

export default About;
