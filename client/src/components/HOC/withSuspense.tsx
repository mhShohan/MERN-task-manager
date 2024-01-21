import { ComponentType, Suspense } from 'react';
import Loader from '../Loader';

const withSuspense = <P extends object>(Component: ComponentType<P>) => {
  const WrapperComponent = (props: P) => {
    return (
      <Suspense fallback={<Loader fullPage={true} />}>
        <Component {...props} />
      </Suspense>
    );
  };

  return WrapperComponent;
};

export default withSuspense;
