export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Ноутбук',
    description: 'Легкий ультрабук для навчання та роботи.',
    price: 1200
  },
  {
    id: 2,
    name: 'Смартфон',
    description: 'Сучасний смартфон з якісною камерою.',
    price: 800
  },
  {
    id: 3,
    name: 'Навушники',
    description: 'Бездротові навушники з шумозаглушенням.',
    price: 250
  },
  {
    id: 4,
    name: 'Монітор',
    description: '27" IPS монітор для роботи та ігор.',
    price: 450
  }
];

