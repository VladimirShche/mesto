const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//переменная для элементов
const elements = document.querySelector('.elements');
//кнопка добавления
const profileAdd = document.querySelector('.profile__add');
//переменные для инпута

//переменные для отправки формы

let editing = null;

function main() {
	initialCards.forEach((element) => {
		renderItem(element);
	})

	formButton.addEventListener('click', handleSubmit);
}

function renderItem(text) {
	//1. Создавать разметку

	const htmlElement = itemTemplate.content.cloneNode(true);

	//2. Заменять в разметке текст
	htmlElement.querySelector('.item__text').innerText = text;

	//2.5 Навесить события
	setListeners(htmlElement);

	//3. Вставлять разметку в наш dom
	list.appendChild(htmlElement);

}

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
let openPopup = function () {
    popupElement.classList.add('popup_is-opened');
    nameInput.value = nameProf.textContent;
    jobInput.value = jobProf.textContent;
};
let closePopup = function () {
    popupElement.classList.remove('popup_is-opened');
};


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
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