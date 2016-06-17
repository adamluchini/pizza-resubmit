function PizzaOrder (quantity, pizzaSize, pizzaToppings) {
  this.quantity=quantity;
  this.pizzaSize=pizzaSize;
  this.pizzaToppings=pizzaToppings
}

PizzaOrder.prototype.calculatePrice=
function(){
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

$(document).ready(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var inputtedQuantity=parseInt($("input#quantity").val());
    var inputtedSize=$("select#size").val();
    var inputtedToppings=$("select#toppings").val();
    var newPizzaOrder=new PizzaOrder(inputtedQuantity, inputtedSize, inputtedToppings);

    console.log(inputtedQuantity);
    var price=newPizzaOrder.calculatePrice();
    $("#result").show(function(){
      $("#order-price").text(price);
    });
  });
});
