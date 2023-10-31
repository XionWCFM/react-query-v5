import { ErrorBoundary, Suspense } from '@suspensive/react';

interface SuspenseBoundaryProps {
  error: React.ReactElement;
  suspense?: React.ReactElement;
}

const SuspenseBoundary = ({ error, suspense }: SuspenseBoundaryProps) => {
  return (
    <ErrorBoundary fallback={error}>
      <Suspense fallback={suspense}></Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseBoundary;
