import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyle from './styles/global';

import Context from './context/';

import mockapi from './services/mock-api';

export default function App() {
	const [signMsg, setSignMsg] = useState<any>({});
	const [token, setToken] = useState<any>();
	const [data, setData] = useState<any>([]);
	const [cart, setCart] = useState<any>([]);
	const [categories, setCategories] = useState<any>([]);

	useEffect(() => {
		if(signMsg.msg !== null) {
			setTimeout(function(){
				setSignMsg({
					status: null,
					msg: null
				});
			}, 1000);	
		}
	}, [signMsg]);  

	useEffect(() => {
		if(!data.length) {
	      mockapi.get('/products').then(response => {
	        if(response.data) {
	        	setData(response.data.map((o:any) => {
			        return {
			        	...o,
			        	qti: 0
			        }
				}));
	        }
	      })
		}
		if(!categories.length) {
	      mockapi.get('/categories').then(response => {
	        if(response.data) {
	        	setCategories(response.data);
	        }
	      })	      	
		}
	}, [data, categories]);  		

	return (
		<Context.Provider value={{
			setCategories: setCategories,
			categories,				
			setCart: setCart,
			cart,			
			setData: setData,
			data,				
			setToken: setToken,
			token,			
			signMsg: signMsg,
			setSignMsg					
		}}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
			<GlobalStyle />
		</Context.Provider>
	);
}
