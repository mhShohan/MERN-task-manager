import { useGetSelfProfileQuery } from '../store/features/userApi';

const Profile = () => {
  const { data } = useGetSelfProfileQuery(undefined);

  console.log(data);

  return <div></div>;
};

export default Profile;
