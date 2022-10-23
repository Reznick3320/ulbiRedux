


const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
const ADD_MANY_CASTOMERS = 'ADD_MANY_CASTOMERS';

const defaultState = {
	customers: []
}
export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_MANY_CASTOMERS:
			return { ...state, customers: [...state.customers, ...action.payload] }
		case ADD_CUSTOMER:
			return { ...state, customers: [...state.customers, action.payload] }
		case REMOVE_CUSTOMER:
			return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) }
		default:
			return state
	}
}

export const addManyCustomersAction = (payload) => ({ type: ADD_MANY_CASTOMERS, payload });
export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload });