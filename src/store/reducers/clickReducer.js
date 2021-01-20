import { LOGADO } from '../actions/actionTypes'


const ESTADO_INICIAL = []

export function NomeReducer( state = ESTADO_INICIAL, action ) {
  switch (action.type){
    case LOGADO:
      return {
        ...state,
        novoNome: action.novoNome
        
      }
    default:
      return state;
  }
}

