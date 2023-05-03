/**
 * Created by jindrichdolezal on 03.05.2023
 */
import Drink from "./Drink";

interface Barrels {
  id: string;
  price: number; // in euros
  volume: number; // in liters
  drink: Drink;
  available: boolean;
}

export default Barrels;
