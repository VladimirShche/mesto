const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit');

const togglePopupVisability = function() {
    // popupElement.classList
    popupElement.classList.toggle('popup__is-opened');
};
togglePopupVisability();

popupOpenButtonElement.addEventListener('click', togglePopupVisability);