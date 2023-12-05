import {
  ListItemIconProps,
  ListItemProps,
  ListItemTextProps,
  ListItem as MuiListItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const ListItem = styled(MuiListItem)<ListItemProps>(({ theme }) => ({
  transition: 'all ease 300ms',
  borderBottom: `1px solid ${theme.palette.primary.light}`,
  '&:hover': {
    background: theme.palette.secondary.light,
    '& .MuiSvgIcon-root': {
      fill: theme.palette.primary.main
    },
    '& .MuiTypography-root': {
      color: theme.palette.primary.main
    }
  }
}));

export const ListItemIcon = styled(MuiListItemIcon)<ListItemIconProps>(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    fill: theme.palette.secondary.light
  }
}));

export const ListItemText = styled(MuiListItemText)<ListItemTextProps>(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontWeight: 900
}));
