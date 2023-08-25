import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/searchStringReducer';

const SearchForm = () => {
  const dispatch = useDispatch();
  const initialSearchString = useSelector((state) => state.searchString)
  const [searchString, setSearchString] = useState(initialSearchString)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));
  };
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
