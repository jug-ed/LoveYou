const btn_heart = document.querySelector('.heart-button');
const div_heart = document.querySelector('.main-heart');
const fillScreen = document.getElementById('fillScreen');
const newBlock = document.getElementById('newBlock');
const popup = document.getElementById('popup');
const popup_text = document.getElementById('popup-text');
const main_text = document.getElementById('main-text');

let clickCount = 0;

const heartClkText = ['Нажми еще раз', 'Еще', 'Жми больше', 'Еще чуть-чуть', 'Ты сделала это :)'];

btn_heart.addEventListener('click', () => {
    clickCount++;

    popup_text.textContent = heartClkText[clickCount-1];
    popup.style.opacity = '100%';
    setTimeout(() => {
        popup.style.opacity = '0';
    }, 1500);

    if (clickCount === 5) {
        div_heart.style.opacity = '0';
        div_heart.style.pointEvents = 'none';

        fillScreen.classList.add('active');
        
        main_text.textContent = '❤Люблю тебя❤';
        setTimeout(() => {
            div_heart.style.display = 'none';
            newBlock.classList.add('active');
        }, 1000);
    }
});
