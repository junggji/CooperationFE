import {
  Box,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function TestMember() {
  const [memberList, setMemberList] = useState("");
  let location = useLocation();

  useEffect(() => {
    axios
      .post("/api/lalala")
      .then((response) => {
        setMemberList(response.data);
      })
      .catch(() => console.log("오류"));
  }, [location]); // 의존성 배열 비워두기

  if (memberList === null) {
    return <Spinner />;
  }
  return (
    <Box>
      <Table size={"sm"} mb={5}>
        <Thead>
          <Tr>
            <Th textAlign={"center"}>번호</Th>
            <Th textAlign={"center"}>이름</Th>
            <Th textAlign={"center"}>이메일</Th>
          </Tr>
        </Thead>
        <Tbody>
          {memberList &&
            memberList.map((member) => (
              <Tr
                textAlign={"center"}
                key={member.user_id}
                _hover={{
                  cursor: "pointer",
                  backgroundColor: "gray.100",
                }}
              >
                <Td textAlign={"center"}>{member.user_id}</Td>
                <Td textAlign={"center"}>{member.username}</Td>
                <Td textAlign={"center"}>{member.email}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default TestMember;
