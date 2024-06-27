const scrollController = {
	scrollPosition: 0,

	disabledScroll() {
		scrollController.scrollPosition = window.scrollY;
		document.body.style.cssText = `
            overflow: hidden;
            position: fixed;
            top: -${scrollController.scrollPosition}px;
            width: 100%;
            height: 100%;
        
          `;
		document.documentElement.style.scrollBehavior = 'unset';
	},

	enabledScroll() {
		document.body.style.cssText = ``;
		window.scroll({ top: scrollController.scrollPosition });
		document.documentElement.style.scrollBehavior = '';
	},
};

export default scrollController;
