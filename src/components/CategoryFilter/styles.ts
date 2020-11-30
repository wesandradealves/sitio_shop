import styled, { css } from 'styled-components';

interface IFilter {
}

export const Container = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	background: white;
	border: 2px #b3ba90 solid;
	padding: 5px 10px;
`;

export const Button = styled.button`
	flex: 0 0 auto; 
	background: none;
	border: 0;
`;

export const Select = styled.select`
	flex: 1;
	padding-right: 16px;
	margin-right: -16px;	
	cursor: pointer;
`;

export const Option = styled.option`

`;

export const Ico = styled.img`

`;