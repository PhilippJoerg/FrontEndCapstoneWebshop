import { ISubcategory } from './subcategory';

export interface ICategory {
  category: string;
  subcategories: ISubcategory[];
}
