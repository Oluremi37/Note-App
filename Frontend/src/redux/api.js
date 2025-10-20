import axios from 'axios';

const baseURL = "https://note-app-backend-rust.vercel.app/api";

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('token')) {
		req.headers["Authorization"] = `Bearer ${localStorage.getItem('token')}`;

	}
	return req;
})
export const signInUser = (userData) => API.post("/auth/signin", userData);
export const signUpUser = (userData) => API.post("/auth/signup", userData);

export const listIncomes = () => API.get('/incomes');

export const createIncome = (incomeData) =>
	API.post('/incomes/create', incomeData);

export const deleteIncome = (incomeId) =>
	API.delete(`/incomes/delete/${incomeId}`);

export const ListAllNotes = () => API.get('/notes')

export const createNote = (noteData) => API.post('/notes/create', noteData);

export const deleteNote = (id) => API.delete(`/notes/note/delete/${id}`);