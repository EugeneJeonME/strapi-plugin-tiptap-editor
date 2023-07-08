/**
 *
 * PluginIcon
 *
 */

import { Flex, Icon } from '@strapi/design-system';
import React from 'react';
import styled from 'styled-components';

const IconBox = styled(Flex)`
  background-color: #f0f0ff; /* primary100 */
  border: 1px solid #d9d8ff; /* primary200 */
  svg > path {
    fill: #4945ff; /* primary600 */
  }
`;

const TiptapSvg = () => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M195 431 c-16 -4 -41 -14 -55 -22 -24 -13 -22 -14 38 -17 34 -2 90
-2 125 0 l62 3 -30 16 c-38 21 -101 30 -140 20z"
      />
      <path
        d="M66 334 c-3 -9 -6 -18 -6 -20 0 -2 81 -4 180 -4 99 0 180 2 180 4 0
2 -3 11 -6 20 -5 14 -30 16 -174 16 -144 0 -169 -2 -174 -16z"
      />
      <path
        d="M40 240 c0 -19 7 -20 200 -20 193 0 200 1 200 20 0 19 -7 20 -200 20
-193 0 -200 -1 -200 -20z"
      />
      <path
        d="M64 154 c3 -9 6 -18 6 -20 0 -2 77 -4 170 -4 94 0 170 2 170 4 0 2 3
11 6 20 5 14 -14 16 -176 16 -162 0 -181 -2 -176 -16z"
      />
      <path
        d="M120 85 c0 -15 72 -38 120 -38 48 0 120 23 120 38 0 3 -54 5 -120 5
-66 0 -120 -2 -120 -5z"
      />
    </g>
  </svg>
);

const PluginIcon = () => (
  <IconBox
    justifyContent="center"
    alignItems="center"
    height={6}
    width={7}
    hasRadius
    aria-hidden
  >
    <Icon as={TiptapSvg} />
  </IconBox>
);

export default PluginIcon;
