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
		 textDownFua = document.querySelector('#textDownFua'),
		 textDownFish = document.querySelector('#textDownFish'),
		 textDownChickan = document.querySelector('#textDownChickan');


// select START
	products__wrapper.addEventListener('click', function(event) {
		let target = event.target;
		while (target != this) {
			switch(target.id) {
				case "itemFua" || "buyFua":
					if (!itemFua.classList.contains('products__background_disabled')) {
						select (itemFua, circleFua);
						textDownFua.classList.toggle('products__text_down_default');
						textDownFua.classList.toggle('products__text_down_selected');
						downText (target.id);
					} 
					// else {
					// 	textDownFua.classList.add('products__text_down_disabled');
					// 	textDownFua.innerHTML = "Печалька, с фуа-гра закончился.";
					// }
				break;
				
				case "itemFish" || "buyFish":
					if (!itemFish.classList.contains('products__background_disabled')) {
						select (itemFish, circleFish);
						textDownFish.classList.toggle('products__text_down_default');
						textDownFish.classList.toggle('products__text_down_selected');
						downText (target.id);
					}
					// else {
					// 	textDownFish.classList.add('products__text_down_disabled');
					// 	textDownFish.innerHTML = "Печалька, с рыбкой закончился.";
					// }
				break;

				case "itemChickan" || "buyChickan":
					if (!itemChickan.classList.contains('products__background_disabled')) {
						select (itemChickan, circleChickan);
						textDownChickan.classList.toggle('products__text_down_default');
						textDownChickan.classList.toggle('products__text_down_selected');
						downText (target.id);
					}
					// else {
					// 	textDownChickan.classList.add('products__text_down_disabled');
					// 	textDownChickan.innerHTML = "Печалька, с курой закончился.";
					// }
				break;
			}
			target = target.parentNode;
		}
	});

	function select (item, circle){
		if (item.classList.contains('products__background') ) {
			item.classList.toggle('products__background_default');
			item.classList.toggle('products__background_selected');
			circle.classList.toggle('products__text_weight_default');
			circle.classList.toggle('products__text_weight_selected');
		}
	}
	// изменение текста под карточкой
	function downText (textItem){
		switch (textItem) {
			case "itemFua":
				if(textDownFua.classList.contains('products__text_down_default') ) {
					textDownFua.innerHTML = "Чего сидишь? Порадуй котэ, <a id='buyFua' href='#' class='buy' >купи.</a>";
				}
				if (textDownFua.classList.contains('products__text_down_selected') ) {
					textDownFua.innerHTML = "Печень утки разварная с артишоками.";
				}
			break;

			case "itemFish":
				if(textDownFish.classList.contains('products__text_down_default') ) {
					textDownFish.innerHTML = "Чего сидишь? Порадуй котэ, <a id='buyFish' href='#' class='buy' >купи.</a>";
				}
				if (textDownFish.classList.contains('products__text_down_selected') ) {
					textDownFish.innerHTML = "Головы щучьи с чесноком да свежайшая сёмгушка.";
				}
			break;

			case "itemChickan":
				if(textDownChickan.classList.contains('products__text_down_default') ) {
					textDownChickan.innerHTML = "Чего сидишь? Порадуй котэ, <a id='buyChickan' href='#' class='buy' >купи.</a>";
				}
				if (textDownChickan.classList.contains('products__text_down_selected') ) {
					textDownChickan.innerHTML = "Филе из цыплят с трюфелями в бульоне.";
				}
			break;
			
		}
	}
// select END


});