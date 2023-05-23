// import React, { Component } from 'react';
import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import css from './styles.module.css';



const Searchbar = ({onSubmit}) => {
	const [search, setSearch] = useState('');

	const handlSearchChange = event => {
		setSearch(event.currentTarget.value.toLowerCase())
	}

	const handlSubmit = event => {
		event.preventDefault();
		if (search.trim() === ''){
			alert('Enter a request');
			return;
		}
		onSubmit(search);
		setSearch('')
	};
		return (
		  <header className={css.Searchbar}>
			 <form onSubmit={handlSubmit} className={css.SearchForm}>
				<button type="submit" className={css.SearchFormButton}>
				  <span className={css.SearchFormButtonLabel}><ImSearch /></span>
				</button>
  
				<input
				  className={css.SearchFormInput}
				  type="text"
				  name="request"
				  value={search}
				  onChange={handlSearchChange}
				  placeholder="Search images and photos"
				/>
			 </form>
		  </header>
		);
}

export default Searchbar;
































// class Searchbar extends Component{
// 	state = {
// 		search: '',
// 	};

// 	handlSearchChange = event => {
// 		this.setState({ search: event.currentTarget.value.toLowerCase() })
// 	}
// 	handlSubmit = event => {
// 		event.preventDefault();
// 		if (this.state.search.trim() === ''){
// 			alert('Enter a request');
// 			return;
// 		}
// 		this.props.onSubmit(this.state.search);
// 		this.setState({ search: '' });
// 	};

	
// 	render() {
// 		return (
// 		  <header className={css.Searchbar}>
// 			 <form onSubmit={this.handlSubmit} className={css.SearchForm}>
// 				<button type="submit" className={css.SearchFormButton}>
// 				  <span className={css.SearchFormButtonLabel}><ImSearch /></span>
// 				</button>
  
// 				<input
// 				  className={css.SearchFormInput}
// 				  type="text"
// 				  name="request"
// 				  value={this.state.search}
// 				  onChange={this.handlSearchChange}
// 				  placeholder="Search images and photos"
// 				/>
// 			 </form>
// 		  </header>
// 		);
// 	 }
// }

// export default Searchbar;