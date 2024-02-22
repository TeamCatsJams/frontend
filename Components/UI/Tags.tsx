import { Button, ButtonProps } from '@mui/material'

type Props = {content:string}

function Tags(props: Props & ButtonProps) {
  return (
    <Button {...props} >{props.content}</Button>
  )
}

export default Tags