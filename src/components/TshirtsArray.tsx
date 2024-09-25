import React from "react";
import {TshirtsInterface} from "../interfaces/Tshirts_interface"

export const Tshirts: TshirtsInterface[] = [
  {
    id: 1,
    name: 'Classic Monochrome Tees',
    price: '35.00',
    image: '/images/T-Shirt4.png',
    instock: true,
  },
  {
    id: 2,
    name: 'Monochromatic Wardrobe',
    price: '27.00',
    image: '/images/T-Shirt3.png',
    instock: false,
  },
  {
    id: 3,
    name: 'Essential Neutrals',
    price: '22.00',
    image: '/images/T-Shirt2.png',
    instock: true,
  },
  {
    id: 4,
    name: 'UTRAANET Black',
    price: '43.00',
    image: '/images/T-Shirt1.png',
    instock: false,
  },
];
export default Tshirts