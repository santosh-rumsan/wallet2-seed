// hooks
// import useAuth from '../hooks/useAppAuth';
// utils
import createAvatar from '@utils/createAvatar';
//
import Avatar from '@components/Avatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  //   const { user } = useAuth();

  return (
    <Avatar src={null} alt={'A'} color={'default' ?? createAvatar('A').color} {...other}>
      {createAvatar('A').name}
    </Avatar>
  );
}
