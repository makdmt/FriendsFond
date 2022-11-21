const cards = document.querySelectorAll('.slider__item');
const sliderIndicators = document.querySelectorAll('.slider__indicator');

// console.log(cards[0]);
// cardsWrapper.style.height = `${cards[0].offsetHeight}px`;
// // cardsWrapper.style.width = `${cards[0].offsetWidth}px`;



function calcShiftFromCardsWidth(cardIndex) {
  let shift = 0;
  for (let i = 0; i < cardIndex; i++) {
    shift += cards[i].offsetWidth;
  }
  return shift;

}



const container = document.querySelector('.slider__items')
let activeCardIndex = 0;
const cardWidth = cards[1].offsetWidth;

const changeCard = (direction) => {

  const numberOfCards = cards.length
  let previosActiveCardIndex = activeCardIndex

  sliderIndicators.forEach(element => element.classList.remove('volunteer-reviews__slider-indicator_active'))

  activeCardIndex += direction === 'next' ? 1 : -1

  if (activeCardIndex > 0 && activeCardIndex < numberOfCards -2) {
    sliderIndicators[1].classList.add('volunteer-reviews__slider-indicator_active');
  }

  if (activeCardIndex === (numberOfCards -1))  activeCardIndex = 0;

  if (activeCardIndex < 0)  activeCardIndex = numberOfCards - 2;

  if (activeCardIndex === 0) {
    sliderIndicators[0].classList.add('volunteer-reviews__slider-indicator_active');
    sliderIndicators[1].dataset.direction = 'next';
  }

  if (activeCardIndex === numberOfCards - 2) {
    sliderIndicators[2].classList.add('volunteer-reviews__slider-indicator_active');
    sliderIndicators[1].dataset.direction = 'previous';
  }


  console.log(activeCardIndex);

  cards[previosActiveCardIndex].classList.remove('volunteer-reviews__slider-item_position_left')
  cards[previosActiveCardIndex].classList.add('volunteer-reviews__slider-item_position_right')
  cards[activeCardIndex].classList.remove('volunteer-reviews__slider-item_position_right')
  cards[activeCardIndex].classList.add('volunteer-reviews__slider-item_position_left')

  container.style.transform = `translateX(-${(cardWidth + 30)* activeCardIndex}px)`


}

const handleButtonClick = ({ target }) => changeCard(target.dataset.direction)
const addButtonClickListener = (button) => button.addEventListener('click', handleButtonClick)
const buttons = document.querySelectorAll('[data-direction]')
buttons.forEach(addButtonClickListener)
