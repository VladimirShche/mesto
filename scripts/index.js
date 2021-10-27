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

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__description');
let nameProf = document.querySelector('.profile__name');
let jobProf = document.querySelector('.profile__subtitle');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProf.textContent = nameInput.value;
    jobProf.textContent = jobInput.value;
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', closePopup);