

export class Product{
    public id:number = 0;
 public name:string;
 public description: string;
 public image:string;
 public price:number;
 public category:Category;
 public city:string;
 public seller:string;
 public phone:number;
 public email:string;

 constructor(){
     this.category= new Category();
 }
}

export class Category{
    public id:number;
    public name:string;
}

export class User{
    public username:string;
    public password:string;
    public enabled:number;
    public fullName:string;
}
export class ImageBean{
public id:number;
public image:string;
}



