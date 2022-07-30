import Express from '../assets/coffees/express.svg'
import American from '../assets/coffees/american.svg'
import Creamy from '../assets/coffees/creamy.svg'
import Cold from '../assets/coffees/cold.svg'
import WithMilk from '../assets/coffees/with-milk.svg'
import Latte from '../assets/coffees/latte.svg'
import Capuccino from '../assets/coffees/capuccino.svg'
import Macchiato from '../assets/coffees/macchiato.svg'
import Mochaccino from '../assets/coffees/mochaccino.svg'
import HotChocolate from '../assets/coffees/hot-chocolate.svg'
import Cubano from '../assets/coffees/cubano.svg'
import Havaiano from '../assets/coffees/havaiano.svg'
import Arabe from '../assets/coffees/arabe.svg'
import Irlandes from '../assets/coffees/irlandes.svg'

export const coffeeList = [
  {
    id: '1',
    title: 'Expresso Tradicional',
    type: ['traditional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    coffeeImage: Express,
    amountInTheCart: 0,
  },
  {
    id: '2',
    title: 'Expresso Americano',
    type: ['traditional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    coffeeImage: American,
    amountInTheCart: 0,
  },
  {
    id: '3',
    title: 'Expresso Cremoso',
    type: ['traditional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    coffeeImage: Creamy,
    amountInTheCart: 0,
  },
  {
    id: '4',
    title: 'Expresso Gelado',
    type: ['traditional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    coffeeImage: Cold,
    amountInTheCart: 0,
  },
  {
    id: '5',
    title: 'Café com Leite',
    type: ['traditional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    coffeeImage: WithMilk,
    amountInTheCart: 0,
  },
  {
    id: '6',
    title: 'Latte',
    type: ['traditional', 'com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    coffeeImage: Latte,
    amountInTheCart: 0,
  },
  {
    id: '7',
    title: 'Capuccino',
    type: ['traditional', 'com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    coffeeImage: Capuccino,
    amountInTheCart: 0,
  },
  {
    id: '8',
    title: 'Macchiato',
    type: ['traditional', 'com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    coffeeImage: Macchiato,
    amountInTheCart: 0,
  },
  {
    id: '9',
    title: 'Mochaccino',
    type: ['traditional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    coffeeImage: Mochaccino,
    amountInTheCart: 0,
  },
  {
    id: '10',
    title: 'Chocolate Quente',
    type: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    coffeeImage: HotChocolate,
    amountInTheCart: 0,
  },
  {
    id: '11',
    title: 'Cubano',
    type: ['especial', 'alcoólico', 'gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    coffeeImage: Cubano,
    amountInTheCart: 0,
  },
  {
    id: '12',
    title: 'Havaiano',
    type: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    coffeeImage: Havaiano,
    amountInTheCart: 0,
  },
  {
    id: '13',
    title: 'Árabe',
    type: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    coffeeImage: Arabe,
    amountInTheCart: 0,
  },
  {
    id: '14',
    title: 'Irlandês',
    type: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    coffeeImage: Irlandes,
    amountInTheCart: 0,
  },
]
