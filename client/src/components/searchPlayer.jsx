import {
  Button,
  FormControl,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Select,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import EditForm from "./editForm";

export default function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = useState(null);
  const [option, setOption] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/players")
      .then((res) => res.json())
      .then((json) => setData(json.data));
  },[search]);
  useEffect(() => {
    
  }, [search]);

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    let searchData
    switch (option) {
      case "email":
      searchData =  data.filter((item) => item.email  === search)
        break;
      default:
      searchData =  data.filter((item) => item.username  === search)
        break;
    }
    console.log(searchData);
    setData(searchData);
  };

  const handleOption = (e) => {
    setOption(e.target.value);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:4000/api/v1/players/${id}`, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ id: id }),
    });
    if (response.ok) {
      toast({
        title: "Account deleted.",
        position: "top",
        description: "We've deleted your account.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => window.location.reload, 1000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl display="flex" justifyContent="center" mb="10">
          <Select placeholder="Select option" onChange={handleOption} w="150px" mr={4}>
            <option value="username">by Username</option>
            <option value="email">by email</option>
          </Select>
          <Input
            placeholder={option ? `search ${option} here` : "please select option first"}
            width="30"
            value={search}
            onChange={handleSearch}
            disabled={option ? false : true}
          />
          <IconButton
            aria-label="Search database"
            icon={<SearchIcon />}
            ml="3"
            onClick={handleSubmit}
          />
        </FormControl>
      </form>
      <Table variant="striped" width="50%" mx="auto">
        <TableCaption>player's table</TableCaption>
        <Thead>
          <Tr>
            <Th textAlign="center">username</Th>
            <Th textAlign="center">email</Th>
            <Th textAlign="center">password</Th>
            <Th textAlign="center">experience</Th>
            <Th textAlign="center">action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((e, i) => {
            return (
              <Tr key={i}>
                <Td textAlign={"center"}>{e.username}</Td>
                <Td textAlign={"center"}>{e.email}</Td>
                <Td textAlign={"center"}>{e.password}</Td>
                <Td textAlign={"center"}>{e.experience}</Td>
                <Td p={4}>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <DeleteIcon
                      w={5}
                      h={5}
                      cursor={"pointer"}
                      onClick={() => handleDelete(e.id)}
                    />

                    <EditIcon
                      cursor={"pointer"}
                      onClick={() => {
                        onOpen();
                        setModalData(e);
                      }}
                      w={5}
                      h={5}
                    />
                  </div>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <EditForm player={modalData} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
