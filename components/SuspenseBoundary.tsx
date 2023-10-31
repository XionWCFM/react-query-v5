import { ErrorBoundary, Suspense } from '@suspensive/react';

interface SuspenseBoundaryProps {
  error: React.ReactElement;
  suspense: React.ReactElement;
  children?: React.ReactNode;
}

const SuspenseBoundary = ({
  children,
  error,
  suspense,
}: SuspenseBoundaryProps) => {
  return (
    <ErrorBoundary fallback={error}>
      <Suspense fallback={suspense}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseBoundary;
