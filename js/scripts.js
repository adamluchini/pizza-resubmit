//business class

function Topping (pizzaTopping1, pizzaTopping2, pizzaTopping3, pizzaTopping4){
  this.pizzaTopping1=pizzaTopping1;
  this.pizzaTopping2=pizzaTopping2;
  this.pizzaTopping3=pizzaTopping3;
  this.pizzaTopping4=pizzaTopping4;
}

function SizeOrder (quantity, pizzaSize){
  this.quantity=quantity;
  this.pizzaSize=pizzaSize;
}

Topping.prototype.toppingCost=function(){
  var toppingCost=0;
  if(this.pizzaTopping1==="pepperoni"){
    toppingCost +=1;
  } if (this.pizzaTopping2==="olives"){
    toppingCost +=1;
  } if (this.pizzaTopping3==="peppers"){
    toppingCost +=1;
  } if (this.pizzaTopping4==="sausage"){
    toppingCost +=1;

  }
  return toppingCost
}

SizeOrder.prototype.sizePrice=function(){
  var sizeCost=0;
  if(this.pizzaSize === "small"){
    sizeCost += 10;
  } else if(this.pizzaSize==="medium"){
    sizeCost += 13;
  } else {
    sizeCost +=15;
  }

var orderPrice=sizeCost*this.quantity;
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
    
    var newSizeOrder=new SizeOrder(inputtedQuantity, inputtedSize);
    var newToppingList=new Topping(pizzaTopping1, pizzaTopping2, pizzaTopping3, pizzaTopping4);

    var sizePrice=newSizeOrder.sizePrice();
    var toppingCost=newToppingList.toppingCost();

    var grandTotal=sizePrice+toppingCost;
    $("#result").show(function(){
      $("#order-price").text(grandTotal);
    });
  });
});
