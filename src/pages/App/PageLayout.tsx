import { ReactNode } from 'react';
import Header from '../../components/Header';
import Container from '../../components/Container';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Header />
      <Container>{children}</Container>
    </Container>
  );
}
