import { Flex, Box, Text, Heading, Button, Icon, Table, Tr, Th, Thead, Td, Tbody, Checkbox, useBreakpointValue, Spinner } from '@chakra-ui/react';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination/';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import Link from "next/link";
import { useUsers } from '../../services/hooks/useUsers';
import { useState } from 'react';

export default function UserList() {

    const [page, setPage] = useState(1);

    console.log(page);

    const { data, isLoading, error, isFetching } = useUsers(page);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/users')
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }, []);

    return (

        <Flex direction="column" h="100vh">

            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {!isLoading && isFetching &&
                                <Spinner size="sm" color="gray.500" ml="4" />
                            }
                        </Heading>
                        <Link href="/users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon fontSize="20" as={RiAddLine} />}>
                                Criar Novo
                            </Button>
                        </Link>
                    </Flex>
                    {isLoading ? (

                        <Flex justify="center">
                            <Spinner />
                        </Flex>

                    ) : error ? (

                        <Flex justify="center">
                            <Text>Falha ao carregar dados do usuário</Text>
                        </Flex>

                    ) : (

                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>Usuário</Th>
                                        {isWideVersion && <Th>Data de cadastro</Th>}
                                        <Th width="8"></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>

                                    {data.users.map(user => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px={["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink" />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight="bold">{user.name}</Text>
                                                        <Text fontWeight="sm" color="gray.300">{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                {isWideVersion && <Td>{user.createdAt}</Td>}
                                                <Td>
                                                    <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon fontSize="16" as={RiPencilLine} />}>Editar</Button>
                                                </Td>
                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>
                            <Pagination total={data.totalCount} currentPage={page} onPageChange={setPage} />
                        </>
                    )}
                </Box>
            </Flex>
        </Flex >

    )
}