import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native'

export default class Button extends React.Component {
  render() {
    const { color, backgroundColor, ...props } = this.props
    return (
      <TouchableOpacity {...props} style={[
        styles.container,
        {
          opacity: this.props.disabled ? 0.5 : 1,
          backgroundColor: backgroundColor,
        },
      ]}
      >
        {this.props.loading ?
          <ActivityIndicator size={'small'} color={color} /> :
          <Text style={[styles.label, { color: color }]}>{this.props.children}</Text>}
      </TouchableOpacity>
    )
  }
}

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
}

Button.defaultProps = {
  color: '#fff',
  backgroundColor: '#0068ff',
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  }
})
