import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextInput } from '@quad-ui/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import * as S from './styles'

const ClaimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(ClaimUsernameFormSchema),
  })
  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    await router.push({ pathname: '/register', query: data })
  }

  return (
    <>
      <S.Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          containerProps={{ size: 'sm' }}
          prefix="quad.com/"
          placeholder="seu-usuário"
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </S.Form>
      <S.FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário desejado'}
        </Text>
      </S.FormAnnotation>
    </>
  )
}
