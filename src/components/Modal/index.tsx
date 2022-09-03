import * as Dialog from '@radix-ui/react-dialog'
import { X, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

import * as S from './style'

export function Modal() {
  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <S.Button>
          <X size={24} />
        </S.Button>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <S.Type>
            <S.TypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </S.TypeButton>
            <S.TypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </S.TypeButton>
          </S.Type>

          <button type="submit">Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
