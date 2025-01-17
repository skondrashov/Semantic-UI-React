import * as React from 'react'
import * as Popper from '@popperjs/core'

import { SemanticShorthandItem } from '../../generic'
import { StrictPortalProps } from '../../addons/Portal'
import PopupContent, { PopupContentProps } from './PopupContent'
import PopupHeader, { PopupHeaderProps } from './PopupHeader'

type PopperOffsetsFunctionParams = {
  popper: Popper.Rect
  reference: Popper.Rect
  placement: Popper.Placement
}
type PopperOffsetsFunction = (params: PopperOffsetsFunctionParams) => [number?, number?]

export interface PopupProps extends StrictPopupProps {
  [key: string]: any
}

export interface StrictPopupProps extends StrictPortalProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Display the popup without the pointing arrow */
  basic?: boolean

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Simple text content for the popover. */
  content?: SemanticShorthandItem<PopupContentProps>

  /** Existing element the pop-up should be bound to. */
  context?: Document | Window | HTMLElement | React.RefObject<HTMLElement>

  /** A disabled popup only renders its trigger. */
  disabled?: boolean

  /** Enables the Popper.js event listeners. */
  eventsEnabled?: boolean

  /** A flowing Popup has no maximum width and continues to flow to fit its content. */
  flowing?: boolean

  /** Header displayed above the content in bold. */
  header?: SemanticShorthandItem<PopupHeaderProps>

  /** Hide the Popup when scrolling the window. */
  hideOnScroll?: boolean

  /** Whether the popup should not close on hover. */
  hoverable?: boolean

  /** Invert the colors of the popup */
  inverted?: boolean

  /**
   * Offset values in px unit to apply to rendered popup. The basic offset accepts an
   * array with two numbers in the form [skidding, distance]:
   * - `skidding` displaces the Popup along the reference element
   * - `distance` displaces the Popup away from, or toward, the reference element in the direction of its placement. A positive number displaces it further away, while a negative number lets it overlap the reference.
   *
   * @see https://popper.js.org/docs/v2/modifiers/offset/
   */
  offset?: [number, number?] | PopperOffsetsFunction

  /** Events triggering the popup. */
  on?: 'hover' | 'click' | 'focus' | ('hover' | 'click' | 'focus')[]

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   * @param {boolean} open - Whether the popup is displayed.
   */
  onClose?: (event: React.MouseEvent<HTMLElement>, props: PopupProps, open: boolean) => void

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} props - All props.
   */
  onMount?: (nothing: null, props: PopupProps) => void

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   * @param {boolean} open - Whether the popup is displayed
   */
  onOpen?: (event: React.MouseEvent<HTMLElement>, props: PopupProps, open: boolean) => void

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} props - All props.
   */
  onUnmount?: (nothing: null, props: PopupProps) => void

  /** Disables automatic repositioning of the component, it will always be placed according to the position value. */
  pinned?: boolean

  /** Position for the popover. */
  position?:
    | 'top left'
    | 'top right'
    | 'bottom right'
    | 'bottom left'
    | 'right center'
    | 'left center'
    | 'top center'
    | 'bottom center'

  /** Tells `Popper.js` to use the `position: fixed` strategy to position the popover. */
  positionFixed?: boolean

  /** A wrapping element for an actual content that will be used for positioning. */
  popper?: SemanticShorthandItem<React.HTMLAttributes<HTMLDivElement>>

  /** An array containing custom settings for the Popper.js modifiers. */
  popperModifiers?: any[]

  /** A popup can have dependencies which update will schedule a position update. */
  popperDependencies?: any[]

  /** Popup size. */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'huge'

  /** Custom Popup style. */
  style?: React.CSSProperties

  /** Element to be rendered in-place where the popup is defined. */
  trigger?: React.ReactNode

  /** Popup width. */
  wide?: boolean | 'very'
}

declare const Popup: React.FC<PopupProps> & {
  Content: typeof PopupContent
  Header: typeof PopupHeader
}

export default Popup
