import * as Dialog from '@radix-ui/react-dialog'
import { X, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { api } from '../../lib/api'

import * as S from './style'

const newTransactionSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionInputs = z.infer<typeof newTransactionSchema>

export function Modal() {
  const { register, handleSubmit, control, reset } =
    useForm<NewTransactionInputs>({
      resolver: zodResolver(newTransactionSchema),
      defaultValues: {
        type: 'income'
      }
    })

  async function handleCreteNewTransaction(data: NewTransactionInputs) {
    const { category, description, price, type } = data

    await api.post('/transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date()
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <S.Button>
          <X size={24} />
        </S.Button>

        <form onSubmit={handleSubmit(handleCreteNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <S.Type onValueChange={field.onChange} value={field.value}>
                <S.TypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </S.TypeButton>
                <S.TypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </S.TypeButton>
              </S.Type>
            )}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
