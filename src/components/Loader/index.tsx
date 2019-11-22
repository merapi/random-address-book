import { Color, Spacing } from 'design'
import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
  withOuter?: boolean
}

const BareLoader = ({ className, withOuter }: Props) => {
  let jsx = []
  const [smallIsVisible, setSmallIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const loaderOvserved = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries.length && entries[0].target === ref.current) {
        setSmallIsVisible(!entries[0].isIntersecting)
      }
    },
    [setSmallIsVisible],
  )

  useEffect(() => {
    const target = ref.current
    const observer = new IntersectionObserver(loaderOvserved)
    if (target) {
      observer.observe(target)
    }

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [loaderOvserved])

  const loader = (key: string, ref?: RefObject<HTMLDivElement>) => (
    <div key={key} ref={ref} className={className}>
      <div className="sk-fading-circle">
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
        <div className="sk-circle9 sk-circle"></div>
        <div className="sk-circle10 sk-circle"></div>
        <div className="sk-circle11 sk-circle"></div>
        <div className="sk-circle12 sk-circle"></div>
      </div>
    </div>
  )

  if (withOuter) {
    jsx.push(<Outer key="outer">{loader('mainLoader', ref)}</Outer>)
  } else {
    jsx.push(loader('mainLoader', ref))
  }

  if (smallIsVisible) {
    jsx.push(
      <Absolute key="absoluteLoader">
        <Outer padding={Spacing.Small}>{loader('absoluteLoader')}</Outer>
      </Absolute>,
    )
  }

  return <>{jsx}</>
}

const Absolute = styled.div`
  position: fixed;
  z-index: 2;
  top: 10px;
  left: 10px;
`

const Outer = styled.div<{ padding?: Spacing }>`
  padding: ${({ padding = Spacing.Medium }) => padding}px;
  background: white;
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.22);
  transition: all 0.1s;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default styled(BareLoader)`
  width: 40px;
  height: 40px;
  position: relative;

  .sk-circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .sk-circle:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: ${Color.Primary};
    border-radius: 100%;
    animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
  }
  .sk-circle2 {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
  }
  .sk-circle3 {
    -webkit-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg);
  }
  .sk-circle4 {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .sk-circle5 {
    -webkit-transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    transform: rotate(120deg);
  }
  .sk-circle6 {
    -webkit-transform: rotate(150deg);
    -ms-transform: rotate(150deg);
    transform: rotate(150deg);
  }
  .sk-circle7 {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .sk-circle8 {
    -webkit-transform: rotate(210deg);
    -ms-transform: rotate(210deg);
    transform: rotate(210deg);
  }
  .sk-circle9 {
    -webkit-transform: rotate(240deg);
    -ms-transform: rotate(240deg);
    transform: rotate(240deg);
  }
  .sk-circle10 {
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  .sk-circle11 {
    -webkit-transform: rotate(300deg);
    -ms-transform: rotate(300deg);
    transform: rotate(300deg);
  }
  .sk-circle12 {
    -webkit-transform: rotate(330deg);
    -ms-transform: rotate(330deg);
    transform: rotate(330deg);
  }
  .sk-circle2:before {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  .sk-circle3:before {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  .sk-circle4:before {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  .sk-circle5:before {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  .sk-circle6:before {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }
  .sk-circle7:before {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }
  .sk-circle8:before {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }
  .sk-circle9:before {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }
  .sk-circle10:before {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }
  .sk-circle11:before {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s;
  }
  .sk-circle12:before {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s;
  }

  @-webkit-keyframes sk-circleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }

  @keyframes sk-circleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
`
