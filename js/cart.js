	
$(document).ready(function() {
  fetch('http://localhost:8080/cart.json')
    // Handle success
    .then(response => response.json())  // convert to json
	.then(function(data) {
		$.each(data.items, function(i,item){
				$('.item-group').append('<div class="item">' +
					'<div class="discount">' + item.discount + "% off" + '</div>' +
					'<img class="image" src=' + item.image + ' alt>' +
					'<div class="info">' + item.name + '</div>' +
					'<div class="display">' + item.price.display + '</div>' +
					'<div class="actual">' + item.price.actual + '</div>' +
					'<button class="addToCart">'  + "Add to Cart" + '</button>' +
				'</div>');
		});
	})
    .catch(err => console.log('Request Failed', err)); // Catch errors
});