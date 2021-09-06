import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInpuProps, FormErrorMessage } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
interface InputProps extends ChakraInpuProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {

    return (

        <FormControl isInvalid={!!error}>

            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChakraInput id={name} name={name} focusBorderColor="pink.500" backgroundColor="gray.900" variant="filled" _hover={{ bgColor: 'gray.900' }} size="lg" {...ref} {...rest}></ChakraInput>
            {!!error && (<FormErrorMessage>{error.message}</FormErrorMessage>)}
        </FormControl>

    );
}

export const Input = forwardRef(InputBase);