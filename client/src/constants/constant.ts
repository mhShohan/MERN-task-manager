import InboxIcon from '@mui/icons-material/MoveToInbox';
import Add from '@mui/icons-material/AdUnits';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

export interface ILink {
  id: number;
  name: string;
  link: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
}

export const sideBarData: Array<ILink> = [
  { id: 1, name: 'Dashboard', link: '/', icon: InboxIcon },
  { id: 2, name: 'Teams', link: '/teams', icon: Add },
  { id: 3, name: 'Tasks', link: '/tasks', icon: InboxIcon }
];
