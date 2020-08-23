import * as React from 'react';
import { render } from "@testing-library/react";

import App from '../../App'

describe("App", () => {
	it("root page shows 'Intro: Landing page'", () => {
		const { getByText } = render(<App />);

		expect(getByText("Intro: Landing page")).toBeInTheDocument();
	})
});