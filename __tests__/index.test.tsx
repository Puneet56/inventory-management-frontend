import { render } from "@testing-library/react";
import Home from "../pages/index";

describe("Home Page", () => {
	it("renders Hello", () => {
		const { getByText } = render(<Home />);

		getByText("Hello");
	});
});
