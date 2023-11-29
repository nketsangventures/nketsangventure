import '../../src/style/index.scss';

const menuBackdrop = document.getElementById('menu-backdrop');
const openBtn = document.getElementById("open-menu");
const titleEL = document.querySelector('.title-wrap')


openBtn.addEventListener('click', () => {
	menuBackdrop.classList.toggle('visible');
	openBtn.classList.toggle('menu-animated')
	openBtn.classList.remove('visible');
  titleEL.classList.toggle('not-visible')

	if (menuBackdrop.classList.contains('visible')) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
});

document.body.addEventListener('click', (event) => {
	if (event.target == menuBackdrop) {
		menuBackdrop.classList.remove('visible');
		openBtn.classList.remove('menu-animated')
		openBtn.classList.add('visible');
		document.body.style.overflow = 'auto';
    titleEL.classList.remove('not-visible');
	}
});

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		menuBackdrop.classList.remove('visible');
		openBtn.classList.add('visible');
		openBtn.classList.remove('menu-animated')
		document.body.style.overflow = 'auto';
    titleEL.classList.remove('not-visible');
	})
});


function calculateImageHeight() {
  const screenWidth = window.innerWidth;

  let imageHeight = screenWidth / 1.152;
  if (screenWidth < 1162) {
    imageHeight = 1015;
  }

  return imageHeight;
}

function setImageHeight() {
  const imageElement = document.querySelector('.filter-block');

  if (imageElement) {
    let height = calculateImageHeight();

    imageElement.style.height = height + 'px';
    imageElement.style.width = height + 'px';
  }
}

window.onload = function () {
  setImageHeight();
}

window.addEventListener('resize', function() {
  setImageHeight();
});


const dialog = document.querySelector("dialog");
const showButton = document.querySelectorAll(".open-modal-btn");
const closeButton = document.querySelector(".close-modal-btn");
const backdrop = document.querySelector('.backdrop')


// "Show the dialog" button opens the dialog modally
showButton.forEach(btn => {
  btn.addEventListener("click", () => {
    dialog.showModal();
    backdrop.classList.add('visible-modal')
    document.body.style.overflow = 'hidden';
  });
})

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
  backdrop.classList.remove('visible-modal')
  document.body.style.overflow = 'auto';
});

backdrop.addEventListener('click', () => {
  dialog.close();
  backdrop.classList.remove('visible-modal')
  document.body.style.overflow = 'auto';
})

















