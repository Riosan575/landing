const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
	header.classList.toggle('sticky');
}

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
}

const inicio = document.querySelector('.inicio');
const nosotros = document.querySelector('.nosotros');
const valo = document.querySelector('.valo');
const compro = document.querySelector('.compro');
const serv = document.querySelector('.serv');
const contact = document.querySelector('.contact');
const tops = document.querySelector('.top');

tops.onclick = () => {
	inicio.classList.toggle('active');
	nosotros.classList.remove('active');
	valo.classList.remove('active');
	compro.classList.remove('active');
	serv.classList.remove('active');
	contact.classList.remove('active');
}

inicio.onclick = () => {
	inicio.classList.toggle('active');
	nosotros.classList.remove('active');
	valo.classList.remove('active');
	compro.classList.remove('active');
	serv.classList.remove('active');
	contact.classList.remove('active');
}

nosotros.onclick = () => {
	inicio.classList.remove('active');
	nosotros.classList.toggle('active');
	valo.classList.remove('active');
	compro.classList.remove('active');
	serv.classList.remove('active');
	contact.classList.remove('active');
}

valo.onclick = () => {
	inicio.classList.remove('active');
	nosotros.classList.remove('active');
	valo.classList.toggle('active');
	compro.classList.remove('active');
	serv.classList.remove('active');
	contact.classList.remove('active');
}

compro.onclick = () => {
	inicio.classList.remove('active');
	nosotros.classList.remove('active');
	valo.classList.remove('active');
	compro.classList.toggle('active');
	serv.classList.remove('active');
	contact.classList.remove('active');
}

serv.onclick = () => {
	inicio.classList.remove('active');
	nosotros.classList.remove('active');
	valo.classList.remove('active');
	compro.classList.remove('active');
	serv.classList.toggle('active');
	contact.classList.remove('active');
}

contact.onclick = () => {
	inicio.classList.remove('active');
	nosotros.classList.remove('active');
	valo.classList.remove('active');
	compro.classList.remove('active');
	serv.classList.remove('active');
	contact.classList.toggle('active');
}