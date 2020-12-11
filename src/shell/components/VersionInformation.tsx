import React from 'react';
import styled from 'styled-components';

const VersionInformationElement = styled.p`
  bottom: 30px;
  color: white;
  font-size: 14px;
  margin: 4px;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: right;
  user-select: none;
  font-family: sans-serif;
`;

const VersionInformation = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
  const packageJson = require('../../../package.json');

  return (
    <VersionInformationElement>
      {packageJson.name} Version {packageJson.version}
    </VersionInformationElement>
  );
};
export default VersionInformation;