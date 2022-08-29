import logoSVG from '../../assets/logo.svg'

import * as S from './style'

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img src={logoSVG} alt="" />

        <S.Button>Nova transação</S.Button>
      </S.Content>
    </S.Container>
  )
}
