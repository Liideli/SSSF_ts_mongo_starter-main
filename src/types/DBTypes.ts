import {Point} from 'geojson';
import mongoose, {Document} from 'mongoose';

type Category = {
  _id: mongoose.Types.ObjectId;
  category_name: string;
};

type Species = Partial<Document> & {
  species_name: string;
  category: mongoose.Types.ObjectId;
  image: string;
  location: Point;
};

type Animal = Partial<Document> & {
  animal_name: string;
  species: mongoose.Types.ObjectId;
  birthdate: Date;
  gender: 'male' | 'female';
};

export {Category, Species, Animal};
