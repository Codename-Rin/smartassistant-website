import $ from 'jquery';
import Slider from './js/slider';
import Utils from './js/utils';

const productSliderOpts = {
	arrows: true,
	dots: false,
	appendArrows: $('.questions__nav'),
	prevArrow: '<button type="button" class="slick-prev questions__btn--hidden">Zuruck</button>',
	nextArrow: '<button type="button" class="slick-next">Weiter</button>'
}

const productSlider = new Slider('#product-slider', productSliderOpts);
const utilities = new Utils('.page');
const themeButton = $('#change-theme');

productSlider.init();
themeButton.on('click', () => utilities.changeTheme('content--green'));