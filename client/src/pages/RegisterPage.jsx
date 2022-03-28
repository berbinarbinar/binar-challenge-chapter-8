import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';

export default function RegisterPage() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      experience: '',
      lvl: '',
    },
    onSubmit: values => {
      console.log(values, 'ini dari on submit formik');
    },
  });

  return (
    <>
      <VStack spacing={8}>
        <Text>Register/Create Player page</Text>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              type="text"
              value={formik.values.username}
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
              type="number"
              value={formik.values.experience}
              onChange={formik.handleChange}
            />
            <FormLabel htmlFor="lvl">Lvl</FormLabel>
            <Input
              id="lvl"
              type="number"
              value={formik.values.lvl}
              onChange={formik.handleChange}
            />
            <Button type="submit">Submit</Button>
          </FormControl>
        </form>
      </VStack>
    </>
  );
}
