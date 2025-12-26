export interface Item {
  id: number;
  name: string;
  category: string;
  description: string;
}

export const ITEMS: Item[] = [
  { id: 1, name: 'Флешка', category: 'Гаджети', description: 'Швидка USB-флешка 128 ГБ' },
  { id: 2, name: 'Навушники', category: 'Аудіо', description: 'Бездротові навушники з шумозаглушенням' },
  { id: 3, name: 'Лампа', category: 'Освітлення', description: 'Настільна лампа з регулюванням яскравості' },
  { id: 4, name: 'Рюкзак', category: 'Аксесуари', description: 'Великий рюкзак для подорожей' },
  { id: 5, name: 'Кавоварка', category: 'Побутова техніка', description: 'Кавоварка для ароматної кави' },
  { id: 6, name: 'Смарт-годинник', category: 'Гаджети', description: 'Сучасний годинник з трекером активності' },
  { id: 7, name: 'Портативна колонка', category: 'Аудіо', description: 'Колонка з якісним стереозвуком' },
  { id: 8, name: 'Комод', category: 'Меблі', description: 'Дерев’яний комод з 4 ящиками' }
];

