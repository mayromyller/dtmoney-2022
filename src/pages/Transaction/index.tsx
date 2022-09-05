import { useState, useEffect } from 'react'

import { Header } from '../../components/Header'
import { Search } from '../../components/Search'
import { Summary } from '../../components/Summary'

import { useTransaction } from '../../hooks/useTransaction'
import { priceFormatter, dateFormatter } from '../../utils/formatter'

import * as S from './style'

export function Transaction() {
  const { transactions } = useTransaction()

  return (
    <div>
      <Header />
      <Summary />

      <S.Container>
        <Search />
        <S.Table>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <S.Highlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </S.Highlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Container>
    </div>
  )
}
