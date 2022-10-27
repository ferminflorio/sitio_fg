const modal_container = document.getElementById("modal_container");
const modals_content = document.querySelectorAll(".slide_item");
const SHOW = "show";
const ACTIVE_INDEX = "active-index";
let activeIndex = 0;

function openModal(index) {
	activeIndex = index;
	const previousActiveModal = modal_container.querySelector(
		`.${ACTIVE_INDEX}`
	);

	if (previousActiveModal) {
		previousActiveModal.classList.remove(ACTIVE_INDEX);
	}

	//if (!modals_content[index]) return;

	modals_content[index].classList.add(ACTIVE_INDEX);
	console.log(index);
	modal_container.classList.add(SHOW);
	document.body.style.overflow = "hidden";
}

function closeModal(index) {
	console.log(index);
	modal_container.classList.remove(SHOW);
	document.body.style.overflow = "initial";
}

function switchIndex(switchIndex) {
	const currentActiveModal = document.querySelector(`.${ACTIVE_INDEX}`);
	currentActiveModal.classList.remove(ACTIVE_INDEX);
	modals_content[switchIndex].classList.add(ACTIVE_INDEX);
}

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		modal_container.classList.remove(SHOW);
		document.body.style.overflow = "initial";
	}
});

//FALTA ENLAZAR LA FUNCION switchIndex//

document.onkeydown = function (e) {
	switch (e.key) {
		case "ArrowLeft":
			// ocultar el que esta Activo
			modals_content[activeIndex].classList.remove(ACTIVE_INDEX);
			if (activeIndex === 0) {
				modals_content[modals_content.length - 1].classList.add(
					ACTIVE_INDEX
				);
				activeIndex = modals_content.length - 1;
			} else {
				modals_content[activeIndex - 1].classList.add(ACTIVE_INDEX);
				activeIndex = activeIndex - 1;
			}
			console.log("previous");
			break;
		case "ArrowRight":
			modals_content[activeIndex].classList.remove(ACTIVE_INDEX);
			if (activeIndex === modals_content.length - 1) {
				modals_content[0].classList.add(ACTIVE_INDEX);
				activeIndex = 0;
			} else {
				modals_content[activeIndex + 1].classList.add(ACTIVE_INDEX);
				activeIndex = activeIndex + 1;
			}
			console.log("next");
	}
};
