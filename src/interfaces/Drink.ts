/**
 * Created by jindrichdolezal on 02.05.2023
 */

interface Drink {
  id: string;
  name: string;
  amountOfAlcohol: number;
  brewery: string;
  description: string;
  image: string;
  type: string;
  IBU: number;
}

export default Drink;
