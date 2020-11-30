import styled, { css } from 'styled-components';

interface IForm {
    flex?: string;
}

export const FormGroup = styled.div<IForm>`
	padding: 0 7.5px 7.5px;
	flex: ${({ flex }) => (flex ? `0 0 ${flex}` : '1')};
	button,
	input {
		background-color: transparent;
		width: 100%;
		color: #516448;
		border: 1px #b3ba90 solid;
	}
	button {
		color: #b3ba90;
		font-size: .9rem;
		border-radius: 0;
		background-color: #516448 !important;
		border: 1px #b3ba90 solid;
		[class*="label"] {
			text-transform: initial;
		}
		margin-top: auto;
	}
	input {
		padding: 6.6px 8px;
	}
	&:last-child {
		flex: 0 0 auto;
		width: 120px;
		margin-left: auto;
	}
	display: flex;
	flex-flow: column;
	position: relative;
	&.type--radio {
	    flex-flow: row-reverse;
	    align-items: center;
	    input {
	    	width: auto;
	    	flex: 0 0 auto;
	    }
	    label {
	    	flex: 1;
	    	padding-left: 10px;
	    }
	}
`;

export const Label = styled.label`
	display: block;
	text-align: left;
	font-size: .9rem;
	margin-bottom: 5px;
	color: #516448;
	font-weight: bold;
`;

export const Container = styled.form`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: stretch;
	margin: 0 -7.5px -7.5px;
`;

export const ErrMsg = styled.p`
	color: coral;
	font-size: .7rem;
	display: block;
	margin: 5px 0 0;
	text-align: right;
	position: absolute;
	right: 7.5px;
	top: 100%;
	white-space: nowrap;
`;

export const Footer = styled.table`
	width: 100%;
`;
