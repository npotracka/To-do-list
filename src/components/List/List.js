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
          <Column>
          <article>
            <span className="fa fa-book" />
            <h2>Books</h2>
          </article>
          </Column>
          <Column>
          <article>
            <span className="fa fa-film" />
            <h2>Movies</h2>
          </article>
          </Column>
          <Column>
          <article>
            <span className="fa fa-gamepad" />
            <h2>Games</h2>
          </article>
          </Column>
          
        </section>
      </div>
    );
  };

export default List;