import * as React from 'react'

import { ForwardRefComponent, SemanticShorthandItem } from '../../generic'
import { InputProps } from '../../elements/Input'
import SearchCategory, { SearchCategoryProps } from './SearchCategory'
import SearchResult, { SearchResultProps } from './SearchResult'
import SearchResults from './SearchResults'
import { SearchCategoryLayoutProps } from './SearchCategoryLayout'

export interface SearchProps extends StrictSearchProps {
  [key: string]: any
}

export interface StrictSearchProps {
  /** An element type to render as (string or function). */
  as?: any

  // ------------------------------------
  // Behavior
  // ------------------------------------

  /** Initial value of open. */
  defaultOpen?: boolean

  /** Initial value. */
  defaultValue?: string

  /** Shorthand for Icon. */
  icon?: any

  /** Minimum characters to query for results. */
  minCharacters?: number

  /** Additional text for "No Results" message with less emphasis. */
  noResultsDescription?: React.ReactNode

  /** Message to display when there are no results. */
  noResultsMessage?: React.ReactNode

  /** Controls whether or not the results menu is displayed. */
  open?: boolean

  /**
   * One of:
   * - array of Search.Result props e.g. `{ title: '', description: '' }` or
   * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
   */
  results?: any[] | Record<string, any>

  /** Whether the search should automatically select the first result after searching. */
  selectFirstResult?: boolean

  /** Whether a "no results" message should be shown if no results are found. */
  showNoResults?: boolean

  /** Current value of the search input. Creates a controlled component. */
  value?: string

  // ------------------------------------
  // Rendering
  // ------------------------------------
  /**
   * Renders the SearchCategory layout.
   *
   * @param {object} props - The SearchCategoryLayout props object.
   * @returns {*} - Renderable SearchCategory layout.
   */
  categoryLayoutRenderer?: (
    props: Pick<SearchCategoryLayoutProps, 'categoryContent' | 'resultsContent'>,
  ) => React.ReactElement<any>

  /**
   * Renders the SearchCategory contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable SearchCategory contents.
   */
  categoryRenderer?: (props: SearchCategoryProps) => React.ReactElement<any>

  /**
   * Renders the SearchResult contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable SearchResult contents.
   */
  resultRenderer?: (props: SearchResultProps) => React.ReactElement<any>

  // ------------------------------------
  // Callbacks
  // ------------------------------------

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   */
  onBlur?: (event: React.MouseEvent<HTMLElement>, props: SearchProps) => void

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   */
  onFocus?: (event: React.MouseEvent<HTMLElement>, props: SearchProps) => void

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   */
  onMouseDown?: (event: React.MouseEvent<HTMLElement>, props: SearchProps) => void

  /**
   * Called when a result is selected.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   * @param {any} result - The search result.
   */
  onResultSelect?: (
    event: React.MouseEvent<HTMLDivElement>,
    props: SearchProps,
    result: any,
  ) => void

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   * @param {string} query - Current value of search input.
   */
  onSearchChange?: (event: React.MouseEvent<HTMLElement>, props: SearchProps, query: string) => void

  /**
   * Called when the active selection index is changed.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   * @param {any} result - The search result.
   */
  onSelectionChange?: (
    event: React.MouseEvent<HTMLElement>,
    props: SearchProps,
    result: any,
  ) => void

  // ------------------------------------
  // Style
  // ------------------------------------

  /** A search can have its results aligned to its left or right container edge. */
  aligned?: string

  /** A search can display results from remote content ordered by categories. */
  category?: boolean

  /** Additional classes. */
  className?: string

  /** A search can have its results take up the width of its container. */
  fluid?: boolean

  /** Shorthand for input element. */
  input?: SemanticShorthandItem<InputProps>

  /** A search can show a loading indicator. */
  loading?: boolean

  /** A search can have different sizes. */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'big' | 'huge' | 'massive'

  /** A search can show placeholder text when empty. */
  placeholder?: string
}

declare const Search: ForwardRefComponent<SearchProps, HTMLDivElement> & {
  Category: typeof SearchCategory
  Result: typeof SearchResult
  Results: typeof SearchResults
}

export default Search
