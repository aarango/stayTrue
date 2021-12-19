import React from 'react'
// nodejs library that concatenates classes
import { GiScubaMask, GiWaveSurfer, GiSurfBoard, GiSurferVan, GiUbisoftSun } from 'react-icons/gi'
import { BsFillCameraReelsFill } from 'react-icons/bs'
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import Button from 'components/CustomButtons/Button.js'
import CardBody from 'components/Card/CardBody.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import overviewStyle from '../../../assets/jss/material-kit-pro-react/views/presentationSections/overviewStyle.js'

const useStyles = makeStyles(overviewStyle)

export default function SectionPackages({ ...rest }) {
  const classes = useStyles()
  return (
    <div className='cd-section' {...rest} style={{ background: 'rgb(245 227 203 / 58%)' }}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12} sm={12} xs={12}>
            <h2 style={{ color: 'rgb(94 110 126)' }} className={classes.sectionDark}>
              <strong>SURF PACKAGES</strong>
            </h2>
          </GridItem>
          <GridItem md={4} sm={4} xs={12}>
            <Card pricing color='white' style={{ width: '100%' }}>
              <CardBody pricing>
                <p className={classes.cardTitle}>Package 1</p>
                <div className={`${classes.iconWrapper} ${classes.iconWrapperColor}`}>
                  <GiWaveSurfer className={classes.iconWhite} size={60} />
                </div>
                <h3 className={`${classes.cardTitleWhite} ${classes.marginTop30}`}>
                  <strong>225 USD</strong>
                </h3>
                <strong className={classes.cardDescriptionWhite}>
                  {' '}
                  3 SURF lessons with equipment
                  <br />+ SURF THEORY
                </strong>
                <p className={classes.cardDescriptionWhite}>Location: Santa Teresa</p>
                <p className={classes.cardDescriptionWhite}>Days: 3 Days</p>
                <Button
                  round
                  color='linkedin'
                  component='a'
                  href='mailto:staytrue.surf@gmail.com?subject=Hello, Hi! I am interested in Package 1!'
                >
                  Choose package
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card pricing color='white' style={{ width: '100%' }}>
              <CardBody pricing>
                <p className={classes.cardTitle}>Package 2</p>
                <div className={`${classes.iconWrapper} ${classes.iconWrapperColor}`}>
                  <GiWaveSurfer className={classes.iconWhite} size={60} /> <strong> </strong>{' '}
                  <BsFillCameraReelsFill className={classes.iconWhite} size={40} />
                </div>
                <h3
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                  className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
                >
                  <strong>450 USD</strong>
                </h3>
                <strong className={classes.cardDescristrongtionWhite}>
                  5 SURF lessons with equipment
                  <br />+ 2 VIDEO ANALYSIS
                </strong>
                <p className={classes.cardDescriptionWhite}>Location: Santa Teresa</p>
                <p className={classes.cardDescriptionWhite}>Days: 5 Days</p>
                <Button
                  round
                  color='linkedin'
                  component='a'
                  href='mailto:staytrue.surf@gmail.com?subject=Hello, Hi! I am interested in Package 2!'
                >
                  Choose package
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card pricing color='white' style={{ width: '100%' }}>
              <CardBody pricing>
                <p className={classes.cardTitle}>Package 3</p>
                <div className={`${classes.iconWrapper} ${classes.iconWrapperColor}`}>
                  <GiWaveSurfer className={classes.iconWhite} size={60} /> <strong> </strong>
                  <GiScubaMask className={classes.iconWhite} size={60} />
                </div>
                <h3 className={`${classes.cardTitleWhite} ${classes.marginTop30}`}>
                  {' '}
                  <strong>400 USD</strong>
                </h3>
                <strong className={classes.cardDescriptionWhite}>
                  3 SURF lessons with equipment <br /> + APNEA FOR SURFERS + 1 SURF-TRAINING
                </strong>
                <p className={classes.cardDescriptionWhite}>Location: Santa Teresa</p>
                <p className={classes.cardDescriptionWhite}>Days: 4 Days</p>
                <Button
                  round
                  color='linkedin'
                  component='a'
                  href='mailto:staytrue.surf@gmail.com?subject=Hello, Hi! I am interested in Package 3!'
                >
                  Choose package
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card pricing color='white' style={{ width: '100%' }}>
              <CardBody pricing>
                <p className={classes.cardTitle}>Package 4</p>
                <div className={`${classes.iconWrapper} ${classes.iconWrapperColor}`}>
                  <GiSurfBoard className={classes.iconWhite} size={60} /> <strong> </strong>{' '}
                  <GiScubaMask className={classes.iconWhite} size={60} />
                </div>
                <h3
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                  className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
                >
                  <strong>630 USD</strong>
                </h3>
                <strong className={classes.cardDescristrongtionWhite}>
                  5 SURF lessons with equipment
                  <br />+ 2 VIDEO ANALYSIS + APNEA FOR SURFERS
                </strong>
                <p className={classes.cardDescriptionWhite}>Location: Santa Teresa</p>
                <p className={classes.cardDescriptionWhite}>Days: 6 Days</p>
                <Button
                  round
                  color='linkedin'
                  component='a'
                  href='mailto:staytrue.surf@gmail.com?subject=Hello, Hi! I am interested in Package 2!'
                >
                  Choose package
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card pricing color='white' style={{ width: '100%' }}>
              <CardBody pricing>
                <p className={classes.cardTitle}>Package 5</p>
                <div className={`${classes.iconWrapper} ${classes.iconWrapperColor}`}>
                  <GiSurferVan className={classes.iconWhite} size={60} />
                </div>
                <h3 className={`${classes.cardTitleWhite} ${classes.marginTop30}`}>
                  {' '}
                  <strong>190 USD</strong>
                </h3>
                <strong className={classes.cardDescriptionWhite}>
                  CABUYA : 1 SURF / STAND UP lesson with equipment + ATV rental + CACAO TOUR
                </strong>
                <p className={classes.cardDescriptionWhite}>Location: Santa Teresa</p>
                <p className={classes.cardDescriptionWhite}>Days: 1 Days</p>
                <Button
                  round
                  color='linkedin'
                  component='a'
                  href='mailto:staytrue.surf@gmail.com?subject=Hello, Hi! I am interested in Package 5!'
                >
                  Choose package
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card pricing color='white' style={{ width: '100%' }}>
              <CardBody pricing>
                <p className={classes.cardTitle}>Package 6</p>
                <div className={`${classes.iconWrapper} ${classes.iconWrapperColor}`}>
                  <GiUbisoftSun className={classes.iconWhite} size={60} />
                </div>
                <h3 className={`${classes.cardTitleWhite} ${classes.marginTop30}`}>
                  <strong>USD</strong>
                </h3>
                <strong className={classes.cardDescriptionWhite}>DESIGN YOUR OWN PACKAGE</strong>
                <br />
                <br />
                <p className={classes.cardDescriptionWhite}>Location: All around Costa Rica</p>
                <p className={classes.cardDescriptionWhite}>Days: as many as you want</p>
                <Button
                  round
                  color='linkedin'
                  component='a'
                  href='mailto:staytrue.surf@gmail.com?subject=Hello, Hi! I am interested in Package 6!'
                >
                  Choose package
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
