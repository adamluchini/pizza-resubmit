function PizzaOrder (quantity, pizzaSize, pizzaTopping1, pizzaTopping2, pizzaTopping3, pizzaTopping4){
  this.quantity=quantity;
  this.pizzaSize=pizzaSize;
  this.pizzaTopping1=pizzaTopping1;
  this.pizzaTopping2=pizzaTopping2;
  this.pizzaTopping3=pizzaTopping3;
  this.pizzaTopping4=pizzaTopping4;

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

PizzaOrder.prototype.additionalCost=function(){
  var additionalCost=0;
  if(this.pizzaTopping1=== "pepperoni"){
  additionalCost+=10;
  } else {
  additionalCost+=0;
  }
  return additionalCost
}

PizzaOrder.prototype.additionalCost2=function(){
  var additionalCost2=0;
  if(this.pizzaTopping2=== "olives"){
  additionalCost2+=10;
  } else {
  additionalCost2+=0;
  }
  return additionalCost2
}

PizzaOrder.prototype.additionalCost3=function(){
  var additionalCost3=0;
  if(this.pizzaTopping3=== "peppers"){
  additionalCost3+=10;
  } else {
  additionalCost3+=0;
  }
  return additionalCost3
}

PizzaOrder.prototype.additionalCost4=function(){
  var additionalCost4=0;
  if(this.pizzaTopping4=== "sausage"){
  additionalCost4+=10;
  } else {
  additionalCost4+=0;
  }
  return additionalCost4
}

$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var inputtedQuantity=parseInt($("input#quantity").val());
    var inputtedSize=$("select#size").val();
    var inputtedTopping1=$("select#toppings1").val();
    var inputtedTopping2=$("select#toppings2").val();
    var inputtedTopping3=$("select#toppings3").val();
    var inputtedTopping4=$("select#toppings4").val();
    // var inputtedToppings2=$("select#toppings2").val();
    var newPizzaOrder=new PizzaOrder(inputtedQuantity, inputtedSize, inputtedTopping1, inputtedTopping2, inputtedTopping3, inputtedTopping4);

    console.log(inputtedTopping1);
    console.log(inputtedTopping2);
    // console.log(additionalCost2);
    var price=newPizzaOrder.sizePrice();
    var additionalCost=newPizzaOrder.additionalCost();
    var additionalCost2=newPizzaOrder.additionalCost2();
    var additionalCost3=newPizzaOrder.additionalCost3();
    var additionalCost4=newPizzaOrder.additionalCost4();
    var grandTotal=price+additionalCost+additionalCost2+additionalCost3+additionalCost4;
    $("#result").show(function(){
      $("#order-price").text(grandTotal);
    });
  });
});
