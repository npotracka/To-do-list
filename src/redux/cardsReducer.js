import shortid from 'shortid';
import strContains from '../utils/strContains.js';

//selectors

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllCards = (state) => state.cards;
export const getCardById = ({ cards }, cardId) => cards.filter(card => card.id === cardId)[0];
export const getFavoriteCard = (state) =>
  state.cards.filter((card) => card.isFavorite === true);

// action creators
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

export const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  }
}