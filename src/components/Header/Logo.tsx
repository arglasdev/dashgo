import { Flex, Text, Input, Icon, HStack, Box, Avatar, useBreakpointValue, IconButton } from '@chakra-ui/react'
import { RiMenuLine, RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Logo() {
    return (
        <Text fontSize={["2XL", "3xl"]} fontWeight="bold" letterSpacing="tight" w="64">
            dashgo
            <Text as="span" ml="1" color="pink.500">.</Text>
        </Text>
    );
}