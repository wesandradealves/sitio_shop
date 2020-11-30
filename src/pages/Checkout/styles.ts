import styled from 'styled-components';

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