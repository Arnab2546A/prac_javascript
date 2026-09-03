function createProduct(name,price){
    let stock=10;
    return{
        name,
        price,
        buy(val){
            if(val<=stock){
                stock-=val;
            console.log(`${val} no of product ordered. ${stock} products are left.`);
            }
            else{
                console.log('we dont have that no of products');
            }
        },
        check(){
            console.log(`total ${stock} no of products left.`);
        },
        add(val){
            stock+=val;
            console.log(`total stock is now ${stock}`);
        }
    }
}

let iphone=createProduct('Iphone',70000);
iphone.buy(5);
iphone.check();
iphone.add(6);

let samsung=createProduct('samsung',50000);
samsung.buy(2);
samsung.check();
samsung.add(5);