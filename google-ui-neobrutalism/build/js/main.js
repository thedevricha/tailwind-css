const initApp = () => {
    const searchBtn = document.getElementById('search-btn')
    const searchModal = document.getElementById('search-modal')
    const closeBtn = document.getElementById('close-btn')
    const toggleMenu = () => {
        searchModal.classList.toggle('hidden')
        searchModal.classList.toggle('flex')
    }

    searchBtn.addEventListener('click', toggleMenu)
    closeBtn.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)