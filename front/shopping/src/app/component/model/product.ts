

export class Product{
    public id:number = 0;
 public name:string;
 public description: string;
 public image:string;
 public price:number;
 public category:Category;
 public username:string;

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
export class Customer{
public id:number;
public name:string;
public address:string;
public phone:string;
public email:string;
public city:string;
}

export class OrderModel{
    public id:number ;
	public note:string ;
	public price:number;
	public username:string;
	public customer:Customer= new Customer();
	public orderProducts:OrderProduct[];
}
export class OrderProduct{
    public id:number;
    public product:Product;
    public quantity:number;
}



