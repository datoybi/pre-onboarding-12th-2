import { ReactNode } from 'react';
import Header from '../../components/UI/Header';
import Container from '../../components/UI/Container';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Header />
      <Container>{children}</Container>
    </Container>
  );
}
