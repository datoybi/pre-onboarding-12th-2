import { styled } from 'styled-components';
import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  /* border: 1px solid gray; */
  width: 500px;
  margin: 0 auto;
`;
