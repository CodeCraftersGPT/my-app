import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom'; // to mock the react-router-dom
import LoginPage from './Login';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // import and retain the original functionalities
    useNavigate: jest.fn(), // mock useNavigate specifically supplying the jest funct
  }));


  describe('LoginPage', () => {
    test('should navigate to /dashboard when login button is clicked', () => {
     const navigate = jest.fn(); // mock the navigate function
      useNavigate.mockReturnValue(navigate); // mock the useNavigate hook
     const { getByText } = render(<LoginPage />);
      fireEvent.click(getByText('Login'));
      expect(navigate).toHaveBeenCalledWith('/dashboard');
        // assert that navigate should have been called once.
     expect(navigate).toHaveBeenCalledTimes(1);

    });
  });

