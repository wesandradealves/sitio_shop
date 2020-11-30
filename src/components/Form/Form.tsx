import React, { useEffect, useContext, useState, InputHTMLAttributes } from 'react';

import {
	Footer,
	ErrMsg,
	Container,
	FormGroup,
	Label
} from './styles';

import { 
	Dash,
} from '../../pages/Shop/styles';

import {
  Subtitle,
  PageTitle
} from '../../layouts/styles';

import { Button, TextField } from '@material-ui/core';

import MaskedInput from 'react-maskedinput';

import Context from '../../context/';

interface IForm extends InputHTMLAttributes<HTMLInputElement> {
  formInputs: any;
  title?: string;
  subtitle?: string;
  id?: any;
  buttonLabel: string;
  errMsg?: any;
  extraInformation?: any;
  handleSubmit: any;
}

export const Form: React.FC<IForm> = ({ id, formInputs, title, subtitle, buttonLabel, errMsg, handleSubmit, extraInformation }) => {
	const store = useContext(Context);
	const [state, setState] = useState({id: id});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setState(state => ({ ...state, [name]: value }));
	}    

	return (
		<> 
			{title ? <PageTitle color="#575d30">{title} <Subtitle>{subtitle}</Subtitle></PageTitle> : null}
			<Container>
				{formInputs.map((o:any, i:number) => (
					<FormGroup className={`type--${o.type}`} flex={o.width} key={i}> 
						{o.label ? <Label>{o.label}</Label> : null}
						{o.mask ? <MaskedInput mask={o.mask ? o.mask : ''} value={o.value} name={o.name} onChange={(e) => handleChange(e)} type={o.type} placeholder={o.placeholder} /> 
							: <input value={o.value} name={o.name} onChange={(e) => handleChange(e)} type={o.type} placeholder={o.placeholder} />}
					</FormGroup>
				))}	
				{extraInformation.length ? <Footer> 
					<tbody>
						<tr>
							<td colSpan={2}><Dash /></td> 
						</tr>
						{extraInformation.map((o:any, index:number) => (
							<tr key={index}>
								<td>{o.label}</td>
								<td>{o.value}</td>
							</tr>
						))} 		
						<tr>
							<td colSpan={2}><Dash /></td> 
						</tr>	
					</tbody>
				</Footer> : null}
				<FormGroup> 
					<Button onClick={e => handleSubmit(state)}>{buttonLabel}</Button>
					{errMsg !== null ? <ErrMsg>{errMsg}</ErrMsg> : null}
				</FormGroup>
			</Container>
		</>
	);
};
