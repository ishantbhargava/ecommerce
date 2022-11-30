import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    brand:"ARMANI EXCHANGE",
    src:"./images/mensimg-1.png",
    title: "All-Over Micro Logo Print Slim Fit Shirt",
    price: "500",
    MRP: "1000",
    discount:"50%",
    rating:"3.5/5",
    categoryName: "MEN",
  },
  
];
