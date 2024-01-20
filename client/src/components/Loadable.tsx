import { ComponentType, Suspense } from 'react';
import Loader from './Loader';

const Loadable = <P extends object>(WrapperComponent: ComponentType<P>) => {
  const Component = (props: P) => {
    return (
      <Suspense fallback={<Loader fullPage={true} />}>
        <WrapperComponent {...props} />
      </Suspense>
    );
  };

  return Component;
};

export default Loadable;
