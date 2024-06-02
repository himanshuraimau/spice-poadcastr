import React from 'react'

const PoadcastDetails = ({params}:{params: {poadcastId:string}}) => {
  return (
    <p className='text-black-1'>PoadcastDetails for {params.poadcastId}</p>
  )
}
export default PoadcastDetails