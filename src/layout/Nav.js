import { Box, Button, Center, Flex, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function Nav() {
  let navigate = useNavigate();

  return (
    <Center>
      <Flex mt="20%">
        <Button onClick={() => navigate("/")}>홈으로</Button>
        <Button onClick={() => navigate("/lalala")}>맴버조회 테스트</Button>
      </Flex>
    </Center>
  );
}
