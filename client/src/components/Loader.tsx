import { styled } from '@mui/material/styles';

interface LoaderProps {
  fullPage: boolean;
}

const Loader = ({ fullPage = true }: LoaderProps) => {
  if (!fullPage) {
    return (
      <LoaderWrapper>
        <Spinner />
      </LoaderWrapper>
    );
  }

  return (
    <LoaderWrapperFull>
      <Spinner />
    </LoaderWrapperFull>
  );
};

export default Loader;

const LoaderWrapperFull = styled('div')({
  backgroundColor: 'lightcyan',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh'
});
const LoaderWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2rem'
});

export const Spinner = styled('span')(({ theme }) => ({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  display: 'inline-block',
  borderTop: `10px solid ${theme.palette.primary.main}`,
  borderTight: '10px solid transparent',
  boxSizing: 'border-box',
  animation: 'rotation 1s linear infinite',
  '&::after': {
    content: `' '`,
    boxSizing: 'border-box',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    borderLeft: `10px solid ${theme.palette.secondary.main}`,
    borderBottom: '10px solid transparent',
    animation: 'rotation 0.4s linear infinite reverse'
  },
  '@keyframes rotation': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  }
}));
