import { ReactNode } from 'react';
import { Header, Container } from '../../components/UI';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Header />
      <Container>{children}</Container>
    </Container>
  );
}
