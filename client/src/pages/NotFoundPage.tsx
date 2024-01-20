import { Box, Button, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ bgcolor: theme.palette.primary.light }}
    >
      <Box width="400px" textAlign="center" border="1px solid gray" padding="2rem 4rem" borderRadius=".6rem">
        <Typography variant="h4">404 Not Found!</Typography>
        <p>The page you are looking for could not be found. Please check the URL or go back to the homepage.</p>
        <Link to="/">
          <Button variant="contained">Go Back to Homepage</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
