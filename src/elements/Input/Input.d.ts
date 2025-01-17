import * as React from 'react'

import { ForwardRefComponent, HtmlInputrops, SemanticShorthandItem } from '../../generic'
import { LabelProps } from '../Label'

export interface InputProps extends StrictInputProps {
  [key: string]: any
}

export interface StrictInputProps {
  /** An element type to render as (string or function). */
  as?: any

  /** An Input can be formatted to alert the user to an action they may perform. */
  action?: any | boolean

  /** An action can appear along side an Input on the left or right. */
  actionPosition?: 'left'

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** An Input field can show that it is disabled. */
  disabled?: boolean

  /** An Input field can show the data contains errors. */
  error?: boolean

  /** Take on the size of its container. */
  fluid?: boolean

  /** An Input field can show a user is currently interacting with it. */
  focus?: boolean

  /** Optional Icon to display inside the Input. */
  icon?: any | SemanticShorthandItem<InputProps>

  /** An Icon can appear inside an Input on the left. */
  iconPosition?: 'left'

  /** Shorthand for creating the HTML Input. */
  input?: SemanticShorthandItem<HtmlInputrops>

  /** Format to appear on dark backgrounds. */
  inverted?: boolean

  /** Optional Label to display along side the Input. */
  label?: SemanticShorthandItem<LabelProps>

  /** A Label can appear outside an Input on the left or right. */
  labelPosition?: 'left' | 'right' | 'left corner' | 'right corner'

  /** An Icon Input field can show that it is currently loading data. */
  loading?: boolean

  /**
   * Called on change.
   *
   * @param {ChangeEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   * @param {string} value - The value of the input.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, props: InputProps, value: string) => void

  /** An Input can vary in size. */
  size?: 'mini' | 'small' | 'large' | 'big' | 'huge' | 'massive'

  /** An Input can receive focus. */
  tabIndex?: number | string

  /** Transparent Input has no background. */
  transparent?: boolean

  /** The HTML input type. */
  type?: string
}

declare const Input: ForwardRefComponent<InputProps, HTMLInputElement>

export default Input
