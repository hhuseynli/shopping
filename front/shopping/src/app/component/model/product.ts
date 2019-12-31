

export class Product{
 private id:number=0;
 private name:string;
 private description: string;
 private image:File;
 private price:number=0;
 private category:Category;
 private city:string;
 private seller:string;
 private phone:number;
 private email:string;

 constructor(){
     this.category= new Category();
 }
}

export class Category{
    private id:number;
    private name:string;
}



