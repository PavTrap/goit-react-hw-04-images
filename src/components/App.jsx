// import React, { Component } from 'react';
import React, {  useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import css from './styles.module.css';

export const App = () => {
    const [search, setSearch] = useState('');
    const handlSearchSubmit = search => {
      setSearch(search);
  }


    return(
        <div className={css.App}>
          <Searchbar onSubmit={handlSearchSubmit} onPageChange={handlSearchSubmit} />
          <ImageGallery search={search} />
        </div>
    )
}
export default App;
