import { Flex, Icon, useBreakpointValue, IconButton } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { Profile } from '../Header/Profile';
import { Notification } from '../Header/Notification';
import { Search } from '../Header/Search';
import { Logo } from '../Header/Logo';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

export function Header() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    const { onOpen } = useSidebarDrawer();

    return (
        <Flex w="100%" as="header" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center" >

            {!isWideVersion && (
                <IconButton aria-label="Open Navigation Menu" icon={<Icon as={RiMenuLine} />} fontSize="24" variant="unstyled" onClick={onOpen} mr="2">

                </IconButton>
            )}

            <Logo />

            <Search />

            <Flex align="center" ml="auto">

                <Notification />

                <Profile />
            </Flex>
        </Flex >
    )
}