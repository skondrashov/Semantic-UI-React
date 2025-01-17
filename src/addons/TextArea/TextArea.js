import _ from 'lodash'
import PropTypes from 'prop-types'
import * as React from 'react'

import { getComponentType, getUnhandledProps, useMergedRefs } from '../../lib'

/**
 * A TextArea can be used to allow for extended user input.
 * @see Form
 */
const TextArea = React.forwardRef(function (props, ref) {
  const { rows = 3, value } = props
  const elementRef = useMergedRefs(ref, React.useRef())

  const handleChange = (e) => {
    const newValue = _.get(e, 'target.value')

    _.invoke(props, 'onChange', e, props, newValue)
  }

  const handleInput = (e) => {
    const newValue = _.get(e, 'target.value')

    _.invoke(props, 'onInput', e, props, newValue)
  }

  const rest = getUnhandledProps(TextArea, props)
  const ElementType = getComponentType(props, { defaultAs: 'textarea' })

  return (
    <ElementType
      {...rest}
      onChange={handleChange}
      onInput={handleInput}
      ref={elementRef}
      rows={rows}
      value={value}
    />
  )
})

TextArea.displayName = 'TextArea'
TextArea.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /**
   * Called on change.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange: PropTypes.func,

  /**
   * Called on input.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onInput: PropTypes.func,

  /** Indicates row count for a TextArea. */
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The value of the textarea. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default TextArea
