import { useGetSelfProfileQuery } from '../store/features/userApi';

const ProfilePage = () => {
  const { data } = useGetSelfProfileQuery(undefined);

  console.log(data);

  return <div></div>;
};

export default ProfilePage;
