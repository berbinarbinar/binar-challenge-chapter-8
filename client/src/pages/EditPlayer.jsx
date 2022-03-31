import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import { useFormik } from 'formik';
  
  export default function EditPlayerPage() {
    const formik = useFormik({
      initialValues: {
        username: '',
        email: '',
        password: '',
        experience: '',
      },
      onSubmit: values => {
        console.log(values, 'from submit button formik');
      },
    });
  
    return (
      <>
        <VStack spacing={20}>
          <Text>Edit Player</Text>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="experience">Experience</FormLabel>
              <Input
                id="experience"
                type="text"
                value={formik.values.experience}
                onChange={formik.handleChange}
              />
              
              <Button type="submit">Submit</Button>
            </FormControl>
          </form>
        </VStack>
      </>
    );
  }
  