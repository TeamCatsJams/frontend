import React, { ReactNode } from 'react'

type Props = {children:ReactNode}

function RootLayout(props: Props) {
  return (
    

    <>
            {props.children}
    </>
  )
}

export default RootLayout