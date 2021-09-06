import { Flex, SimpleGrid, VStack, HStack, Divider, Box, Heading, Button } from '@chakra-ui/react';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { Input } from '../../components/Form/Input'
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from "next/link";

type CreateUserformData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'Mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'Senhas não conferem')
});

export default function CreateUser() {

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    });

    const handleCreateUser: SubmitHandler<CreateUserformData> = async (values) => {

        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(values)
    }

    return (

        <Box>

            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

                <Sidebar />

                <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="name" label="Nome completo" {...register("name")} error={formState.errors.name}></Input>
                            <Input name="email" label="Email" type="email" {...register("email")} error={formState.errors.email}></Input>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="password" type="password" label="Senha" {...register("password")} error={formState.errors.password}></Input>
                            <Input name="password_confirmation" type="password" label="Confirmação da senha" {...register("password_confirmation")} error={formState.errors.password_confirmation}></Input>
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>

    )
}