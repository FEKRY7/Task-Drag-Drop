import React  from 'react'
import { useDrag } from 'react-dnd'
const Picture = ({ id, url }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "text",
    item:{id:id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  
  return (
    <>
  <div class="subscribe" ref={drag}>
  <input placeholder={url} class="subscribe-input" name="text" type="text"/>
<br/>
  </div>
    </>
  )
}

export default Picture