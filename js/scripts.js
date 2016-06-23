//business class

function Topping (pizzaTopping1, pizzaTopping2, pizzaTopping3, pizzaTopping4){
  this.pizzaTopping1=pizzaTopping1;
  this.pizzaTopping2=pizzaTopping2;
  this.pizzaTopping3=pizzaTopping3;
  this.pizzaTopping4=pizzaTopping4;
}

function SizeOrder (pizzaSize){
  this.pizzaSize=pizzaSize;
}

function Quantity (pizzaQuantity){
  this.pizzaQuantity=pizzaQuantity;
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
  var sizePrice=0;
  if(this.pizzaSize === "small"){
    sizePrice += 10;
  } else if(this.pizzaSize=== "medium"){
    sizePrice += 13;
  } else {
    sizePrice +=15;
  }

// var orderPrice=sizeCost*this.quantity;
return sizePrice
}

Quantity.prototype.quantityCost=function(){
  var quantityCost=0;
  if(this.pizzaQuantity=== "1"){
    quantityCost +=1;
  } else if (this.pizzaQuantity=== "2"){
    quantityCost +=2;
  } else if (this.pizzaQuantity=== "3"){
    quantityCost +=3;
  } else if (this.pizzaQuantity=== "4"){
    quantityCost +=4;
  } else {
    quantityCost +=5;
  }
  return quantityCost
}


//user interface
$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var inputtedQuantity=$("select#quantity").val();
    var inputtedSize=$("select#size").val();
    var pizzaTopping1=$("select#toppings1").val();
    var pizzaTopping2=$("select#toppings2").val();
    var pizzaTopping3=$("select#toppings3").val();
    var pizzaTopping4=$("select#toppings4").val();

    var newSizeOrder=new SizeOrder(inputtedSize);
    var newToppingList=new Topping(pizzaTopping1, pizzaTopping2, pizzaTopping3, pizzaTopping4);
    var newQuantityMult=new Quantity(inputtedQuantity);

    var sizePrice=newSizeOrder.sizePrice();
    var toppingCost=newToppingList.toppingCost();
    var quantityCost=newQuantityMult.quantityCost();
    var grandTotal=(sizePrice+toppingCost)*quantityCost;
    $("#result").show()
      $("#order-price").text(grandTotal);
  });
});
