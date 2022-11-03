import { useState } from 'react';
import PropTypes from 'prop-types';
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Switch } from '@mui/material';
import { useSettingsContext } from '@components/settings';

const ProfileMenu = (props) => {
  const [checked, setChecked] = useState(['darkMode']);
  const { onToggleMode } = useSettingsContext();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (value === 'darkMode') {
      onToggleMode();
    }

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <>
      {' '}
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItemButton onClick={handleToggle('darkMode')}>
          {/* <ListItemIcon>
            <WifiIcon />
          </ListItemIcon> */}
          <ListItemText id="switch-list-label-darkMode" primary="Dark Mode" />
          <Switch
            edge="end"
            onChange={handleToggle('darkMode')}
            checked={checked.indexOf('darkMode') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-darkMode',
            }}
          />
        </ListItemButton>
        <ListItemButton>
          {/* <ListItemIcon>
            <WifiIcon />
          </ListItemIcon> */}
          <ListItemText id="switch-list-label-wifi" primary="Backup Wallet" />
        </ListItemButton>
        <ListItemButton>
          {/* <ListItemIcon>
            <WifiIcon />
          </ListItemIcon> */}
          <ListItemText id="switch-list-label-wifi" primary="Current Network" />
        </ListItemButton>
        <ListItemButton>
          {/* <ListItemIcon>
            <WifiIcon />
          </ListItemIcon> */}
          <ListItemText id="switch-list-label-wifi" primary="Settings" />
        </ListItemButton>
      </List>
    </>
  );
};

ProfileMenu.propTypes = {};

export default ProfileMenu;
