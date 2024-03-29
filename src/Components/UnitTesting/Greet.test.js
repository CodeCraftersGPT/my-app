import {render, screen} from '@testing-library/react';
import Greet from './Greet';

test('renders Hello World', () => {
    render(<Greet name="World" />);
    const linkElement = screen.getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
});


