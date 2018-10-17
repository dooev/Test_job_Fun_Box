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
		if (item.classList.contains('products__background_defaultHover') || item.classList.contains('products__background_default') ) {
			item.classList.remove('products__background_defaultHover');
			item.classList.remove('products__background_default');
			item.classList.add('products__background_selectedHover');
			circle.classList.remove('products__text_weight_default');
			circle.classList.remove('products__text_weight_defaultHover');
			circle.classList.add('products__text_weight_selectedHover');
		} else  {
			item.classList.add('products__background_defaultHover');
			item.classList.remove('products__background_selectedHover');
			item.classList.remove('products__background_selected');
			circle.classList.add('products__text_weight_defaultHover');
			circle.classList.remove('products__text_weight_selectedHover');
			circle.classList.remove('products__text_weight_selected');
			item.classList.remove('products__background_selectedHover');

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

// hover START
	/* Задане: Состояние наведения применяется к ВЫБРАННОЙ упаковке не сразу, 
	а после того, как курсор ушел с нее после первоначального выбора.
	К упаковке в состоянии default состояние наведения применяется как обычно.*/

	let whereNow = null; // где сейчас курсор

	// событие при наведении мыши
	products__wrapper.onmouseover = function(event) {
		let target = event.target;

	  	while (target != this) {
	  		if (whereNow == target) return; // если курсор на той же карточке, игнорируем
	    	switch(target.id) {
				case "itemFua":
				if (target.classList.contains('products__background_selectedHover') ) {
					hoverSelectedOff(itemFua, circleFua)
				} else {
					hoverChanges(itemFua, circleFua);
					whereNow = target;
				}
				break;
				
				case "itemFish":
					hoverChanges(itemFish, circleFish);
					whereNow = target;
				break;

				case "itemChickan":
					hoverChanges(itemChickan, circleChickan);
					whereNow = target;
				break;
			}
		  target = target.parentNode;
		}
	};

	// событие при уходе мыши
	products__wrapper.onmouseout = function(event) {
		if (!whereNow) return;

		let relatedTarget = event.relatedTarget;
		if (relatedTarget) {
			while (relatedTarget){
				if (relatedTarget == whereNow) return;
				relatedTarget = relatedTarget.parentNode;
			}
		}
		switch(whereNow.id) {
			case "itemFua":
				hoverChanges(itemFua, circleFua);
			break;
			
			case "itemFish":
				hoverChanges(itemFish, circleFish);
			break;

			case "itemChickan":
				hoverChanges(itemChickan, circleChickan);
			break;
		}
		whereNow = null;
	};

	// фильтр состояний, вызов необходимого порядка действий
	function hoverChanges (item, circle) { 
		if (item.classList.contains('products__background_default') ) {
			hoverDefaultOn (item, circle);
			return;
		}
		if (item.classList.contains('products__background_defaultHover') ) {
			hoverDefaultOff (item, circle);
		} 
		if (item.classList.contains('products__background_selected') ) {
			hoverSelectedOn (item, circle);
			return;
		}
		if (item.classList.contains('products__background_selectedHover') ) {
			hoverSelectedOff (item, circle);
		}
	}
	
	function hoverDefaultOn (item, circle) {
		item.classList.remove('products__background_default');
		item.classList.add('products__background_defaultHover');
		circle.classList.remove('products__text_weight_default');
		circle.classList.add('products__text_weight_defaultHover');
	}
	function hoverSelectedOn (item, circle) {
		item.classList.remove('products__background_selected');
		item.classList.add('products__background_selectedHover');
		circle.classList.remove('products__text_weight_selected');
		circle.classList.add('products__text_weight_selectedHover');
	}
		function hoverDefaultOff (item, circle) {
		item.classList.add('products__background_default');
		item.classList.remove('products__background_defaultHover');
		circle.classList.add('products__text_weight_default');
		circle.classList.remove('products__text_weight_defaultHover');
	}
	function hoverSelectedOff (item, circle) {
		item.classList.add('products__background_selected');
		item.classList.remove('products__background_selectedHover');
		circle.classList.add('products__text_weight_selected');
		circle.classList.remove('products__text_weight_selectedHover');
	}
// hover END

});