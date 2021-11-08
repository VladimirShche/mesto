// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_description');
let nameProf = document.querySelector('.profile__name');
let jobProf = document.querySelector('.profile__subtitle');
let popupElement = document.querySelector('.popup');
let popupCloseButtonElement = popupElement.querySelector('.popup__close');
let popupOpenButtonElement = document.querySelector('.profile__edit');
let openPopup = function() {
    popupElement.classList.add('popup_is-opened');
    nameInput.value = nameProf.textContent;
    jobInput.value = jobProf.textContent;
};
let closePopup = function() {
    popupElement.classList.remove('popup_is-opened');
};


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProf.textContent = nameInput.value;
    jobProf.textContent = jobInput.value;
    closePopup();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);