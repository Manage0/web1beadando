import React from 'react'
import { Helmet } from 'react-helmet'

const TITLE ="Ultimate Cat Site"

class TitleSetter extends React.PureComponent {
  render () {
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      </>
    )
  }
}

export default TitleSetter