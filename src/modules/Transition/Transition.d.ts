import * as React from 'react'

import { SemanticTRANSITIONS } from '../../generic'
import TransitionGroup from './TransitionGroup'

export type TRANSITION_STATUSES = 'ENTERED' | 'ENTERING' | 'EXITED' | 'EXITING' | 'UNMOUNTED'

export interface TransitionProps extends StrictTransitionProps {
  [key: string]: any
}

export interface StrictTransitionProps {
  /** Named animation event to used. Must be defined in CSS. */
  animation?: SemanticTRANSITIONS | string

  /** Primary content. */
  children?: React.ReactNode

  /** Whether it is directional animation event or not. Use it only for custom transitions. */
  directional?: boolean

  /** Duration of the CSS transition animation in milliseconds. */
  duration?: number | string | TransitionPropDuration

  /** Show the component; triggers the enter or exit animation. */
  visible?: boolean

  /** Wait until the first "enter" transition to mount the component (add it to the DOM). */
  mountOnShow?: boolean

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} props - All props.
   * @param {TRANSITION_STATUSES} status - Transition status.
   */
  onComplete?: (nothing: null, props: TransitionProps, status: TRANSITION_STATUSES) => void

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} props - All props.
   * @param {TRANSITION_STATUSES} status - Transition status.
   */
  onHide?: (nothing: null, props: TransitionProps, status: TRANSITION_STATUSES) => void

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} props - All props.
   * @param {TRANSITION_STATUSES} status - Transition status.
   */
  onShow?: (nothing: null, props: TransitionProps, status: TRANSITION_STATUSES) => void

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} props - All props.
   * @param {TRANSITION_STATUSES} status - Transition status.
   */
  onStart?: (nothing: null, props: TransitionProps, status: TRANSITION_STATUSES) => void

  /** React's key of the element. */
  reactKey?: string

  /** Run the enter animation when the component mounts, if it is initially shown. */
  transitionOnMount?: boolean

  /** Unmount the component (remove it from the DOM) when it is not shown. */
  unmountOnHide?: boolean
}

export interface TransitionPropDuration {
  hide: number
  show: number
}

interface TransitionComponent extends React.ComponentClass<TransitionProps> {
  Group: typeof TransitionGroup
}

declare const Transition: TransitionComponent

export default Transition
