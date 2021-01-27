import React from 'react'
import { Form, Formik } from 'formik'
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { Box, Button } from '@chakra-ui/react';
import { useMutation } from 'urql';

interface RegisterProps {

}

const REGISTER_MUT = `
mutation Register($username: String!, $password: String!){
    register(options:{username:$username,password:$password}){
        errors{
            field
            message
        }
        user{
            id
            username
        }
    }
}`

const Register: React.FC<RegisterProps> = () => {
    const [, register] = useMutation(REGISTER_MUT)
    return (
        <Wrapper variant="small">
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={async (values) => { const response = await register(values) }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name="userame" placeholder="username" label='Username' />
                        <Box mt={4}>
                            <InputField name="password" placeholder="password" label='Password' type='password' />
                        </Box>
                        <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="teal">register</Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
}

export default Register
//2:46