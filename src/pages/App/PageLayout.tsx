import { ReactNode } from 'react';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      {/* <Header />
      <Container>{children}</Container> */}
    </div>
  );
}
