var newPizza;
var toppingsPrice;

// //Business logic:
function Pizza (size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.totalPrice = function() {
  if (this.size === "Small") {
    return toppingsPrice + 12;
  } if (this.size === "Medium") {
    return toppingsPrice + 18;
  } if (this.size === "Large") {
    return toppingsPrice + 25;
  }
}

function reset() {
$("#pizza-size").val("");
$("#toppings").val("");
$("#new-name").val("");
$("#new-email").val("");
$("#new-phone").val("");
$("#requests").val("");
}

//UI logic:
$(document).ready(function() {
  $("#more-toppings").click(function() {
    $("#add-toppings").append('<h3>Additional Toppings:</h3>' +
                              '<div class="add-toppings">' +
                                '<select class="form-control" id="toppings">' +
                                  '<option value="Pepperoni">Pepperoni</option>' +
                                  '<option value="Mushrooms">Mushrooms</option>' +
                                  '<option value="Bacon">Bacon</option>' +
                                  '<option value="Pineapple">Pineapple</option>' +
                                  '<option value="Ham">Ham</option>' +
                                  '<option value="Garlic">Garlic</option>' +
                                  '<option value="Onions">Onion</option>' +
                                  '<option value="Basil">Basil</option>' +
                                  '<option value="Anchovies">Anchovies</option>' +
                                  '<option value="Extra Cheese">Extra Cheese</option>' +
                                '</select>');
});

  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var inputPizzaSize = $("#pizza-size").val();
    newPizza = new Pizza(inputPizzaSize);

    $(".add-toppings").each(function() {
      var inputToppings = $(this).children("#toppings").val();
      newPizza.toppings.push(inputToppings);
      toppingsPrice = newPizza.toppings.length;

    var userName = $("#new-name").val();
    var specialRequests = $("#requests").val();

    $("#order-details").show();
    $(".user-name").text(userName);
    $(".size-ordered").text(newPizza.size);
    $(".toppings-ordered").text(newPizza.toppings);
    $(".special-requests").text(specialRequests);
    $(".order-total").text(newPizza.totalPrice());
    });
    reset();
  });
});
