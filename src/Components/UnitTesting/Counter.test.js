import { render,screen,fireEvent } from "@testing-library/react";

import Counter from "./Counter";

test('renders counter component initial state 10', () => {
    render(<Counter />);
    const counterElement = screen.getByText('count : 10');
    expect(counterElement).toBeInTheDocument();
});

 test('clicking on button increments counter', () => {   
    render(<Counter />);
    const counterElement = screen.getByText('count : 10');
    const buttonElement = screen.getByText('Increment');
    fireEvent.click(buttonElement);
    expect(counterElement).toHaveTextContent('count : 11');
    expect(global.fetch).toHaveBeenCalledTimes(0);
}
);