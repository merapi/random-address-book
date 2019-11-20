import React, { MouseEvent, ReactNode, useRef } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  onClose?: () => void
  children: ReactNode
}

const BareModal = ({ className, children, onClose }: Props) => {
  const node = useRef<HTMLDivElement>(null)

  const checkTarget = (event: MouseEvent) => {
    if (onClose && event.target === node.current) {
      onClose()
    }
  }
  return (
    <div ref={node} className={className} onClick={checkTarget}>
      {children}
    </div>
  )
}

const Inner = styled.div``

export default styled(BareModal)`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20%;
  cursor: zoom-out;
  & * {
    cursor: auto;
  }
`
