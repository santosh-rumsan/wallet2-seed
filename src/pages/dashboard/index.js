// next
import Head from 'next/head';
import { Container, Typography } from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/dashboard';
// components
import { useSettingsContext } from '../../components/settings';
import Page from '@components/Page';

const PAGE_TITLE = 'Home';

// ----------------------------------------------------------------------

PageOne.getLayout = (page) => <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function PageOne() {
  const { themeStretch } = useSettingsContext();

  return (
    <Page title={PAGE_TITLE}>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Rumsan Wallet
        </Typography>

        <Typography gutterBottom>Welcome Buddy</Typography>
      </Container>
    </Page>
  );
}
