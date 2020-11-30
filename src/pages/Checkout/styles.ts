import styled, { css } from 'styled-components';

interface ICheckout {
	isShown?:boolean;
}


export const Container = styled.div`
	padding-top: 40px;
	display: flex;
	align-items: stretch;
	border-bottom: 1px #575d30 dashed;
	padding-bottom: 60px
`;

export const Sidebar = styled.aside`
	flex: 0 0 auto;
	width: 338px;
	padding: 30px 0px 0 30px;
`;

export const SidebarTitle = styled.h4`
	font-weight: 400;
	color: #575d30;
	font-size: 1rem;
	margin-bottom: 15px;
`;

export const Modal = styled.div<ICheckout>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
	display: ${({ isShown }) => (isShown ? 'flex' : 'none')};
	flex-flow: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	background-color: rgba(255,255,255,.8)
`;

export const ModalInner = styled.div`
	width: 100%;
	max-width: 555px;
	padding: 60px 40px;
	text-align: center;
	background: #eee4c6;
	box-shadow: 0px 0px 10px -6px black;	
	button {
		color: #b3ba90;
		padding: 12px 24px;
		font-size: 1rem;
		border-radius: 0;
		background-color: #516448 !important;
	}	
`;

export const ModalText = styled.p`
	font-size: 1rem;
	margin: 40px auto;
	line-height: 1.6;
	color: gray;
	width: 100%;
	max-width: 328px;
`;

export const ModalTitle = styled.h4`
	font-size: 1.3rem;
	color: #575d30;
	border-bottom: 1px #575d30 dashed;
	padding-bottom: 15px;
	position: relative;
`;

export const Bird = styled.img`
	position: absolute;
	right: 20px;
	bottom: 0;
`;

export const CheckoutForm = styled.div`
	form {
		margin: 30px 0 0;
		.type--radio {
			label {
				color: #6c3314
			}
			&:nth-child(2) {
				margin-bottom: 15px;
			}
		}
		> * {
			&:last-child {
				width: 100%;
				button {
					font-size: 1rem;
					font-weight: 300;
					[class*="label"] {
						line-height: 2;
					}
				}
			}
		}
		table {
			margin: 30px 8px 90px;
			tr {
				font-size: .8rem;
				&:not(:first-child):not(:last-child) {
					td {
						padding: 5px 0;
					}
				}				
				td {
					color: #575d30;
					&:last-child {
						text-align: right;
						font-size: 1rem;
						font-weight: bold;
						color: #6c3314;
					}
				}
			}			
		}
		hr {
			width: 100%;
		}
	}
`;

export const CheckoutTable = styled.table`
	flex: 1;
	background-color: #eee4c6;
	tr {
		td {
			padding: 8px 10px;
			color: darkslategray;
			border: 1px #c58f3f solid;
			font-weight: 400;
			font-size: .75rem;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			&:last-child {
				text-align: center;
				width: 85px;
			}	
			&:first-child {
				&:not(:only-child) {
					width: 50px;
				}
				text-align: center;
			}		
		}
		&:nth-child(2) {
			color: #6c3314;
		}
	}
	tbody {
		tr {
			&:last-child {
				td {
					color: #575d30;
					border-top-width: 2px;
					&:nth-last-child(2) {
						text-align: right;
					}					
				}
			}
		}
	}
	thead {
		td {
			border-bottom-width: 2px;
		}
	}
	thead, tbody {
		tr {
			&:last-child {
				background-color: rgba(197, 143, 63, .2);
				td {
					font-size: .8rem;
				}
			}
		}
	}	
`;