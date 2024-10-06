// src/components/Dashboard.js
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import GuestList from './Guests/GuestList';
import EventDetails from './Event/EventDetails';
import Guestbook from './Guestbook/Guestbook';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
        <Typography variant="h4">Wedding Dashboard</Typography>
      </Box>

      <Grid container spacing={3} mt={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Guests
              </Typography>
              <GuestList />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Event Details
              </Typography>
              <EventDetails />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Guestbook
              </Typography>
              <Guestbook />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
