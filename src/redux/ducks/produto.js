const ACTION_PREFIX = 'produto/'

export const Types = {
    GET_PRODUTOS: `${ACTION_PREFIX}GET_PRODUTOS`,
    ADD_ITEM_ON_CARRINHO: `${ACTION_PREFIX}ADD_ITEM_ON_CARRINHO`,
};

const INITIAL_STATE = {
    list: [
        /// Mockup
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
    ],
    carrinho: new Map() //[id, quantity]
}

export default function produto(state = INITIAL_STATE, action) {

    switch (action.type) {

        case Types.GET_PRODUTOS + "_SUCCESS":
            return { ...state, list: action.payload.data.produtos };

        case Types.GET_PRODUTOS + "_FAIL":
            return state;


        case Types.ADD_ITEM_ON_CARRINHO:

            let carrinho = state.carrinho;

            carrinho.set(action.payload.id, action.payload.value);

            return { ...state, carrinho };

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
    }),

    addItemOnCarrinho: (id, value) => ({
        type: Types.ADD_ITEM_ON_CARRINHO,
        payload: { id, value }
    })
};