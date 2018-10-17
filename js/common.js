window.addEventListener('DOMContentLoaded', function() {

	let products__wrapper = document.querySelector('.products__wrapper'),
		 products__itemS = document.querySelectorAll('.products__background'),
		 links = products__wrapper.querySelectorAll('a'),
		 catS = products__wrapper.querySelectorAll('img'),
		 products__textS = document.querySelectorAll('.products__text'),
		 products__textS_titleS  = document.querySelectorAll('.products__text_title'),
		 products__textS_subtitleS  = document.querySelectorAll('.products__text_subtitle'),
		 // products_weight_circle = document.querySelectorAll('.products__text_weight'),
		 products__text_down = document.querySelectorAll('.products__text_down'),
		 itemFua = document.querySelector('#itemFua'),
		 itemFish = document.querySelector('#itemFish'),
		 itemChickan = document.querySelector('#itemChickan'),
		 circleS = document.querySelectorAll('.products__text_weight'),
		 circleFua = document.querySelector('#circleFua'),
		 circleFish = document.querySelector('#circleFish'),
		 circleChickan = document.querySelector('#circleChickan'),
		 textSDown = document.querySelectorAll('.products__text_down'),
		 textDownFua = document.querySelector('#textDownFua'),
		 textDownFish = document.querySelector('#textDownFish'),
		 textDownChickan = document.querySelector('#textDownChickan');


// select START
	products__wrapper.addEventListener('click', function(event) {
		let target = event.target;
		event.preventDefault(); // отмена перехода по ссылке
		while (target != this && target != null) {
			if (!target.classList.contains('products__background_disabled')) {
				switch(target.id) {
					case "itemFua":
					case "buyFua":
						select (itemFua, circleFua);
						textDownFua.classList.toggle('products__text_down_default');
						textDownFua.classList.toggle('products__text_down_selected');
						downText ("itemFua");
					break;
					
					case "itemFish":
					case "buyFish":
						select (itemFish, circleFish);
						textDownFish.classList.toggle('products__text_down_default');
						textDownFish.classList.toggle('products__text_down_selected');
						downText ("itemFish");
					break;

					case "itemChickan":
					case "buyChickan":
						select (itemChickan, circleChickan);
						textDownChickan.classList.toggle('products__text_down_default');
						textDownChickan.classList.toggle('products__text_down_selected');
						downText ("itemChickan");

					break;
				}
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

// disabled START
	function disabled (item) {
		item.classList.add('products__background_disabled');
		for (let i = 0; i < products__itemS.length; i++) {
			if (products__itemS[i].classList.contains('products__background_disabled') ) {
				products__textS[i].style.color = "#b3b3b3";
				products__textS_titleS[i].style.color = "#b3b3b3";
				products__textS_subtitleS[i].style.color = "#b3b3b3";
				circleS[i].classList.add('products__text_weight_disabled');
				circleS[i].classList.remove('products__text_weight_default');
				circleS[i].classList.remove('products__text_weight_selected');
				catS[i].setAttribute('src', 'img/products/catDisabled.png');
				if (i === 0) {
					textDownFua.classList.add('products__text_down_disabled');
					textDownFua.innerHTML = "Печалька, с фуа-гра закончился.";
				} else if (i === 1) {
					textDownFish.classList.add('products__text_down_disabled');
					textDownFish.innerHTML = "Печалька, с рыбкой закончился.";
				} else if (i === 2) {
					textDownChickan.classList.add('products__text_down_disabled');
					textDownChickan.innerHTML = "Печалька, с курой закончился.";
				}
			}
		}
	}
	disabled(itemChickan);
// disabled END





});