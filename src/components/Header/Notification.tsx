import { Flex, Text, Input, Icon, HStack, Box, Avatar, useBreakpointValue, IconButton } from '@chakra-ui/react'
import { RiMenuLine, RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Notification() {

    return (
        <HStack spacing={["6", "8"]} mx={["6", "8"]} pr={["6", "8"]} py="1" color="gary.300" borderColor="gray.700" borderRightWidth={1} >
            <Icon as={RiNotificationLine} fontSize="20" />
            <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>
    )

}