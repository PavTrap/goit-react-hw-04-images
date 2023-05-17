import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import css from './styles.module.css';

export class App extends Component {
  state = {
    search: '',
    showModal: false
  };

  handlSearchSubmit = search => {
    this.setState({ search: search, images: [], page: 1 });
  };

  render() {
    const { search } = this.state;
    return(
        <div className={css.App}>
          <Searchbar onSubmit={this.handlSearchSubmit} />
          <ImageGallery search={search} />
        </div>
    )
  }
}
