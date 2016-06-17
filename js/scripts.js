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

var orderPrice=orderCost*this.quantity;
return orderPrice
}

PizzaOrder.prototype.additionalCost=function(){
  var additionalCost=0;
  if(this.pizzaToppings1=== "pepperoni" || "olives"){
  additionalCost+=6;
  } else {
  additionalCost+=1;
  }
  return additionalCost
}

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
    // console.log(finalPrice);
    var price=newPizzaOrder.calculatePrice();
    var additionalCost=newPizzaOrder.additionalCost();
    var grandTotal=price+additionalCost;
    $("#result").show(function(){
      $("#order-price").text(grandTotal);
    });
  });
});
