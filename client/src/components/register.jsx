import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    theme,
    VStack,
  } from "@chakra-ui/react";
  import { useFormik } from "formik";
  import {} from "@chakra-ui/react"
import { file } from "../data";
  
  export default function RegisterForm() {
    const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
        username: "",
        email: "",
        password: "",
        experience: 1000,
      },
      onSubmit: (values) => {
        file.push(values)
        console.log(file)
      },
    });
  
    return (
      <>
    
        <Flex align="center" justify="center"  h="100vh">
          <Box p={6} minWidth="300px" rounded="md">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">email</FormLabel>
                  <Input
                   id="email"
                   name="email"
                   type="email"
                   variant="filled"
                   onChange={formik.handleChange}
                   value={formik.values.email}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </FormControl>
                <Button type="submit" colorScheme="purple" isFullWidth>
                  register
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </>
    );
  }
  