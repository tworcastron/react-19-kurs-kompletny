import { useEffect, useState } from "react"

const withMousePosition = (WrappedComponent) => (props) => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const updatePostion = (e) => {
    setX(e.pageX) 
    setY(e.pageY)
  }

  useEffect(() => {
    document.body.addEventListener('mousemove', updatePostion)
  }, [])

  return <WrappedComponent {...props} mouseX={x} mouseY={y} />
}

export default withMousePosition