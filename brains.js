/** @format */

window.onload = main()

function main() {
	gsap.registerPlugin(EasePack)
	gsap.registerPlugin(ScrollTrigger)
	gsap.registerPlugin(TextPlugin)
}

function test() {
	console.log('test fun')
}

function toggleDropDownMenu() {
	let overlay = document.querySelector('.flex-mobile-menu-overlay')
	let button = document.querySelector('.flex-navbar-mobilemenu-container')
	let open = overlay.style.height === '100%'

	if (!open) {
		overlay.style.height = '100%'
		button.classList.add('open')
	} else {
		overlay.style.height = '0%'
		button.classList.remove('open')
	}

	//animation
}

/*
.flex-home-text-1 {
	-webkit-animation: slide-in-fwd-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s both;
	animation: slide-in-fwd-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s both;
}
.flex-home-text-2 {
	font-size: 2.5rem;
	font-weight: 500;

	-webkit-animation: slide-in-fwd-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
	animation: slide-in-fwd-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both;
}
.flex-home-text-3 {
	-webkit-animation: slide-in-fwd-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s both;
	animation: slide-in-fwd-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s both;
}
*/
