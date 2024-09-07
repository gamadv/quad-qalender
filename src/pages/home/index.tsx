import { Heading, Text } from '@quad-ui/react'
import Head from 'next/head'
import Image from 'next/image'

import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import * as S from './styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Qalender</title>
      </Head>
      <S.Container>
        <S.Hero>
          <Heading as="h1" size="2xl">
            Agende fácil, Quick!
          </Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
          <ClaimUsernameForm />
        </S.Hero>

        <S.Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendário simbolizando aplicação em funcionamento"
          />
        </S.Preview>
      </S.Container>
    </>
  )
}
