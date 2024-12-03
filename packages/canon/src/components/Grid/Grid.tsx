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

import { createElement } from 'react';
import { GridItemProps, GridProps } from './types';
import { gridItemSprinkles, gridSprinkles } from './sprinkles.css';

export const Grid = ({
  children,
  columns = 1,
  gap = 'xs',
  className,
  style,
  ...restProps
}: GridProps) => {
  const sprinklesClassName = gridSprinkles({
    ...restProps,
    gap,
    gridTemplateColumns: columns,
  });

  const classNames = ['grid', sprinklesClassName, className]
    .filter(Boolean)
    .join(' ');

  return createElement(
    'div',
    {
      className: classNames,
      style,
    },
    children,
  );
};

const GridItem = ({
  children,
  span = 1,
  start,
  end,
  className,
  style,
}: GridItemProps) => {
  const sprinklesClassName = gridItemSprinkles({
    span,
    start,
    end,
  });

  const classNames = ['grid-item', sprinklesClassName, className]
    .filter(Boolean)
    .join(' ');

  return createElement('div', { className: classNames, style }, children);
};

Grid.Item = GridItem;
