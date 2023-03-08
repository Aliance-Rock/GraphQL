let users = [
	{
		id: 1,
		name: 'Слава Сергеев',
		email: 'sergeev2016@mail.ru',
	},
	{
		id: 2,
		name: 'Ева Сергеева',
		email: 'sergeeva@mail.ru',
	},
]

let categories = [
	{
		id: 1,
		name: 'Куклы',
		description: 'Куклы Барби',
	},
	{
		id: 2,
		name: 'Книги',
		description: 'Детские с веселыми картинками',
	},
	{
		id: 3,
		name: 'Наклейки',
		description: 'С фотографиями блогеров',
	},
]

let items = [
	{
		id: 100,
		name: 'Кукла Барби на отдыхе',
		price: 3990,
		description: 'Кукла Барби на пляже в купальнике',
		categoryId: 1,
	},
	{
		id: 101,
		name: 'Кукла Барби в клубе',
		price: 2990,
		description: 'Кукла Барби в вечернем платье',
		categoryId: 1,
	},
	{
		id: 102,
		name: 'Книга: Я познаю мир!',
		price: 290,
		description: 'Книга об окружающем мире в веселых картинках',
		categoryId: 2,
	},
	{
		id: 103,
		name: 'Книга: Я познаю космос!',
		price: 290,
		description: 'Книга о планетах в веселых картинках',
		categoryId: 2,
	},
	{
		id: 104,
		name: 'Наклейка с фотографией Светы Кемер',
		price: 4890,
		description: 'Света Кемер с золотой кнопкой',
		categoryId: 3,
	},
]

exports.users = users
exports.categories = categories
exports.items = items
