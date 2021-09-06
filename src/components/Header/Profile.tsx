import { Flex, Text, Input, Icon, HStack, Box, Avatar, useBreakpointValue, IconButton } from '@chakra-ui/react'
import { RiMenuLine, RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Profile() {
    return (
        <Flex align="center">

            <Box mr="4" textAlign="right">
                <Text>Artur Milani</Text>
                <Text color="gray.300" fontSize="small">arglasdev@gmail.com</Text>
            </Box>

            <Avatar size="md" name="Artur Milani" src="https://github.com/arglasdev.png" />

        </Flex>
    )
}