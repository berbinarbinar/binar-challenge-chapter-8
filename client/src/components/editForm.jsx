import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, useToast, VStack } from "@chakra-ui/react";
import { useFormik } from "formik";

export default function  EditForm({player}){
    const toast = useToast();
    const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
        id:player.id,
        username: player.username,
        email: player.email,
        password: player.password,
        experience: player.experience,
      },
      
      onSubmit: async (values) => {
        console.log(values)
        const response = await fetch(`http://localhost:4000/api/v1/players/${values.id}`, {
          method: "put",
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
            title: "Account updated.",
            position: "top",
            description: "We've updated your account for you.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }
        setTimeout(()=> window.location.reload(),1000)
      },
    });
  
    return (
      <>
        <Flex  justify="center">
          <Box p={6} minWidth="300px" rounded="md">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <Heading as={"h5"}>Edit Player</Heading>
                <FormControl>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    id={`username${player.id}`}
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
                    id={`email${player.id}`}
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
                    id={`password${player.id}`}
                    name="password"
                    type="password"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    required
                  />
                </FormControl>
                <Button type="submit" colorScheme="purple" isFullWidth>
                  Update Player
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </>
    );
  }