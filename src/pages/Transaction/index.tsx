import React from 'react'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

import * as S from './style'

export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />

      <S.Container>
        <S.Table>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <S.Highlight variant="income">R$ 12.000,00</S.Highlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Hambúrguer</td>
              <td>
                <S.Highlight variant="outcome">R$ 12.000,00</S.Highlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </S.Table>
      </S.Container>
    </div>
  )
}
