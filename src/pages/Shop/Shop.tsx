import React, { useCallback, useContext, useEffect, useState } from 'react';

import {
	Route as ReactDOMRoute,
	RouteProps as ReactDOMRouteProps,
	useHistory,
} from 'react-router-dom';

import Context from '../../context/';

import { Button } from '@material-ui/core';

import { 
	Dash,
	FooterText,
	Footer,
	Filter,
	ProductListItem,
	ProductList
} from './styles';

import {
  Wrapper
} from '../../layouts/styles';

import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import CategoryFilter from '../../components/CategoryFilter';

const Shop: React.FC = () => {
	const history = useHistory();
	const store = useContext(Context);
	const [filter, setFilter] = useState<any>([]);

	const handleFilter = (o: any) => {
		setFilter(o);
	};		

	const handleSubmit = () => {
		history.push("/checkout");
	};	

	return (
		<>
			<Filter>
                <SearchBar 
                  onChange={(s) => handleFilter(s)}
                  filter={['name']}
                  placeholder="Busca por produto..." />		
                <CategoryFilter onChange={(s) => handleFilter(s)} />	
			</Filter>
			<ProductList>
				{filter.map((o:any, index:number) => (
					<ProductListItem key={index}>  
							<Card data={o} />
					</ProductListItem>
				))} 
			</ProductList>		
			<Footer> 
				<Dash />
				<Button className="btn" onClick={(s) => handleSubmit()}>Conferir e enviar pedido</Button>
				<Dash />
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

export default Shop;
