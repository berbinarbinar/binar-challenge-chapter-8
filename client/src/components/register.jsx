import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {} from "@chakra-ui/react";

export default function RegisterForm() {
  const navigate = useNavigate();
  const toast = useToast();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      email: "",
      password: "",
      experience: 1000,
    },
    onSubmit: async (values) => {
      const response = await fetch("http://localhost:4000/api/v1/players", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
          email: values.email,
          experience: values.experience,
        }),
      });
      if (response.ok) {
        toast({
          title: "Account created.",
          position: "top",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
      navigate("/");
    },
  });

  return (
    <>
      <Flex align="center" justify="center" h="100vh">
        <Box p={6} minWidth="300px" rounded="md">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <Heading as={"h5"}>Register new player</Heading>
              <FormControl>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  required
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
                  required
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
                  required
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
