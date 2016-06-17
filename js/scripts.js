function Topping (pizzaTopping1, pizzaTopping2, pizzaTopping3, pizzaTopping4){
  this.pizzaTopping1=pizzaTopping1;
  this.pizzaTopping2=pizzaTopping2;
  this.pizzaTopping3=pizzaTopping3;
  this.pizzaTopping4=pizzaTopping4;
}


function PizzaOrder (quantity, pizzaSize){
  this.quantity=quantity;
  this.pizzaSize=pizzaSize;
}

Topping.prototype.additionalCost=function(){
  var additionalCost=0;
  if(this.pizzaTopping1==="pepperoni"){
    additionalCost +=1;
  } else if (this.pizzaTopping2==="olives"){
    additionalCost +=1;
  } else if (this.pizzaTopping3==="peppers"){
    additionalCost +=1;
  } else if (this.pizzaTopping4==="sausage"){
    additionalCost +=1;
  } else{

  }
  return additionalCost
}

PizzaOrder.prototype.sizePrice=function(){
  var orderCost=0;
  if(this.pizzaSize === "small"){
    orderCost += 12;
  } else if(this.pizzaSize==="medium"){
    orderCost += 15;
  } else {
    orderCost +=20;
  }

var orderPrice=orderCost*this.quantity;
return orderPrice
}
//
// PizzaOrder.prototype.additionalCost=function(){
//   var additionalCost=0;
//   if(this.pizzaTopping1=== "pepperoni"){
//   additionalCost+=10;
//   } else {
//   additionalCost+=0;
//   }
//   return additionalCost
// }
//
// PizzaOrder.prototype.additionalCost2=function(){
//   var additionalCost2=0;
//   if(this.pizzaTopping2=== "olives"){
//   additionalCost2+=10;
//   } else {
//   additionalCost2+=0;
//   }
//   return additionalCost2
// }
//
// PizzaOrder.prototype.additionalCost3=function(){
//   var additionalCost3=0;
//   if(this.pizzaTopping3=== "peppers"){
//   additionalCost3+=10;
//   } else {
//   additionalCost3+=0;
//   }
//   return additionalCost3
// }
//
// PizzaOrder.prototype.additionalCost4=function(){
//   var additionalCost4=0;
//   if(this.pizzaTopping4=== "sausage"){
//   additionalCost4+=10;
//   } else {
//   additionalCost4+=0;
//   }
//   return additionalCost4
// }

$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var inputtedQuantity=parseInt($("input#quantity").val());
    var inputtedSize=$("select#size").val();
    var pizzaTopping1=$("select#toppings1").val();
    var pizzaTopping2=$("select#toppings2").val();
    var pizzaTopping3=$("select#toppings3").val();
    var pizzaTopping4=$("select#toppings4").val();
    // var inputtedToppings2=$("select#toppings2").val();
    var newPizzaOrder=new PizzaOrder(inputtedQuantity, inputtedSize);
    var newToppingList=new Topping(pizzaTopping1, pizzaTopping2, pizzaTopping3, pizzaTopping4);

    console.log(pizzaTopping1);
    console.log(pizzaTopping2);
    // console.log(inputtedTopping3);
    // console.log(inputtedTopping4);
    var price=newPizzaOrder.sizePrice();
    var additionalCost=newToppingList.additionalCost();
    // var additionalCost2=newPizzaOrder.additionalCost2();
    // var additionalCost3=newPizzaOrder.additionalCost3();
    // var additionalCost4=newPizzaOrder.additionalCost4();
    var grandTotal=price+additionalCost;
    $("#result").show(function(){
      $("#order-price").text(grandTotal);
    });
  });
});
