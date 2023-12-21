import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItem, ListItemIcon, ListItemText } from './extends/SideBar';
import { ILink } from '../constants/constant';

const SideBarLink = ({ link, pathname }: { link: ILink; pathname: string }) => {
  return (
    <Link to={link.link} style={{ textDecoration: 'none' }}>
      <ListItem disablePadding isActive={pathname === link.link}>
        <ListItemButton>
          <ListItemIcon>
            <link.icon />
          </ListItemIcon>
          <ListItemText primary={link.name} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SideBarLink;
