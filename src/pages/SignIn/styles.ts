import styled from 'styled-components';

export const Container = styled.section`
	padding-top: 60px;
	display: flex;
	flex-flow: row;
	align-items: stretch;
`;

export const Column = styled.div`
	&:not(:last-of-type) {
		border-right: 2px #8a9f47 dashed;
		padding-right: 60px;
	}
	&:not(:first-of-type) {
		padding-left: 60px;
	}	
	flex: 1;
	&:first-child {
		flex: 0 0 auto;
	}
`;
