"use strict";

// fetch the items from the JSON file
function loadItems() {
	return fetch("data/data.json")
		.then((res) => res.json())
		.then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
	const container = document.querySelector(".items");
	container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// Create HTML list item from the given data item
function createHTMLString(item) {
	return `
	<li class="item">
		<img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
		<span class="item__desc">${item.gender}, ${item.size}</span>
	</li>
	`;
}

// handle button click
function onButtonClick(event, items) {
	const target = event.target;
	const key = target.dataset.key;
	const value = target.dataset.value;

	if (key == null || value == null) {
		return;
	}

	const filtered = items.filter((item) => item[key] === value);
	displayItems(filtered);
}

function updateItems(items, key, value) {
	items.forEach((item) => {
		if (item.dataset[key] === value) {
			item.classList.remove("invisible");
		} else {
			item.classList.add("invisible");
		}
	});
}

function setEventListeners(items) {
	const logo = document.querySelector(".logo");
	const buttons = document.querySelector(".buttons");
	logo.addEventListener("click", () => displayItems(items));
	buttons.addEventListener("click", () => onButtonClick(event, items));
}

// Main
loadItems()
	.then((items) => {
		displayItems(items);
		setEventListeners(items);
	})
	.catch(console.log);
