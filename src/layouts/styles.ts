import styled, { css } from 'styled-components';

interface ILayouts {
    borderStyle?: string;
    color?: string;
}

export const App = styled.div`
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    overflow-x: hidden;
    background-color: rgba(214, 190, 144, .3);
`;
export const Main = styled.main`
    padding-top: 10px;
    padding-bottom: calc(66px + 30px);
    flex: 1;
`;
export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: calc(1036px + 70px);
    width: 100%;
    padding-left: 35px;
    padding-right: 35px;
`;
export const PageTitle = styled.h2<ILayouts>`
    ${({ borderStyle }) =>
    borderStyle &&
    css`
    	border-style: ${borderStyle};
    `}  
    border-bottom-width: 2px;
    padding-bottom: 10px;
    font-size: 1.6rem;
    ${({ color }) =>
    color &&
    css`
    	color: ${color};
    	border-color: ${color};
    `}     
`;
export const Section = styled.section`

`;
export const Subtitle = styled.small`
	display: block;
	color: #6c3314;
	font-size: 50%;
	margin: 10px 0 5px;
`;

