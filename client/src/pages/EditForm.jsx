import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    useToast,
    VStack,
  } from '@chakra-ui/react';
  import { useFormik } from 'formik';
  import { useState } from 'react';
  
  export default function EditForm() {
    const [userEdit, setUserEdit] = useState({});
    const toast = useToast();
    const formik = useFormik({
      initialValues: {
        username: '',
        email:'',
        password: '',
        experience:'',
        lvl:'',
      },
      onSubmit: values => {
        console.log(values, 'ini values dari edit');
        setUserEdit({
          username: values.username,
          email: values.email,
          password: values.password,
          experience: values.experience,
          lvl: values.lvl,
        });
        console.log(userEdit);
  
        toast({
          position: 'top',
          title: `${userEdit.username} berhasil edit data`,
          description: 'kamu berhasil edit data',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      },
    });
    return (
      <>
        <VStack spacing={8}>
          <Text fontSize="4xl">Edit Form</Text>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="usernameEdit">Username</FormLabel>
              <Input
                id="username"
                values={formik.values.username}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="emailEdit">Email</FormLabel>
              <Input
                id="email"
                values={formik.values.email}
                onChange={formik.handleChange}
              />
              <FormLabel mt="5" htmlFor="passwordEdit">
                password
              </FormLabel>
              <Input
                id="password"
                type="password"
                values={formik.values.password}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="experienceEdit">Experience</FormLabel>
              <Input
                id="experience"
                type="number"
                value={formik.values.experience}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="lvlEdit">Lvl</FormLabel>
              <Input
                id="lvl"
                type="number"
                value={formik.values.lvl}
                onChange={formik.handleChange}
              />
              <Button mt="5" type="submit">
                Submit
              </Button>
            </FormControl>
          </form>
        </VStack>
      </>
    );
  }