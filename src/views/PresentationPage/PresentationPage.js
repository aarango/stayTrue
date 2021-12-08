/*eslint-disable*/
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// core components
import Header from 'components/Header/Header.js'
import HeaderLinks from 'components/Header/HeaderLinks.js'
import Parallax from 'components/Parallax/Parallax.js'
import Footer from 'components/Footer/Footer.js'
import Button from 'components/CustomButtons/Button.js'

// sections for this page
import SectionIntroduction from './Sections/SectionIntroduction'
import SectionLocation from './Sections/SectionLocation'
import SectioncCurses from './Sections/SectionCurses'
import SectionDescription from 'views/PresentationPage/Sections/SectionDescription.js'
import SectionsSpots from './Sections/SectionsSpots'
import Logo from 'assets/img/logo.png'
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.js'
import SectionTeams from './Sections/SectionTeams'
import SectionPackages from './Sections/SectionPackages'
import SectionActivitis from './Sections/SectionActivitis'
import ListItemIcon from '@material-ui/core/ListItemIcon'

const useStyles = makeStyles(presentationStyle)

const updateView = () => {
  var contentSections = document.getElementsByClassName('cd-section')
  var navigationItems = document.getElementById('cd-vertical-nav')?.getElementsByTagName('a')

  for (let i = 0; i < contentSections.length; i++) {
    var activeSection = parseInt(navigationItems[i].getAttribute('data-number'), 10) - 1
    if (
      contentSections[i].offsetTop - window.innerHeight / 2 < window.pageYOffset &&
      contentSections[i].offsetTop + contentSections[i].scrollHeight - window.innerHeight / 2 > window.pageYOffset
    ) {
      navigationItems[activeSection].classList.add('is-selected')
    } else {
      navigationItems[activeSection].classList.remove('is-selected')
    }
  }
}

export default function PresentationPage() {
  React.useEffect(() => {
    var href = window.location.href.substring(window.location.href.lastIndexOf('#') + 1)
    if (window.location.href.lastIndexOf('#') > 0) {
      document.getElementById(href)?.scrollIntoView()
    }
    window.addEventListener('scroll', updateView)
    updateView()
    return function cleanup() {
      window.removeEventListener('scroll', updateView)
    }
  })

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }
  const smoothScroll = target => {
    var targetScroll = document.getElementById(target)
    scrollGo(document.documentElement, targetScroll.offsetTop, 1250)
  }
  const scrollGo = (element, to, duration) => {
    console.log('start', element.scrollTop)
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20

    var animateScroll = function () {
      currentTime += increment
      var val = easeInOutQuad(currentTime, start, change, duration)
      element.scrollTop = val
      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }
    animateScroll()
  }

  const imageStyle = {
    position: 'relative',
    verticalAlign: 'middle',
    width: '40%',
    height: '100%',
    zIndex: '100',
  }

  const imageStyleFooter = {
    position: 'relative',
    verticalAlign: 'left',
    width: '30%',
    height: '100%',
    zIndex: '100',
  }

  const cardStyle = {
    position: 'absolute',
    top: '10%',
    left: '38%',
  }

  const classes = useStyles()
  return (
    <div id="descriptions-section">
      <Header
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 500,
          color: 'dark',
        }}
      />
      <div style={cardStyle}>
        <img style={imageStyle} src={Logo} />
      </div>
      <Parallax image={require('assets/img/_DSC1455.jpg').default} className={classes.parallax}></Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription id="home" />
        <SectionIntroduction id="introduction" />
        <SectioncCurses id="curses" />
        <SectionPackages id="packages" />
        <SectionsSpots id="spots" />
        <SectionActivitis id="activities" />
        <SectionLocation id="location" />
        <SectionTeams id="our" />
      </div>
      <nav id="cd-vertical-nav">
        <ul>
          <li>
            <a
              href="#home"
              data-number="1"
              className=""
              onClick={e => {
                e.preventDefault()
                smoothScroll('home')
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#navigation"
              data-number="2"
              className=""
              onClick={e => {
                e.preventDefault()
                smoothScroll('introduction')
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Stay True</span>
            </a>
          </li>
          <li>
            <a
              href="#notifications"
              data-number="3"
              className=""
              onClick={e => {
                e.preventDefault()
                smoothScroll('curses')
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Curses</span>
            </a>
          </li>
          <li>
            <a
              href="#footers"
              data-number="4"
              className=""
              onClick={e => {
                e.preventDefault()
                smoothScroll('location')
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Locations</span>
            </a>
          </li>
          <li>
            <a
              href="#typography"
              data-number="5"
              className=""
              onClick={e => {
                e.preventDefault()
                smoothScroll('spots')
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Spots</span>
            </a>
          </li>
          <li>
            <a
              href="#contentAreas"
              data-number="6"
              className=""
              onClick={e => {
                e.preventDefault()
                smoothScroll('activities')
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Activities</span>
            </a>
          </li>
          <li>
            <a
              href="#cards"
              data-number="7"
              className=""
              onClick={e => {
                e.preventDefault()
                smoothScroll('packages')
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Packages</span>
            </a>
          </li>
          <li>
            <a
              href="#morphingCards"
              data-number="8"
              className=""
              onClick={e => {
                e.preventDefault()
                smoothScroll('our')
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Team</span>
            </a>
          </li>
        </ul>
      </nav>
      <Footer
        theme="white"
        content={
          <>
            <div className={classes.left}>
              <ListItem
                className={classes.inlineBlock}
                button
                id="contact"
                href="mailto:staytrue.surf@gmail.com"
                target="_blank"
                //onClick={(e => e.preventDefault(), smoothScroll('home'))}
              >
                <ListItemIcon className={classes.footerBrand}>Stay True Company</ListItemIcon>
              </ListItem>
            </div>
            <div className={classes.pullCenter}>
              <List>
                <ListItem
                  className={classes.inlineBlock}
                  href="mailto:staytrue.surf@gmail.com"
                  target="_blank"
                  component="a"
                  //onClick={e => e.preventDefault()}
                >
                  <ListItemIcon className={classes.block}>
                    <i sytle={{ fontSize: '15px' }} class="fas fa-envelope-square" /> staytrue.surf@gmail.com
                  </ListItemIcon>
                </ListItem>
                <ListItem
                  href="https://api.whatsapp.com/send?phone=+506 85836298"
                  target="_blank"
                  component="a"
                  className={classes.inlineBlock}
                >
                  <ListItemIcon className={classes.block}>
                    <i sytle={{ fontSize: '15px' }} class="fab fa-whatsapp" /> +506 85836298{' '}
                  </ListItemIcon>
                </ListItem>
                <ListItem
                  href="https://api.whatsapp.com/send?phone=+34 609559527"
                  target="_blank"
                  component="a"
                  className={classes.inlineBlock}
                >
                  <ListItemIcon className={classes.block}>
                    <i class="fab fa-whatsapp" /> +34 609559527{' '}
                  </ListItemIcon>
                </ListItem>
              </List>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button
                    href="http://instagram.com/_u/staytrue.surf/"
                    target="_blank"
                    color="instagram"
                    justIcon
                    simple
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </li>
              </ul>
            </div>
          </>
        }
      />
    </div>
  )
}
