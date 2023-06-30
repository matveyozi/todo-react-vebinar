import { counterReducer } from './counter/counterReducer'
import { productsReducer } from './products/products'
import { todoReducer } from './todo/todoSlice'
import { productsApi } from './productsApi'
import { authReducer } from './auth/slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['access_token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const reducer = {
	todo: todoReducer,
	counter: counterReducer,
	products: productsReducer,
	[productsApi.reducerPath]: productsApi.reducer,
	auth: persistedReducer,
}
