import styled, { css } from 'styled-components';

interface ICard {
	isExpanded?:boolean;
	img?:any;
}

export const CardWrapper = styled.div`
	background-color: rgba(81, 100, 72, .5);
	padding: 0 5px 5px 5px;
	height: 100%;
	display: flex;
	flex-flow: column;
	> * {
		width: 100%;
	}
`;

export const CardTitle = styled.h3`
	font-size: .8rem;
	color: #6c3314;
	flex: 0 0 auto;
`;

export const Category = styled.p`
	padding: 10px 0;
	text-align: center;
	text-transform: uppercase;
	font-size: 1rem;
	color: #516448;
	font-weight: 400;
`;

export const Thumbnail = styled.div<ICard>`
	flex: 1;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	display: flex;
	flex-flow: column;
	height: 215px;
	${({ img }) =>
		img &&
		css`
			background-image url(${img});
		`}	
`;

export const CardFooter = styled.div`
	padding: 5px 0 0;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
`;

export const Price = styled.p`
	font-sie: 1.3rem;
	font-weight: 400;
	color: #6c3314;
	padding-left: 20px;
`;

export const Counter = styled.div`
	padding: 5px 10px;
	flex: 0 0 auto;
	display: flex;
	flex-flow: row wrap;
	align-items: stretch;
	justify-content: flex-end;	
	background-color: #ced0a6;
	min-width: 70px;
`;

export const Button = styled.button`
	background-color: #516448;
	color: #eee4c6;
	font-size: 25px;
	width: 18px;
	line-height: .5;
	text-indent: 6px;
	cursor: pointer;
	&:not(:last-child) {
		margin-bottom: 5px;
	}
`;

export const Qti = styled.p`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	color: #516448;
	font-size: 1rem;
	padding-right: 10px;
	font-weight: 400
`;

export const Action = styled.span`
	display: flex; 
	flex-flow: column;
`;

export const Expand = styled.img`
	width: auto;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 2;
	cursor: pointer;
	background: rgba(108,51,21,.7);
	padding: 5px;
	border-radius: 0 0 0 10px;
`;

export const ProductInfo = styled.div`
	background-color: #eee4c6;
	padding: 20px;
	width: 100%;
	margin-top: auto;
`;

export const ExtraInfo = styled.small`
	display: block;
	color: darkslategray;
	font-size: inherit;
	margin: 8px 0 0;
`;

export const Description = styled.p<ICard>`
	font-size: .8rem;
	line-height: 1.6;
	color: darkslategray;
	padding-top: 10px;
	margin-top: 10px;
	border-top: 1px dashed #6c3314;
	display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};
	z-index: 1;
`;