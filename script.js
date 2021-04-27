const closeModal = document.querySelector('.btn--close-modal');
const modalWindow = document.querySelector('.modal__window');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.home__btn');

closeModal.addEventListener('click', function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
})

openModal.forEach(elements => elements.addEventListener('click', function () {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
}))

overlay.addEventListener('click', function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
})