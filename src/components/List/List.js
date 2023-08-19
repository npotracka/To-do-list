import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
  
    return (
      <div>
        <header className={styles.header}>
          <h2 className={styles.title}>hings to do<span>soon</span></h2>
        </header>
        <p className={styles.description}>Interesting things I want to check out</p>
        <section className={styles.columns}>
          <Column key="1" title="Books" icon="book" />
          <Column key="2" title="Movies" icon="film" />
          <Column key="3" title="Games" icon="gamepad" />
        </section>
      </div>
    );
  };

export default List;