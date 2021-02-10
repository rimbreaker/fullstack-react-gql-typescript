import React, { InputHTMLAttributes } from 'react'
import { useField } from 'formik'
import { FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string,
    name: string,
    textArea?: boolean
}

export const InputField: React.FC<InputFieldProps> = ({ label, textArea, size: _, ...props }) => {

    const [field, { error }] = useField(props)
    let InputOrTextArea = Input
    if (textArea) {
        InputOrTextArea = Textarea as any
    }
    return (<FormControl isInvalid={!!error}>

        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <InputOrTextArea  {...field}{...props} id={field.name} />
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>);
}