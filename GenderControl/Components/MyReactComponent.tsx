import * as React from 'react'
import Gender from './Gender'

export interface IMyReactComponentProps {
  gender?: number | undefined,
  onChange?: any
}

const MyReactComponent: React.FC<IMyReactComponentProps> = (props) => {
  return (
    <>
      <Gender selectedValue={props.gender} onChange={props.onChange} />
    </>
  )
}
export default MyReactComponent