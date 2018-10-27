import $ from 'jquery';
import 'slick-carousel';

class Slider {
	constructor(slider, options = {}) {
		this.slider = slider;
		this.options = options;
	}

	init() {
		console.log(this.options.appendArrows);
		$(this.slider).on('afterChange', (event, slick, currentSlide) => {
			this.checkSlide(currentSlide, slick.slideCount);
		});
		$(this.slider).slick(this.options);
	}

	checkSlide(slide, maxSlides) {
		const prev = this.options.appendArrows.find('.slick-prev');
		const next = this.options.appendArrows.find('.slick-next');
		console.log(slide, maxSlides, next, prev);
		if(slide === 0) {
			prev.addClass('questions__btn--hidden');
		} else {
			prev.removeClass('questions__btn--hidden');
		}
		if(slide === maxSlides - 1) {
			next.addClass('questions__btn--hidden');
		} else {
			next.removeClass('questions__btn--hidden');
		}
	}
}

export default Slider;