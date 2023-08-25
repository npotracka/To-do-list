import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/cardsReducer';
import PageTitle from './../PageTitle/PageTitle';

const Favorite = () => {
  const cards = useSelector(getFavoriteCard);
  if (!cards.length)
    return (
      <div className={styles.no_favorite_cards}>
        You don't have favorite cards
      </div>
    );
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
            id={card.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;