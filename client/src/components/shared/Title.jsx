import React from 'react'
import {Helmet} from 'react-helmet-async'
const Title = ({
    title="ChatMe",
    description="Chatting karo mere sath    "
}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta>name="description" content={description}</meta>
    </Helmet>
  )
}

export default Title