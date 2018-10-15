window.addEventListener('DOMContentLoaded', function() {

	let products__wrapper = document.querySelector('.products__wrapper'),
		 // products__item = document.querySelectorAll('.products__background'),
		 // buy = document.querySelector('.buy'),
		 // products_weight_circle = document.querySelectorAll('.products__text_weight'),
		 products__text_down = document.querySelectorAll('.products__text_down'),
		 itemFua = document.querySelector('#itemFua'),
		 itemFish = document.querySelector('#itemFish'),
		 itemChickan = document.querySelector('#itemChickan'),
		 circleFua = document.querySelector('#circleFua'),
		 circleFish = document.querySelector('#circleFish'),
		 circleChickan = document.querySelector('#circleChickan'),
		 productsNameFua = "с фуа-гра",
		 productsNameFish = "с рыбой",
		 productsNameChicken = "с курой";

// select START
	products__wrapper.addEventListener('click', function(event) {
		let target = event.target;
		while (target != this) {
			switch(target.id) {
				case "itemFua":
					select (itemFua, circleFua);
				break;
			
				case "buyFua":
					select (itemFua, circleFua);
				break;
				
				case "itemFish":
					select (itemFish, circleFish);
				break;

				case "buyFish":
					select (itemFish, circleFish);
				break;

				case "itemChickan":
					select (itemChickan, circleChickan);
				break;

				case "buyChickan":
					select (itemChickan, circleChickan);
				break;
			}
			target = target.parentNode;
		}
	});

	function select (item, circle){
		if (item.classList.contains('products__background') && !item.classList.contains('products__background_disabled') ) {
			item.classList.toggle('products__background_default');
			item.classList.toggle('products__background_selected');
			circle.classList.toggle('products__text_weight_default');
			circle.classList.toggle('products__text_weight_selected');
		}
	}

// select END


});