import styled from 'styled-components';

export const Container = styled.div`

`;

export const Footer = styled.div`
	padding: 30px 0 0;
	.btn {
		background-color: #516448 !important;
		color: #b3ba90;
		font-weight: 300;
		font-size: 1.2rem;
		text-transform: initial;
		border-radius: 0;
		width: 100%;
		max-width: 373px;
		margin: 0 auto;
		display: block;
		[class*="label"] {
			line-height: 2;
		}
	}
`;

export const FooterText = styled.p`
	padding-top: 30px;
	font-size: .8rem;
	line-height: 1.6;
	color: gray;
	strong {
		color: #6c3314;
	}
`;

export const Dash = styled.hr`
	border: 1px #8a9f47 dashed;
`;

export const Filter = styled.div`
	display: flex;
	flex-flow: row;
	align-items: stretch;
	justify-content: flex-end;
	max-width: 400px;
	margin: -48px -10px 40px auto;
	> * {
		flex: 1;
		margin: 0 10px;
	}
`;

export const ProductList = styled.ul`
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	margin: 0 -10px -20px;
`;

export const ProductListItem = styled.li`
	flex: 0 0 auto;
	width: 25%;
	padding: 0 10px 20px;
`;