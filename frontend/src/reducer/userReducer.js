export const initialState = {
    username: '',
    password: '',
    email: '',
    reset: ''
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'username':
            return { ...state, username: action.value }
        case 'password':
            return { ...state, password: action.value }
        case 'email':
            return { ...state, email: action.value }
        case 'reset':
            return { ...state, reset: action.value }
        default:
            return initialState
    }
}