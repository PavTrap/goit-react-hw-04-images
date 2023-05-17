import axios from 'axios';

export const getImagesWithQuery = async (search, page) => {
	const KEY = '34955706-ef799ceae77e48745377abfe9';

	const response = await axios.get(
		`https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
	)

	return response.data;
};
