import { IItems } from './items';

export interface ISubcategory {
        name: string;
  items: (IItems | IItems)[];
}
