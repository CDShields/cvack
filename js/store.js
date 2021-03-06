var products = {
  books : [{
      divname: "dummies",
      divclass: "book_product",
      name: "Kayaking for Dummies",
      category: "Category: How-To",
      price: 29.99,
      picture: "./images/dummies.gif",
      details: ["This comprehensive guide is a must-have for any newcomer to the world of kayaking.", "From choosing the right vessel to embarking on your first adventure - this book will cover it all."]
    }, {
      divname: "riverpics",
      divclass: "book_product",
      name: "Photographic Guide to Central Virginia's Waterways",
      category: "Category: Photography",
      price: 49.99,
      picture: "./images/waterways.gif",
      details: ["This book is a collection of beautiful photographs taken by various amateur and professional photographers around the Central Virginia area.", "Gives the reader a variety of perspectives on the area's waterways."]
    }, {
      divname: "idiots",
      divclass: "book_product",
      name: "The Complete Idiots Guide to Canoeing and Kayaking",
      category: "Category: How-To",
      price: 19.99,
      picture: "https://books.google.com/books/content/images/frontcover/le7AYQzSpo0C?fife=w300-rw",
      details: ["Another great resource for beginners.", "This guide will navigate you through the waters."]
    }, {
      divname: "beginning",
      divclass: "book_product",
      name: "In the beginning...",
      category: "How-To",
      price: 35.99,
      picture: "./images/in_the_beg.jpg",
      details: ["Great book.","Buy it, please."]
    }],
  accessories : [{
      divname: "paddle",
      divclass: "accessories",
      name: "Kayak Paddle",
      category: "Category: Paddles",
      price: 149.99,
      picture: "./images/paddle.jpg",
      details: ["The Paddly paddle from Acme offers beginning and recreational paddlers excellent value and performance.","A must have for your kayaking starter-kit."]
    }, {
      divname: "dry_bag",
      divclass: "accessories",
      name: "Dry Bag",
      category: "Category: Gear Bags",
      price: 159.99,
      picture: "./images/backpack.jpg",
      details: ["This 115-liter Acme dry pack keeps your gear secure and dry during all of your kayaking adventures.","Made from military grade materials for extra durability."]
    }]
  };

function add_to_page (item) {

  for (var i=0; i<item.length; i++) {
      var detailsText = ""
      for (j=0; j < item[i].details.length; j++) {
        detailsText = detailsText + item[i].details[j] + " ";
      }
      $('#content').append(
        $('<div id='+item[i].divname+' class='+item[i].divclass+'>').append( $('<div class=name>').text(item[i].name),
        $('<div class=category>').text(item[i].category),
        $('<div class=price>').text(item[i].price),
        $('<div class=picture>').html('<img src='+item[i].picture+'>'),
        $('<div class=details>').text(detailsText)));
  }

  //$(item.divname + ' .category').text(item.category);
  //$(item.divname + ' .price').text(item.price);
  //$(item.divname + ' .picture').html('<img src="' + item.picture + '"/>');
  //$(item.divname + ' .details').text(item.details);
}

// $('#content').append($('<div id=book1>').html( $('<div class=name>').text(book1.name)))

add_to_page(products["books"]);
add_to_page(products["accessories"]);
$('.book_product').hide();
$('.accessories').hide();

function bookInit () {
  $('.book_product').show();
  $('.accessories').hide();
  $('#storeInit').hide();
}
function accessInit () {
  $('.accessories').show();
  $('.book_product').hide();
  $('#storeInit').hide();
}
function showAll () {
  $('.accessories').show();
  $('.book_product').show();
}
document.getElementById('booksIcon').style.cursor = "pointer";
document.getElementById('accessIcon').style.cursor = "pointer";
//document.getElementById('navBooks').style.cursor = "pointer";
//document.getElementById('navAccessories').style.cursor = "pointer";
//document.getElementById('showAll').style.cursor = "pointer";
//document.querySelector('#navBooks').addEventListener('click',bookInit);
//document.querySelector('#navAccessories').addEventListener('click',accessInit);
//document.querySelector('#showAll').addEventListener('click',showAll);
document.querySelector('#booksIcon').addEventListener('click',bookInit);
document.querySelector('#accessIcon').addEventListener('click',accessInit);
document.querySelector('#booksIcon').addEventListener('mouseover', function () {
  document.querySelector('#booksIcon').src = "./images/book2.gif";
});
document.querySelector('#booksIcon').addEventListener('mouseout', function () {
  document.querySelector('#booksIcon').src = "./images/book1.gif";
});
document.querySelector('#accessIcon').addEventListener('mouseover',function(){
  document.querySelector('#accessIcon').src = "./images/access2.gif";
});
document.querySelector('#accessIcon').addEventListener('mouseout',function(){
  document.querySelector('#accessIcon').src = "./images/access1.gif";
});

$('.store_categories').change(function () {
  if (this.value == "books") {
    bookInit();
    console.log("should have called bookInit");
  } else if (this.value == "accessories") {
    accessInit();
    console.log("should have called accessInit");
  } else {
    showAll();
    console.log("should have called showAll")
  }
});
