

export type Product = {
  id: number;

  name: string;

  originAnimal: OriginAnimals;
  
  price: number;
  
  weight: number;

  units: number;

  description: string;

  expirationDate: Date;

  imageUri: string;
}

export enum OriginAnimals {
  Pig = 'pig',
  Beef = 'beef',
  Chicken = 'chicken',
  Vegetal = 'vegetal'
}