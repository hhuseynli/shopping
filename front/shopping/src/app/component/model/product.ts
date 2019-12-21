export class Product{
 private name:string;
 private description: string;
  private image:File;
 private price:number;
 private category:Category; 
 constructor() {
    this.category = new Category();
}



}
export class Category {
public id: number;
public name: string;
}