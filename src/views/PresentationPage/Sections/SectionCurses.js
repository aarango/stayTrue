import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js'

import level1 from 'assets/img/DSC_0839.jpg'
import level2 from 'assets/img/DSC_0650.jpg'
import level3 from 'assets/img/_DSC1455.jpg'

const useStyles = makeStyles(blogsStyle)

export default function SectionCurses({ ...rest }) {
  const classes = useStyles()
  return (
    <div style={{ marginBottom: 0 }} className='cd-section' {...rest}>
      <div className={classes.container}>
        <h2 style={{ color: 'rgb(94 110 126)' }} className={classes.sectionDark}>
          <strong>SURF COURSES</strong>
        </h2>
        <GridContainer>
          <GridItem xs={11} sm={12} md={12} className={classes.mlAuto + ' ' + classes.mrAuto}>
            <strong>Great waves, playful conditions and warm water under palm trees 365 days a year!</strong>
            <br />
            <p className={classes.sectionDark}>
              Surf courses for all levels are available from experienced local instructors, who are formally trained to
              teach you how to surf and are qualified in the fields of surf rescue and first aid. They are motivated to
              guide you safely with expert tips and surf rules to feel comfortable in the water! Preferring to focus on
              quality not quantity, there is a maximum of 2 students per coach. Every day we patrol the coast to find
              the best surf spots and conditions depending on your level. Sunny days, good waves and safe learning are
              guaranteed…. How? breathing surf with us!
            </p>
            <Card plain blog className={classes.card}>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <CardHeader image plain>
                    <a>
                      <img src={level1} alt='level1' />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${level1})`,
                        opacity: '1',
                      }}
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${level1})`,
                        opacity: '1',
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={5} md={5}>
                  <br />
                  <strong>LEVEL 1: BEGINNER</strong>
                  <p className={classes.sectionDark}>
                    This level is focused on people who have never surfed before or need to review the basics. Lessons
                    take place on a safe sand-bottom beach break perfect for your level.
                    <br />
                    <br />
                    <b>Goals:</b>
                    <ul>
                      {' '}
                      <li>Situational awareness of the beach where we surf (rocks, currents, reference point…) </li>
                      <li>Understanding the anatomy of a surfboard</li>
                      <li>How to control your own surfboard</li>
                      <li>Basic paddle technique in whitewash</li>
                      <li>Pop up and ride the white water with correct surf position</li>
                      <li>Finish the lesson with a group feedback session</li>
                    </ul>
                  </p>
                </GridItem>
              </GridContainer>
            </Card>
            <Card plain blog className={classes.card}>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <CardHeader image plain>
                    <a>
                      <img src={level2} alt='level2' />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${level2})`,
                        //opacity: '1',
                      }}
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${level2})`,
                        //opacity: '1',
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={5} md={5}>
                  <br />
                  <strong>LEVEL 2: INTERMEDIATE SURFER</strong>
                  <p className={classes.sectionDark}>
                    If you've already surfed, you have control of your surfboard and consider yourself capable of
                    paddling to the lineup, welcome to level 2! We search for smooth and easy green waves.Our goal for
                    this level is to
                    <br />
                    <br />
                    <b>Goals:</b>
                    <ul>
                      <li>Paddle out with safe technique (turtle rolls, chest up…).</li>
                      <li>Choose the correct spot at the line up.</li>
                      <li>Take off with a good positioning and ride left or right.</li>
                      <li>Keep safe distance from other surfers and respect.</li>
                      <li>Finish the session with individual feedback.</li>
                    </ul>
                  </p>
                </GridItem>
              </GridContainer>
            </Card>
            <Card plain blog className={classes.card}>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <CardHeader image plain>
                    <a>
                      <img src={level3} alt='level3' />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${level3})`,
                        opacity: '1',
                      }}
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${level3})`,
                        opacity: '1',
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={5} md={5}>
                  <br />
                  <strong>LEVEL 3: ADVANCED SURFER</strong>
                  <p className={classes.sectionDark}>
                    {/* Level 3 is designed to make you feel increasingly confident in the water surfing on your own. */}
                    Improve your skills of wave reading, spot analysis, make your first maneuvers or improve the ones
                    you already do. With the local knowledge, we'll teach you how to maximize your time in the water and
                    make you feel safe and inspired while surfing some of the best spots in Costa Rica.
                    <br />
                    <br />
                    <b>Goals:</b>
                    <ul>
                      {' '}
                      <li>Basic maneuvers: catbacks, carving, floaters, off the lip… and much more!.</li>
                      <li>Take off from main peaks and improve your timing.</li>
                      <li>Learn to get speed by pumping in the right area of the wave.</li>
                      <li>Review your errors through video recording feedback of your instructor.</li>
                      <li>No dropping in on people.Keep safe distance from other surfers and respect.</li>
                    </ul>
                  </p>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
