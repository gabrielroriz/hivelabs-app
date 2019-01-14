const ACTION_PREFIX = 'produto/'

export const Types = {
    GET_PRODUTOS: `${ACTION_PREFIX}GET_PRODUTOS`
};

const INITIAL_STATE = {
    list: [
        // {
        //     "nome": "Toalha",
        //     "estoque": 5,
        //     "descricao": "Toalha de banho.",
        //     "preco": 37.19
        // },
        // {
        //     "nome": "Caneca",
        //     "estoque": 17,
        //     "descricao": "Caneca de aço inox.",
        //     "preco": 43.20
        // },
        // {
        //     "nome": "Travesseiro",
        //     "estoque": 33,
        //     "descricao": "Travesseiro da Nasa.",
        //     "preco": 71.44
        // },
        // {
        //     "nome": "Tênis",
        //     "estoque": 4,
        //     "descricao": "Tênis Nike para escaladas.",
        //     "preco": 23.95
        // }
    ]
}

export default function produto(state = INITIAL_STATE, action) {

    switch (action.type) {

        case Types.GET_PRODUTOS + "_SUCCESS":
            return { ...state, list: action.payload.data.produtos };

        case Types.GET_PRODUTOS + "_FAIL":
            return state;

        default: return state
    }
}


export const Creators = {
    getProdutos: () => ({
        type: Types.GET_PRODUTOS,
        payload: {
            client: "hivelabs",
            request: {
                url: "/produtos.json",
                method: "get",
                headers: {
                    'Accept': 'application/json'
                }
            }
        }
    })
};