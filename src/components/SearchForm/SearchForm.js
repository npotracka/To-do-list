import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getSearchString } from '../../redux/searchStringReducer';
import { searchString } from '../../redux/searchStringReducer';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState(getSearchString)

  useEffect(() => {
    dispatch(getSearchString(searchString));
  }, [dispatch, searchString]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchString(searchString));

  }

    return (
      <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search...'
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
            <Button>
              <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  

  export default SearchForm;
