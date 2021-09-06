import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInformData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function Home() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  console.log(formState.errors);

  const handleSignIn: SubmitHandler<SignInformData> = async (values) => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values);
  }

  return (

    <Flex w="100vw" h="100vh" align="center" justify="center">

      <Flex as="form" w="100%" maxWidth={360} backgroundColor="gray.800" padding={8} borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>

        <Stack spacing="4">

          {/* <Input name="email" type="email" label="E-mail" {...register('email', { required: 'E-mail obrigatório' })} error={formState.errors.email}></Input> */}
          <Input name="email" type="email" label="E-mail" {...register("email")} error={formState.errors.email}></Input>

          <Input name="password" type="password" label="Password" {...register("password")} error={formState.errors.password} ></Input>

        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex >
  )
}
