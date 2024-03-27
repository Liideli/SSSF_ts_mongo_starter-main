import mongoose from 'mongoose';
import {Category} from '../../types/DBTypes';

const categorySchema = new mongoose.Schema<Category>({
  category_name: {
    type: String,
    unique: true,
    minlength: [2, 'Minimum lenght is 2 characters.'],
  },
});

export default mongoose.model<Category>('Category', categorySchema);
