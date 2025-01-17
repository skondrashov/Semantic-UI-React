import * as React from 'react'

import { ForwardRefComponent, SemanticShorthandItem } from '../../generic'
import PaginationItem, { PaginationItemProps } from './PaginationItem'

export interface PaginationProps extends StrictPaginationProps {
  [key: string]: any
}

export interface StrictPaginationProps {
  /** A pagination item can have an aria label. */
  'aria-label'?: string

  /** Initial activePage value. */
  defaultActivePage?: number | string

  /** Index of the currently active page. */
  activePage?: number | string

  /** Number of always visible pages at the beginning and end. */
  boundaryRange?: number | string

  /** A pagination can be disabled. */
  disabled?: boolean

  /** A shorthand for PaginationItem. */
  ellipsisItem?: SemanticShorthandItem<PaginationItemProps>

  /** A shorthand for PaginationItem. */
  firstItem?: SemanticShorthandItem<PaginationItemProps>

  /** A shorthand for PaginationItem. */
  lastItem?: SemanticShorthandItem<PaginationItemProps>

  /** A shorthand for PaginationItem. */
  nextItem?: SemanticShorthandItem<PaginationItemProps>

  /** A shorthand for PaginationItem. */
  pageItem?: SemanticShorthandItem<PaginationItemProps>

  /** A shorthand for PaginationItem. */
  prevItem?: SemanticShorthandItem<PaginationItemProps>

  /**
   * Called on change of an active page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   * @param {number} activePage - Index of the newly active page.
   */
  onPageChange?: (
    event: React.MouseEvent<HTMLAnchorElement>,
    props: PaginationProps,
    activePage: number,
  ) => void

  /** Number of always visible pages before and after the current one. */
  siblingRange?: number | string

  /** Total number of pages. */
  totalPages: number | string
}

declare const Pagination: ForwardRefComponent<PaginationProps, HTMLDivElement> & {
  Item: typeof PaginationItem
}

export default Pagination
