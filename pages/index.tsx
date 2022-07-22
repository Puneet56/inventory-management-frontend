import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
	return (
		<div>
			<Box bg="tomato" w="100%" p={4} color="white">
				This is the Box
			</Box>
		</div>
	);
};

export default Home;
