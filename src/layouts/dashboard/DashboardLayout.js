import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Box } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// auth
import AuthGuard from '../../auth/AuthGuard';
// components
import { useSettingsContext } from '../../components/settings';
//
import Main from './Main';
import Header from './header';
import NavMini from './nav/NavMini';
import NavVertical from './nav/NavVertical';
import NavHorizontal from './nav/NavHorizontal';
import { BottomNavigation } from '../bottom-navigation';

// ----------------------------------------------------------------------

DashboardLayout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string.isRequired,
};

export default function DashboardLayout({ pageTitle, children }) {
  const { themeLayout } = useSettingsContext();

  const isDesktop = useResponsive('up', 'lg');

  const [open, setOpen] = useState(false);

  const isNavHorizontal = themeLayout === 'horizontal';

  const isNavMini = themeLayout === 'mini';

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderNavVertical = <NavVertical openNav={open} onCloseNav={handleClose} />;

  const renderContent = () => (
    // if (isNavHorizontal) {
    //   return (
    //     <>
    //       <Header onOpenNav={handleOpen} />

    //       {isDesktop ? <NavHorizontal /> : renderNavVertical}

    //       <Main>{children}</Main>
    //     </>
    //   );
    // }

    // if (isNavMini) {
    //   return (
    //     <>
    //       <Header onOpenNav={handleOpen} />

    //       <Box
    //         sx={{
    //           display: { lg: 'flex' },
    //           minHeight: { lg: 1 },
    //         }}
    //       >
    //         {isDesktop ? <NavMini /> : renderNavVertical}

    //         <Main>{children}</Main>
    //       </Box>
    //     </>
    //   );
    // }

    <>
      <Header onOpenNav={handleOpen} pageTitle={pageTitle} />

      <Box
        sx={{
          display: { lg: 'flex' },
          minHeight: { lg: 1 },
        }}
      >
        <BottomNavigation />

        {/* {renderNavVertical} */}

        <Main>{children}</Main>
      </Box>
    </>
  );
  return <AuthGuard> {renderContent()}</AuthGuard>;
}
