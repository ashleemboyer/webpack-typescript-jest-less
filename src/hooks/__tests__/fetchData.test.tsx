import * as React from 'react';
import { mount } from 'enzyme';
import fetchData from '../fetchData';

const TestComponent: React.FC<{ callback: () => void }> = ({ callback }) => {
  callback();
  return null;
};

describe('fetchData', () => {
  it('does a thing', () => {
    const mySpy = jest.spyOn(React, 'useEffect').mockImplementation(() => {
      console.log('Mock React.useEffect');
    });

    let hookResult: any;
    mount(
      <TestComponent
        callback={() => {
          hookResult = fetchData();
        }}
      />,
    );

    const { result, isLoading } = hookResult;
    expect(result).toBeNull();
    expect(isLoading).toBeNull();

    mySpy.mockRestore();
  });

  it('does a different thing', () => {
    let hookResult: any;

    mount(
      <TestComponent
        callback={() => {
          hookResult = fetchData();
        }}
      />,
    );

    // Not ideal, just here for demo purposes
    setTimeout(() => {
      const { result, isLoading } = hookResult;
      expect(result).not.toBeNull();
      expect(isLoading).toEqual(false);
    }, 2000);
  });
});
