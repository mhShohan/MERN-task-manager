import { useEffect } from 'react';
import { getRequest } from '../utils/axios';

const Homepage = () => {
  useEffect(() => {
    (async () => {
      const res = await getRequest('/users/authVerify');
      console.log(res);
    })();
  }, []);
  return <div>Homepage</div>;
};

export default Homepage;
