import {
  FormControl,
  IconButton,
  Input,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { file } from "../data";

export default function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (e) => setSearch(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.length);
    let searchData = file.filter((item) => item.email === search);
    setData(searchData);
  };

  return (
    <>
      <FormControl display="flex" justifyContent="center" mb="10">
        <Input
          placeholder="search email here"
          width="30"
          value={search}
          onChange={handleSearch}
        />
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          ml="3"
          onClick={handleSubmit}
        />
      </FormControl>
      <Table variant="striped" w="50%" mx="auto">
        <TableCaption>player's table</TableCaption>
        <Thead>
          <Tr>
            <Th textAlign="center">username</Th>
            <Th textAlign="center">email</Th>
            <Th textAlign="center">password</Th>
            <Th textAlign="center">experience</Th>
          </Tr>
        </Thead>
        <Tbody>
          {search ? (
            data.map((e, i) => {
              return (
                <Tr key={i}>
                  <Td textAlign={"center"}>{e.username}</Td>
                  <Td textAlign={"center"}>{e.email}</Td>
                  <Td textAlign={"center"}>{e.password}</Td>
                  <Td textAlign={"center"}>{e.experience}</Td>
                </Tr>
              );
            })
          ) : (
            file.map((e, i) => {
              return (
                <Tr key={i}>
                  <Td textAlign={"center"}>{e.username}</Td>
                  <Td textAlign={"center"}>{e.email}</Td>
                  <Td textAlign={"center"}>{e.password}</Td>
                  <Td textAlign={"center"}>{e.experience}</Td>
                </Tr>
              );
            })
          )}
        </Tbody>
      </Table>
    </>
  );
}
