import * as Dialog from '@radix-ui/react-dialog'

import logoSVG from '../../assets/logo.svg'

import { Modal } from '../Modal'

import * as S from './style'

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img src={logoSVG} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.Button>Nova transação</S.Button>
          </Dialog.Trigger>

          <Modal />
        </Dialog.Root>
      </S.Content>
    </S.Container>
  )
}
