import React from 'react';

import { render,screen,fireEvent,waitFor } from "@testing-library/react";

import Posts from "./Posts";

const posts = [
    {
        id: 1,
        title: 'title1',
        body: 'body1'
    },
    {
        id: 2,
        title: 'title2',
        body: 'body2'
    }
];

describe('Posts component', () => {
    test('renders posts component data of title1 and body1', async () => {
       globalThis.fetch = jest.fn(() =>
           Promise.resolve({
               json: () => Promise.resolve(posts)
           })
       );
       const {getByText} = render(<Posts />);// screen
        await waitFor(() => {
            // assert that fetch api is called.
            expect(globalThis.fetch).toBeCalledWith('https://jsonplaceholder.typicode.com/posts');
            // assert that it would have called fetch api excaly once
            expect(globalThis.fetch).toHaveBeenCalledTimes(1);
            expect(getByText('title1')).toBeInTheDocument();
            expect(getByText('body1')).toBeInTheDocument();

        });

        globalThis.fetch.mockClear();
      
    });
});

