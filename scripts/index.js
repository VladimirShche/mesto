const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit');

const closePopupByClickOverlay = function(event) {
    console.log(event.target, event.currentTarget);
    if (event.target !== event.currentTarget) {
        return;
    }

    closePopup();
};

const openPopup = function() {
    popupElement.classList.add('popup__is-opened');
};

const closePopup = function() {
    popupElement.classList.remove('popup__is-opened');
};

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOverlay);

let nameInput = document.querySelector('.popup__name');
let nameProf = document.querySelector('.profile__name');
let jobInput = document.querySelector('.popup__description');
let jobProf = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameProf.textContent = nameInput.value;
    jobProf.textContent = jobProf.value;
};

let formElement = document.querySelector('.popup__submit');

formElement.addEventListener('submit', formSubmitHandler);