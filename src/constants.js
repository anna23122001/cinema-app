export const BASE_URL = 'http://localhost:5000';

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
			title: "",
			producers: [""],
			stars: [""],
			companies: [""],
			poster: ""
}

export const emptyActor = {
			movies: [""],
			fullName: "",
			birthYear: "",
			nationality: "",
			img: ""
}
