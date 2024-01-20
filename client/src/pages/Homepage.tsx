import Loader from '../components/Loader';
import { useGetSelfProfileQuery } from '../store/features/userApi';

const Homepage = () => {
  const { data } = useGetSelfProfileQuery(undefined);

  console.log(data);
  return (
    <div>
      <Loader fullPage={false} />
    </div>
  );
};

export default Homepage;
