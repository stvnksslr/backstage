/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import type { GridItemProps } from './types';
import { Box } from '../Box/Box';
import { argTypesSpacing, argTypesColor } from '../../../docs/utils/argTypes';
import { Stack } from '../Stack';

const meta = {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    ...argTypesSpacing,
    ...argTypesColor,
    children: {
      control: false,
    },
    className: {
      control: 'text',
    },
  },
  args: {
    gap: 'xs',
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const FakeBox = () => (
  <Box
    borderRadius="small"
    style={{ background: '#1f47ff', color: 'white', height: '64px' }}
  />
);

export const Default: Story = {
  args: {
    columns: 3,
  },
  render: args => (
    <Grid {...args}>
      <Grid.Item>
        <FakeBox />
      </Grid.Item>
      <Grid.Item>
        <FakeBox />
      </Grid.Item>
      <Grid.Item>
        <FakeBox />
      </Grid.Item>
    </Grid>
  ),
};

export const ColumnSizes: Story = {
  args: {
    columns: 12,
    gap: 'md',
  },
  render: args => (
    <Stack gap="md">
      {Array.from({ length: 11 }, (_, i) => (
        <Grid {...args} key={i}>
          <Grid.Item span={(i + 1) as GridItemProps['span']}>
            <FakeBox />
          </Grid.Item>
          <Grid.Item span={(11 - i) as GridItemProps['span']}>
            <FakeBox />
          </Grid.Item>
        </Grid>
      ))}
    </Stack>
  ),
};
