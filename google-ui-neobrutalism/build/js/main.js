const initApp = () => {
	const searchBtn = document.getElementById("search-btn");
	const searchModal = document.getElementById("search-modal");
	const closeBtn = document.getElementById("close-btn");
	
	const toggleMenu = () => {
		searchModal.classList.toggle("hidden");
		searchModal.classList.toggle("flex");
		document.getElementById('search').value = "";
	};

	searchBtn.addEventListener("click", toggleMenu);
	closeBtn.addEventListener("click", toggleMenu);
};

const changeMode = () => {
	const element = document.getElementById("root");
	if (element.classList.contains("dark")) {
		element.classList.remove("dark");
	} else {
		element.classList.add("dark");
	}
};

document.addEventListener("DOMContentLoaded", initApp);
