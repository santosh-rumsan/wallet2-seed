// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_ASSETS = '/assets';
const ROOTS_PROFILE = '/profile';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    four: path(ROOTS_DASHBOARD, '/user/four'),
    five: path(ROOTS_DASHBOARD, '/user/five'),
    six: path(ROOTS_DASHBOARD, '/user/six'),
  },
};

export const PATH_ASSETS = {
  root: ROOTS_ASSETS,
};

export const PATH_PROFILE = {
  root: ROOTS_PROFILE,
};

export const BOTTOM_NAVIGATION_OPTIONS = [
  {
    path: PATH_DASHBOARD.root,
    label: 'Home',
    icon: 'eva:home-outline',
    // icon: <DashboardIcon />,
  },
  {
    path: PATH_ASSETS.root,
    label: 'Assets',
    icon: 'eva:briefcase-outline',
  },
  {
    path: PATH_ASSETS.root,
    label: '',
    icon: 'fluent:qr-code-24-filled',
    sx: {
      fontWeight: 'fontWeightBold',
      // borderRadius: '50%',
      backgroundColor: 'primary.main',
      color: 'primary.contrastText',
    },
    iconStyle: {
      transform: 'scale(2)',
    },
  },
  {
    path: PATH_ASSETS.root,
    label: 'Doc Vault',
    icon: 'eva:file-outline',
  },
  {
    path: PATH_PROFILE.root,
    label: 'Profile',
    icon: 'eva:person-outline',
  },
];
