import styled from 'styled-components';

import { Config } from '../types';

type WindowAreaProps = {
  config: Config;
};
const WindowArea = styled.div<WindowAreaProps>`
  background: rgb(10, 36, 106);
  bottom: ${(props) => props.config.taskbarHeight}px;
  box-sizing: border-box;
  font-family: sans-serif;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
`;
export default WindowArea;
