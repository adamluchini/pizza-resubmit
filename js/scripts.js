function PizzaOrder (quantity, pizzaSize, pizzaToppings) {
  this.quantity=quantity;
  this.pizzaSize=pizzaSize;
  this.pizzaToppings=pizzaToppings;
}

PizzaOrder.prototype.calculatePrice=function(){
  var orderCost=0;
  if(this.pizzaSize === "small"){
    orderCost += 12;
  } else if(this.pizzaSize==="medium"){
    orderCost += 15;
  } else {
    orderCost +=20;
  }

var finalPrice=orderCost*this.quantity;
return finalPrice
}

// PizzaOrder.prototype.additionalCost=function(){
//   var additionalCost=0;
//   if(this.pizzaToppings1=== "pepperoni" || "olives")
//   orderCost +=6
// }else{
//   orderCost +=1
// }

$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var inputtedQuantity=parseInt($("input#quantity").val());
    var inputtedSize=$("select#size").val();
    var inputtedToppings1=$("select#toppings1").val();
    var inputtedToppings2=$("select#toppings2").val();
    var newPizzaOrder=new PizzaOrder(inputtedQuantity, inputtedSize, inputtedToppings1, inputtedToppings2);

    console.log(inputtedToppings1);
    console.log(inputtedToppings2);
    var price=newPizzaOrder.calculatePrice();
    $("#result").show(function(){
      $("#order-price").text(price);
    });
  });
});
