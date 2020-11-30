import styled, { css } from 'styled-components';

interface ISeaerchBar {
}

export const Container = styled.form`

`;

export const Search = styled.div`
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

export const SearchField = styled.input`
	flex: 1;
	padding-right: 10px;
`;

export const Ico = styled.img`

`;