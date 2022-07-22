import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

interface Props {
	children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
	return <ChakraProvider>{children}</ChakraProvider>;
};

export default AppLayout;
