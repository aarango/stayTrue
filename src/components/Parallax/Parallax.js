import React, { useRef, useState, useEffect } from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// core components
import styles from 'assets/jss/material-kit-pro-react/components/parallaxStyle.js'

const useStyles = makeStyles(styles)

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0
}

function Parallax(props) {
  let windowScrollTop
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3
  } else {
    windowScrollTop = 0
  }
  const [transform, setTransform] = React.useState('translate3d(0,' + windowScrollTop + 'px,0) ')
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform)
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform)
      }
    }
  })

  const videoParentRef = useRef()
  const [shouldUseImage, setShouldUseImage] = useState(false)
  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      const player = videoParentRef.current.children[0]

      if (player) {
        player.controls = false
        player.playsinline = true
        player.muted = true
        player.setAttribute('muted', '') // leave no stones unturned :)
        player.autoplay = true

        // Let's wait for an event loop tickyarn start and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play()
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                videoParentRef.current.style.display = 'none'
                setShouldUseImage(true)
              })
          }
        }, 0)
      }
    }
  }, [])

  const resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)')
  }

  const { filter, className, children, style, image, small, ...rest } = props
  const classes = useStyles()
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes[filter + 'Color']]: filter !== undefined,
    [classes.small]: small,
    [className]: className !== undefined,
  })

  // const videoStyle = {
  //   height: !isWidthUp('sm', rest.width) ? '100%' : 'inherit',
  // }
  return (
    <>
      {shouldUseImage ? (
        <>
          <div
            className={parallaxClasses}
            style={{
              width: '100%',
              // height: '90hv',
              ...style,
              transform: transform,
              objectFit: 'cover',
              position: 'relative',
              justifyContent: 'center',
              backgroundSize: 'cover',
            }}
            ref={videoParentRef}
            dangerouslySetInnerHTML={{
              __html: `
        <video
          loop
          muted
          preload 
          height='100%'
          width='100%'
          autoplay
          playsinline
          preload="metadata"
        >
        <source src="${image}" type="video/mp4" />
        </video>`,
            }}
          >
            {children}
          </div>
        </>
      ) : (
        <div
          className={parallaxClasses}
          style={{
            width: '100%',
            // height: '90hv',
            ...style,
            transform: transform,
            objectFit: 'cover',
            position: 'relative',
            justifyContent: 'center',
            backgroundSize: 'cover',
          }}
          ref={videoParentRef}
          dangerouslySetInnerHTML={{
            __html: `
        <video
          loop
          muted
          preload 
          height='100%'
          width='100%'
          autoplay
          playsinline
          preload="metadata"
        >
        <source src="${image}" type="video/mp4" />
        </video>`,
          }}
        >
          {children}
        </div>
      )}
    </>
  )
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.oneOf(['primary', 'rose', 'dark', 'info', 'success', 'warning', 'danger']),
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
}

export default Parallax
