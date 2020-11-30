import React, { useCallback, useContext, useEffect, useState } from 'react';

import Context from '../../context/';

import { Button } from '@material-ui/core';

import { 
	CheckoutForm,
	SidebarTitle,
	CheckoutTable,
	Sidebar,
	Container
} from './styles';

import { 
	Dash,
	FooterText,
	Footer
} from './../Shop/styles';

import Form from '../../components/Form';

const Checkout: React.FC = () => {
	const store = useContext(Context);

	const handleTotal = (key, arr) => {
		return arr.reduce((a, b) => a + (b[key] || 0), 0);
	};	    	

	const checkout = [{
		label: 'Desejo que o sítio entre em contato comigo',
		type: 'radio',
		placeholder: '',
		width: '100%',
		value: 'Desejo que o sítio entre em contato comigo',
		name: 'desejo'
	},{
		label: 'Desejo pagar através do meu cartão de crédito',
		type: 'radio',
		placeholder: '',
		width: '100%',
		value: 'Desejo pagar através do meu cartão de crédito',
		name: 'desejo'
	},{
		type: 'text',
		placeholder: 'Número do Cartão',
		value: '',
		mask: '111.1111.1111.1111',
		width: '100%',
		name: 'card_num'
	},{
		type: 'text',
		placeholder: 'Nome',
		value: '',
		width: '100%',
		name: 'nome'
	},{
		type: 'text',
		placeholder: 'Validade',
		value: '',
		width: '70%',
		mask: '11/11',
		name: 'validade'
	},{
		type: 'text',
		placeholder: 'CVV',
		value: '',
		width: '30%',
		name: 'cvv',
		mask: '111'
	}];	

	const handleForm = (s) => {
		console.log(s);
	}    	

	return (
		<> 
			<Container> 
				<CheckoutTable> 
					<thead>
						<tr>
							<td></td>
							<td>Produto</td>
							<td>Observações</td>
							<td>R$</td>
						</tr>
					</thead>
					<tbody>
						{store.cart.length ? store.cart.map((o:any, index:number) => (
							<tr key={index}>
								<td>{o.qti}</td>
								<td>{o.name}</td>
								<td> 
									{o.brand ? `${o.brand} - ` : ''} 
									{o.packageType ? `${o.packageType} - ` : ''}
									{o.packageOptions.qti ? `${o.packageOptions.qti} - ` : ''}
									{o.packageOptions.weight ? `${o.packageOptions.weight} - ` : ''}
									{o.cert ? `${o.cert}` : ''}
								</td>
								<td>R${parseFloat(o.price).toFixed(2)}</td>
							</tr>
						)) : <tr>
								<td colSpan={4}>Seu carrinho está vazio.</td> 
							</tr>} 	
						<tr>
							<td>{handleTotal('qti', store.cart)}</td>
							<td>Quantidade total</td>
							<td>Valor total</td>
							<td>R$ {parseFloat(handleTotal('price', store.cart)).toFixed(2)}</td>
						</tr>								
					</tbody>	
				</CheckoutTable>
				<Sidebar> 
					<SidebarTitle>Como pretende efetuar o pagamento?</SidebarTitle>
					<CheckoutForm> 
						<Form 
							extraInformation={[
								{
									label: 'Quantidade de itens',
									value: handleTotal('qti', store.cart)
								},
								{
									label: 'Valor total da compra',
									value: `R$ ${parseFloat(handleTotal('price', store.cart)).toFixed(2)}`
								}								
							]}
							buttonLabel="Enviar pedido" 
							handleSubmit={(s) => handleForm(s)}
							id="checkout" 
							formInputs={checkout} />
					</CheckoutForm>
				</Sidebar>
			</Container>
			<Footer> 
				<FooterText>
					<strong>Observações</strong><br/>
					Carne Orgânica (Resfriada no Vácuo ou Congelada) - Vendidas por peça<br/>
					O valor total poderá sofrer alteração devido ao sobrepeso dos itens em kg e ao frete.<br/>	
					Os produtos poderão sofrer alteração de preço sem aviso prévio.	<br/>			
				</FooterText>
			</Footer>			
		</>
	);
};

export default Checkout;
