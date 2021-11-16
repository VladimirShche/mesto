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

const list = document.querySelector('.elements');
const itemTemplate = document.querySelector('.card_template');
const cardPopupElement = document.querySelector('.popup_type_add');
const addFormElement = cardPopupElement.querySelector('.popup__form');
const popupFormCloseElement = cardPopupElement.querySelector('.popup__close');
const popupFormOpenElement = document.querySelector('.profile__add');

const titleInput = addFormElement.querySelector('.popup__field_type_place');
const linkInput = addFormElement.querySelector('.popup__field_type_link');
const addFormElementButton = addFormElement.querySelector('.popup__submit');


const openPopupAdd = function () {
    cardPopupElement.classList.add('popup_is-opened'); // открытие попапа add

};
const closePopupAdd = function () {
    cardPopupElement.classList.remove('popup_is-opened');  // закрытие попапа add
};


function render() {
    for (let i = 0; i < initialCards.length; i = i + 1) {
        const element = initialCards[i];
        renderItem(element);
    }

};
// 
function renderItem(element) {
    const htmlElement = itemTemplate.content.cloneNode(true);

    htmlElement.querySelector('.element__text').textContent = element.name;
    htmlElement.querySelector('.element__pic').src = element.link;

    list.prepend(htmlElement);
};

function Submit(evt) {
    evt.preventDefault();
    const myValueTitle = titleInput.value;
    const myValueLink = linkInput.value;

    renderItem(myValueTitle, myValueLink);
    closePopupAdd();
};

addFormElement.addEventListener('submit', Submit);

render();

popupFormOpenElement.addEventListener('click', openPopupAdd);
popupFormCloseElement.addEventListener('click', closePopupAdd);
