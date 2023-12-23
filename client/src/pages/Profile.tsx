import Loader from '../components/Loader';
import { useGetSelfProfileQuery } from '../store/features/userApi';

const Profile = () => {
  const { isLoading, data } = useGetSelfProfileQuery();

  if (isLoading) return <Loader fullPage={false} />;

  return (
    <div>
      <p>
        Name: {data?.firstName} {data?.lastName}
      </p>
      <p> Name: {data?.email}</p>
    </div>
  );
};

export default Profile;
