import $ from 'jquery';

class Utils {
	constructor(page) {
		this.page = page;
	}
	
	changeTheme(themeClass) {
		$(this.page).toggleClass(themeClass);
	}
}

export default Utils;