import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsReducer';



const Card = ({ title, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const dispatch = useDispatch();
  
  const clickHandler = () => {
    setIsFavorite(!isFavorite);
    dispatch(toggleCardFavorite(id));
  };
  return (
    <li className={styles.card}>
      {title}
      <button onClick={clickHandler} className={styles.star}>
      <i className={clsx(isFavorite && styles.favorite, 'fa fa-star')}></i>
      </button>
    </li>
  );
};

export default Card;