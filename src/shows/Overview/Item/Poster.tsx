import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 10rem;
  height: 15rem;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
`;

interface Props {
  src: string;
  alt?: string;
  className?: string;
}
const Poster: FC<Props> = ({ src, alt, className }) => (
  <Wrapper className={className}>
    <Img src={src} alt={alt} />
  </Wrapper>
);

export default Poster;
