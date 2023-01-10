"use strict";

const colorBtn = document.querySelector(".color__btn");
const detail = document.querySelectorAll(".detail");
const clothes = document.querySelector(".clothes");

window.addEventListener("load", () => {
	detail.classList.add("active");
});

colorBtn.addEventListener("click", (e) => {
	const filter = e.target.dataset.filter;
	if (filter == null) {
		return;
	}

	detail.forEach((btn) => {
		if (filter === btn.dataset.type) {
			btn.classList.remove("active");
		} else {
			btn.classList.add("active");
		}
	});
});

clothes.addEventListener("click", (e) => {
	const options = e.target.dataset.options;
	if (options == null) {
		return;
	}

	detail.forEach((btn) => {
		if (options === btn.dataset.option) {
			btn.classList.remove("active");
		} else {
			btn.classList.add("active");
		}
	});
});
