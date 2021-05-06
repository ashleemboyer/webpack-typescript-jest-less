import * as React from 'react';

interface Data {
  result: any;
  isLoading: boolean;
}

const DEFAULT_DATA: Data = { result: null, isLoading: null };

const fetchData = () => {
  const [data, setData] = React.useState<Data>(DEFAULT_DATA);

  React.useEffect(() => {
    console.log('Actual React.useEffect');

    setData({ ...data, isLoading: true });
    setTimeout(() => {
      setData({ result: 'hello!!!', isLoading: false });
    }, 1000);
  }, []);

  return data;
};

export default fetchData;
