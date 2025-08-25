// src/data/offers.ts
import { Offer } from "../types";

export const offers: Offer[] = [
  {
    listing_id: 1,
    url: "https://example.com/item1",
    MainImage: {
      url_570xN: "https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=Abstract+Painting",
    },
    title: "Blue Abstract Painting",
    currency_code: "USD",
    price: "259.00",
    quantity: 1,
  },
  {
    listing_id: 2,
    url: "https://example.com/item2",
    MainImage: {
      url_570xN: "https://via.placeholder.com/300x200/FF69B4/FFFFFF?text=Dino+Magnets",
    },
    title: "Fun Dinosaur Magnets",
    currency_code: "USD",
    price: "3.50",
    quantity: 9,
  },
  {
    listing_id: 3,
    url: "https://example.com/item3",
    MainImage: {
      url_570xN: "https://via.placeholder.com/300x200/C0C0C0/000000?text=Paper+Airplane+Necklace",
    },
    title: "Silver Paper Airplane Necklace",
    currency_code: "USD",
    price: "25.00",
    quantity: 7,
  },
  {
    listing_id: 4,
    url: "https://example.com/item4",
    MainImage: {
      url_570xN: "https://via.placeholder.com/300x200/FFD700/000000?text=MacBook+Sticker",
    },
    title: "Cool MacBook Sticker",
    currency_code: "USD",
    price: "5.90",
    quantity: 25,
  },
  {
    listing_id: 5,
    url: "https://example.com/item5",
    MainImage: {
      url_570xN: "https://via.placeholder.com/300x200/20B2AA/FFFFFF?text=Summer+Scarf",
    },
    title: "Colorful Summer Scarf",
    currency_code: "GBP",
    price: "8.00",
    quantity: 3,
  },
  {
    listing_id: 6,
    url: "https://example.com/item6",
    MainImage: {
      url_570xN: "https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Mermaid+Fabric",
    },
    title: "Mermaid Pattern Fabric",
    currency_code: "EUR",
    price: "9.95",
    quantity: 4,
  },
];
