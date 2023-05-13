export const initialState1 = {
    name: '',
    price: '',
    category: '',
    company: ''
}

export const reducer1 = (state, action) => {
    switch (action.type) {
        case 'name':
            return { ...state, name: action.value }
        case 'price':
            return { ...state, price: action.value }
        case 'category':
            return { ...state, category: action.value }
        case 'company':
            return { ...state, company: action.value }
        default:
            return initialState1
    }

}