import React from "react";

interface IContextProps {
	sign?: any;
	doSign?: any;
	signMsg?: any;
	setSignMsg?: any;
	token?: any;
	setToken?: any;	
	cart?: any;
	setCart?: any;	
	data?: any;
	setData?: any;	
	categories?: any;
	setCategories?: any;				
	dispatch?: ({type}:{type:string}) => void;
}

const Context = React.createContext({} as IContextProps);

export default Context;