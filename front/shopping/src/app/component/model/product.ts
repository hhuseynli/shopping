

export class Product{
 private id:number = 0;
 private name:string;
 private description: string;
 private image:string;
 private price:number;
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

export class User{
    private username:string;
    private password:string;
    private enabled:number;
    private fullName:string;
}
export class ImageBean{
private id:number;
private name:string;
}



