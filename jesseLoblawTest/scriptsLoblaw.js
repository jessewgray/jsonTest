

  function pageOne(){
  //console.log("hi");

  $('#itemWrap').empty();
  $.ajax({
      method: "GET",
      url: "http://localhost:8888/jesseLoblawTest/items.json",
      dataType: "json",
      success:function(data) {
         //console.log(data); 
        // console.log(data.results[0]);
  
        $('#itemWrap').append('<div class="row rowOne">');
        for (var i = 0; i < 4; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowOne').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
          $('.rowOne').append('</div>');

          $('#itemWrap').append('<div class="row rowTwo">');
          for (var i = 4; i < 8; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowTwo').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowTwo').append('</div>');
        $('#itemWrap').append('<div class="row rowThree">');
          for (var i = 8; i < 12; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowThree').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowThree').append('</div>');
        $('#itemWrap').append('<div class="row rowFour">');
          for (var i = 12; i < 16; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowFour').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowFour').append('</div>');
        $('#itemWrap').append('<div class="row rowFive">');
          for (var i = 16; i < 20; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowFive').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowFive').append('</div>');

      }

  });
        

  }



  //pageTwo

  function pageTwo(){

    $('#itemWrap').empty();

  $.ajax({
      method: "GET",
      url: "http://localhost:8888/jesseLoblawTest/items.json",
      dataType: "json",
      success:function(data) {
         //console.log(data); 
        // console.log(data.results[0]);
  
        $('#itemWrap').append('<div class="row rowOne">');
        for (var i = 20; i < 24; i++){
          var item = data.results[i];
         // console.log(item);
          $('.rowOne').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
          $('.rowOne').append('</div>');

          $('#itemWrap').append('<div class="row rowTwo">');
          for (var i = 24; i < 28; i++){
          var item = data.results[i];
         // console.log(item);
          $('.rowTwo').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowTwo').append('</div>');
        $('#itemWrap').append('<div class="row rowThree">');
          for (var i = 28; i < 32; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowThree').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowThree').append('</div>');
        $('#itemWrap').append('<div class="row rowFour">');
          for (var i = 32; i < 36; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowFour').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowFour').append('</div>');
        $('#itemWrap').append('<div class="row rowFive">');
          for (var i = 36; i < 40; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowFive').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowFive').append('</div>');

      }

  });
        

  }


  //pageThree


  function pageThree(){

    $('#itemWrap').empty();

  $.ajax({
      method: "GET",
      url: "http://localhost:8888/jesseLoblawTest/items.json",
      dataType: "json",
      success:function(data) {
         //console.log(data); 
        // console.log(data.results[0]);
  
        $('#itemWrap').append('<div class="row rowOne">');
        for (var i = 40; i < 44; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowOne').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
          $('.rowOne').append('</div>');

          $('#itemWrap').append('<div class="row rowTwo">');
          for (var i = 44; i < 48; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowTwo').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowTwo').append('</div>');
        $('#itemWrap').append('<div class="row rowThree">');
          for (var i = 48; i < 52; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowThree').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowThree').append('</div>');
        $('#itemWrap').append('<div class="row rowFour">');
          for (var i = 52; i < 56; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowFour').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowFour').append('</div>');
        $('#itemWrap').append('<div class="row rowFive">');
          for (var i = 56; i < 60; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowFive').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowFive').append('</div>');

      }

  });
        

  }


  function pageFour(){

    $('#itemWrap').empty();

  $.ajax({
      method: "GET",
      url: "http://localhost:8888/jesseLoblawTest/items.json",
      dataType: "json",
      success:function(data) {
         //console.log(data); 
        // console.log(data.results[0]);
  
        $('#itemWrap').append('<div class="row rowOne">');
        for (var i = 60; i < 64; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowOne').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
          $('.rowOne').append('</div>');

          $('#itemWrap').append('<div class="row rowTwo">');
          for (var i = 64; i < 68; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowTwo').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowTwo').append('</div>');
        $('#itemWrap').append('<div class="row rowThree">');
          for (var i = 68; i < 72; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowThree').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowThree').append('</div>');
        $('#itemWrap').append('<div class="row rowFour">');
          for (var i = 72; i < 76; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowFour').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowFour').append('</div>');
        $('#itemWrap').append('<div class="row rowFive">');
          for (var i = 76; i < 80; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowFive').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowFive').append('</div>');

      }

  });
        

  }


//pageFive


function pageFive(){

  $('#itemWrap').empty();

  $.ajax({
      method: "GET",
      url: "http://localhost:8888/jesseLoblawTest/items.json",
      dataType: "json",
      success:function(data) {
         //console.log(data); 
        // console.log(data.results[0]);
  
        $('#itemWrap').append('<div class="row rowOne">');
        for (var i = 80; i < 84; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowOne').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
          $('.rowOne').append('</div>');

          $('#itemWrap').append('<div class="row rowTwo">');
          for (var i = 84; i < 88; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowTwo').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowTwo').append('</div>');
        $('#itemWrap').append('<div class="row rowThree">');
          for (var i = 88; i < 90; i++){
          var item = data.results[i];
          //console.log(item);
          $('.rowThree').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

        }
        $('.rowThree').append('</div>');
        

        }
        

  });
        

  }



$( document ).ready(function() {
    pageOne();
});


//sort price button

function lastStep(){
  console.log('still working');
  $('#itemWrap').empty();
  var newOrderIs = newPriceOrder.sort().reverse();
  for (i = 0; i < priceArray.length; i++){
    var lala = newOrderIs[i];
    console.log(lala);
    $('#itemWrap').append(`<p>${lala}</p>`)

  }

}


newPriceOrder = []

function reorderPrice(){

for (var i = 0; i < priceArray.length; i++){
  var loopPrice = priceArray[i].productPrice;
  
  newPriceOrder.push(loopPrice);
}

var newOrderIs = newPriceOrder.sort().reverse();
console.log(newOrderIs);
  
  lastStep();
}



var priceArray = []

  function runPrice(){
  console.log("runPrice");

  $.ajax({
     method: "GET",
     url: "http://localhost:8888/jesseLoblawTest/items.json",
     dataType: "json",
     success:function(data) {
         //console.log(data); 
        

       data.results.forEach(function(item){
         //console.log(item.productPrice);
         //console.log(`price: ${item.productPrice} name: ${item.productName}`);
         var pieceOfClothing = {'productBadgeString' : `${item.productBadgeString}`,
                                 'thumbnail' : `${item.thumbnails.b2}`,
                                 'productName' : `${item.productName}`,
                                 'productColor' : `${item.productColor}`,
                                 'productPrice' : `${item.productPrice}`}
         //priceArray.push(`${item.productPrice}`)
         priceArray.push(pieceOfClothing);

       

       });
     
        

       reorderPrice();

      }

  });


  }




  function finalTry(){
  var finalTryArray = []

  $.ajax({
     method: "GET",
     url: "http://localhost:8888/jesseLoblawTest/items.json",
     dataType: "json",
     success:function(data) {
         //console.log(data); 
        

        for (var i = 0; i < data.results.length; i++){
           var item = data.results[i];
         if (data.results[i].productPrice == 89){
         
         $('#itemWrap').empty();
         $('#itemWrap').append(`<div class="col-sm-3 eachItem"><p>${item.productId}</p><img class="picOne" src="${item.thumbnails.b2}"><p class="badgeName">${item.productBadgeString}</p><h5 class="pName">${item.productName}</h5><p class="productColor">${item.productColor}</p><h3 class="priceTag"><span class="dollarSign">$</span>${item.productPrice}</h3></div>`)

         }

      } 

      
     
        
      }

  });


  }



  





  