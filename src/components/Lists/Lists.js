import styles from './Lists.module.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllLists } from '../../redux/listsReducer';
import ListForm from '../ListForm/ListForm'

const Lists = props => {
  const lists = useSelector(state => getAllLists(state));

return (
  <section className={styles.lists}>
    <h2 className={styles.heading}>Browse lists</h2>
    {lists.map(list => (
      <Link to={'/list/' + list.id} className={styles.listLink}>
        <h3>{list.title}</h3>
        <p>{list.description}</p>
      </Link>
    ))}
    <ListForm id={props.id} />
  </section>
);
};

export default Lists;