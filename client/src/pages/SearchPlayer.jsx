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
  
  export default function SearchPage() {
    const formik = useFormik({
      initialValues: {
        search: '',
        filter: '',
      },
      onSubmit: values => {
        console.log(values, 'from submit button formik');
      },
    });
  
    return (
      <>
        <VStack spacing={8}>
          <Text>Search</Text>
          <form onSubmit={formik.handleSubmit}>
          <FormControl>
              <FormLabel htmlFor="search">Search</FormLabel>
              <Input
                id="search"
                type="text"
                value={formik.values.search}
                onChange={formik.handleChange}
              />
              <FormLabel htmlFor="filter">filter by</FormLabel>
              <Select
                id="filter"
                placeholder="Search by "
                value={formik.values.filter}
                onChange={formik.handleChange}
              >
                <option>Username</option>
                <option>Email</option>
                <option>Experience</option>
                <option>Lvl</option>
              </Select>
              <Button type="submit">Submit</Button>
            </FormControl>
          </form>
        </VStack>
      </>
    );
  }
  