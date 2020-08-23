import * as React from 'react';
import { render } from "@testing-library/react";

import App from '../../App'

describe("Root page renders correctly", () => {
	it("root page shows 'Intro: Landing page'", () => {
		const { getByText } = render(<App />);
		expect(getByText("Intro: Landing page")).toBeInTheDocument();
	})
	it("List of navigational pages renders", () => {
		const { getByText } = render(<App />);
		expect(getByText("Projects")).toBeInTheDocument();
	})
});