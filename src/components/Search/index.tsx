import { MagnifyingGlass } from 'phosphor-react'
import * as S from './style'

export function Search() {
  return (
    <S.Container>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.Container>
  )
}
