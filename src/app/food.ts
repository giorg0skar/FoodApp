export class Food {
  id: number;
  title: string;
  description: string = '';
  available: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
