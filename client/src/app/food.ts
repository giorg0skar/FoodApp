export class Food {
  _id;
  title: string;
  price: number;
  category:string = 'Main dishes';
  description: string = '';
  available: boolean = true;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
