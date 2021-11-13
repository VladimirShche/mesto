// Находим форму в DOM
const formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_description');
const nameProf = document.querySelector('.profile__name');
const jobProf = document.querySelector('.profile__subtitle');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit');


const openPopup = function () {
    popupElement.classList.add('popup_is-opened');
    nameInput.value = nameProf.textContent;
    jobInput.value = jobProf.textContent;
};
const closePopup = function () {
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

const content = document.querySelector('.content');
const cards = document.querySelector('.elements');
const popupOpenAddButtonElement = document.querySelector('.profile__add');
const popupAddElement = document.querySelector('.popup_type_add');
const popupCloseAddButtonElement = popupAddElement.querySelector('.popup__close');
const formAddButtonElement = popupAddElement.querySelector('.popup__submit');
const cardTemplate = document.querySelector('.card_template').content;
const formPlace = document.querySelector('.popup__field_type_place');
const formLink = document.querySelector('.popup__field_type_link');

const openPopupAdd = function () {
    popupAddElement.classList.add('popup_is-opened');

};
const closePopupAdd = function () {
    popupAddElement.classList.remove('popup_is-opened');
};


initialCards.forEach(function (element) {
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.element__text').textContent = element.name;
    cardElement.querySelector('.element__pic').src = element.link;

    cards.append(cardElement)
});

function main() {
	initialCards.forEach((element) => {
		renderItem(element); 
	})

	formAddButtonElement.addEventListener('click', handleSubmit);
}

function addCard(name, link) {
    const htmlElement = cardTemplate.cloneNode(true);

    htmlElement.querySelector('.element__text').innerText = name;
    htmlElement.querySelector('.element__pic').src = link;

    cardTemplate.appendChild(htmlElement);
}

function handleSubmit() {
	//1. взять значение из инпута
	const myPlace = formPlace.value;
	const myLink = formLink.value;

	//2. отрисовать строку с этим текстом
	addCard(myPlace, myLink);
}


formAddButtonElement.addEventListener('submit', formSubmitHandler);
popupOpenAddButtonElement.addEventListener('click', openPopupAdd);
popupCloseAddButtonElement.addEventListener('click', closePopupAdd);

