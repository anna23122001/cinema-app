export const BASE_URL = 'http://localhost:5000/api';

//  for slices

export const setError = (state, { payload }) => {
    state.error = payload;
    state.status = 'rejected';
}
export const setStatus = (state) => {
    state.error = null;
    state.status = 'pending';
}
 
export const emptyMovie = {
			title: '',
			relise_year: '',
			studio:'',
			poster:''
}

export const emptyActor = {
			full_name: '',
			birth_year: '',
			death_year: '',
			nationality: '',
			poster: ''
}

export const emptyDirector = {
			full_name: '',
			birth_year: '',
			death_year: '',
			nationality: '',
			poster: ''
}

export const emptyStudio = {
			title: '',
			year_foundation: '',
			location: '',
			poster: ''
}