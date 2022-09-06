import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { MagnifyingGlass } from 'phosphor-react'

import { useTransaction } from '../../hooks/useTransaction'

import * as S from './style'

const searchSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchSchema>

export function Search() {
  const { fetchTransaction } = useTransaction()
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchSchema)
  })

  function handleSearchTransaction(data: SearchFormInput) {
    fetchTransaction(data.query)
  }

  return (
    <S.Container onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.Container>
  )
}
