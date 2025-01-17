import * as React from 'react'

import { ForwardRefComponent, SemanticShorthandItem } from '../../generic'
import { StrictPortalProps } from '../../addons/Portal'
import ModalActions, { ModalActionsProps } from './ModalActions'
import ModalContent, { ModalContentProps } from './ModalContent'
import ModalDescription from './ModalDescription'
import ModalDimmer, { ModalDimmerProps } from './ModalDimmer'
import ModalHeader, { ModalHeaderProps } from './ModalHeader'

export interface ModalProps extends StrictModalProps {
  [key: string]: any
}

export interface StrictModalProps extends StrictPortalProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions?: SemanticShorthandItem<ModalActionsProps>

  /** A Modal can reduce its complexity */
  basic?: boolean

  /** A modal can be vertically centered in the viewport. */
  centered?: boolean

  /** Primary content. */
  children?: React.ReactNode

  /** Additional classes. */
  className?: string

  /** Icon. */
  closeIcon?: any

  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick?: boolean

  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick?: boolean

  /** A Modal can be passed content via shorthand. */
  content?: SemanticShorthandItem<ModalContentProps>

  /** Initial value of open. */
  defaultOpen?: boolean

  /** A modal can appear in a dimmer. */
  dimmer?: true | 'blurring' | 'inverted' | SemanticShorthandItem<ModalDimmerProps>

  /** Event pool namespace that is used to handle component events */
  eventPool?: string

  /** A Modal can be passed header via shorthand. */
  header?: SemanticShorthandItem<ModalHeaderProps>

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode?: any

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   */
  onActionClick?: (event: React.MouseEvent<HTMLElement>, props: ModalProps) => void

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   * @param {boolean} open - Whether the modal is displayed.
   */
  onClose?: (event: React.MouseEvent<HTMLElement>, props: ModalProps, open: boolean) => void

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} props - All props.
   */
  onMount?: (nothing: null, props: ModalProps) => void

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} props - All props.
   * @param {boolean} open - Whether the modal is displayed.
   */
  onOpen?: (event: React.MouseEvent<HTMLElement>, props: ModalProps, open: boolean) => void

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} props - All props.
   */
  onUnmount?: (nothing: null, props: ModalProps) => void

  /** Controls whether or not the Modal is displayed. */
  open?: boolean

  /** A modal can vary in size. */
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen'

  /** Custom styles. */
  style?: React.CSSProperties

  /** Element to be rendered in-place where the portal is defined. */
  trigger?: React.ReactNode
}

declare const Modal: ForwardRefComponent<ModalProps, HTMLDivElement> & {
  Actions: typeof ModalActions
  Content: typeof ModalContent
  Description: typeof ModalDescription
  Dimmer: typeof ModalDimmer
  Header: typeof ModalHeader
}

export default Modal
