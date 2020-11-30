import React, { useCallback, useContext, useEffect } from 'react';
import { Container } from './styles';

import {
  PageTitle
} from '../../layouts/styles';

import Form from '../../components/Form';

import {
	Column
} from './styles';

import Context from '../../context/';

import {
	Route as ReactDOMRoute,
	RouteProps as ReactDOMRouteProps,
	useHistory,
} from 'react-router-dom';

import mockapi from '../../services/mock-api';

const SignIn: React.FC = () => {
	const store = useContext(Context);
	const history = useHistory();

	const login = [{
		label: '',
		type: 'text',
		placeholder: '',
		value: '',
		width: '100%',
		name: 'cod_cliente'
	}];

	const cadastro = [{
		label: 'Nome',
		type: 'text',
		placeholder: '',
		value: '',
		width: '100%',
		name: 'nome'
	},{
		label: 'Endereço',
		type: 'text',
		placeholder: '',
		value: '',
		width: '100%',
		name: 'endereco'
	},{
		label: 'Telefone',
		type: 'text',
		placeholder: '',
		value: '',
		mask: '(11) 1 1111-1111',
		width: '50%',
		name: 'telefone'
	},{
		label: 'E-mail',
		type: 'email',
		placeholder: '',
		value: '',
		width: '50%',
		name: 'email'
	},{
		label: 'CPF',
		type: 'tel',
		placeholder: '',
		value: '',
		mask: '111.111.111-11',
		width: '',
		name: 'cpf'
	}];	

	const handleForm = (s) => {
		if(s.id==='login') {
	      mockapi.get('/users').then(response => {
	        if(response.data) {
	        	let user = response.data.filter((o:any) => {
		            return o.cod_cliente === s.cod_cliente;
		        });

		        let hash = require('object-hash');

		        if(user.length) {
					let auth = user.map((o:any) => {
						return {
						  ...user[0],
						  hash: hash(user[0])
						}
					})[0];

					localStorage.setItem('token', hash(auth));
					store.setToken(localStorage.getItem('token'));

					history.push("/shop");
		        }

	        	store.setSignMsg({
	        		status: !user.length ? false : null,
	        		msg: !user.length ? 'Nenhum usuário encontrado' : null
	        	});	
	        }
	      })	
		}
	}    	

	return (
		<>
			<Container>
				<Column> 
					<Form 
						errMsg={store.signMsg.msg}
						buttonLabel="Entrar" 
						handleSubmit={(s) => handleForm(s)}
						id="login" 
						title="Já possui cadastro?" 
						subtitle="Então entre com seu código de cliente:" 
						formInputs={login} />
				</Column>
				<Column> 
					<Form handleSubmit={(s) => handleForm(s)} buttonLabel="Cadastre-se" id="register" title="Ainda não possui cadastro?" subtitle="Entre com seus dados. É rápido!" formInputs={cadastro} /> 
				</Column>				
			</Container>
		</>  
	);
};

export default SignIn;