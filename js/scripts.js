//business class

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
  } if (this.pizzaTopping2==="olives"){
    additionalCost +=1;
  } if (this.pizzaTopping3==="peppers"){
    additionalCost +=1;
  } if (this.pizzaTopping4==="sausage"){
    additionalCost +=1;

  }
  return additionalCost
}

PizzaOrder.prototype.sizePrice=function(){
  var orderCost=0;
  if(this.pizzaSize === "small"){
    orderCost += 10;
  } else if(this.pizzaSize==="medium"){
    orderCost += 13;
  } else {
    orderCost +=15;
  }

var orderPrice=orderCost*this.quantity;
return orderPrice
}
//user interface
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

    var price=newPizzaOrder.sizePrice();
    var additionalCost=newToppingList.additionalCost();

    var grandTotal=price+additionalCost;
    $("#result").show(function(){
      $("#order-price").text(grandTotal);
    });
  });
});
