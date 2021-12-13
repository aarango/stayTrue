import React from 'react'
// nodejs library that concatenates classes
import { FaUmbrellaBeach } from 'react-icons/fa'
import { GiSurferVan, GiWaveSurfer } from 'react-icons/gi'
import { MdKitesurfing, MdSurfing, MdOutlineKitesurfing } from 'react-icons/md'
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
    <div className="cd-section" {...rest} style={{ background: '#F5E3CB' }}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12} sm={12} xs={12}>
            <h2 style={{ color: 'rgb(94 110 126)' }} className={classes.sectionDark}>
              <strong>SURF PACKAGE´S</strong>
            </h2>
          </GridItem>
          <GridItem md={4} sm={4} xs={12}>
            <Card pricing color="white" style={{ width: '20rem' }}>
              <CardBody pricing>
                <p className={classes.cardTitle}>Package 1</p>
                <div className={`${classes.iconWrapper} ${classes.iconWrapperColor}`}>
                  <FaUmbrellaBeach className={classes.iconWhite} size={60} />
                </div>
                <h3 className={`${classes.cardTitleWhite} ${classes.marginTop30}`}>$69</h3>
                <strong className={classes.cardDescriptionWhite}> 3 SURF lessons with equipment + SURF THEORY</strong>
                <p className={classes.cardDescriptionWhite}>Location: Santa Teresa</p>
                <p className={classes.cardDescriptionWhite}>Days: 3 Days</p>
                <Button
                  round
                  color="linkedin"
                  component="a"
                  href="mailto:staytrue.surf@gmail.com?subject=Hello, Hi! I am interested in Package 1!"
                >
                  Choose package
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card pricing color="white" style={{ width: '20rem' }}>
              <CardBody pricing>
                <p className={classes.cardTitle}>Package 2</p>
                <div className={`${classes.iconWrapper} ${classes.iconWrapperColor}`}>
                  <GiSurferVan className={classes.iconWhite} size={60} />
                </div>
                <h3 className={`${classes.cardTitleWhite} ${classes.marginTop30}`}>$69</h3>
                <strong className={classes.cardDescristrongtionWhite}>
                  5 SURF lessons with equipment + 2 VIDEO ANALYSIS
                </strong>
                <p className={classes.cardDescriptionWhite}>Location: Santa Teresa</p>
                <p className={classes.cardDescriptionWhite}>Days: 3 Days</p>
                <Button
                  round
                  color="linkedin"
                  component="a"
                  href="mailto:staytrue.surf@gmail.com?subject=Hello, Hi! I am interested in Package 2!"
                >
                  Choose package
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card pricing color="white" style={{ width: '20rem' }}>
              <CardBody pricing>
                <p className={classes.cardTitle}>Package 3</p>
                <div className={`${classes.iconWrapper} ${classes.iconWrapperColor}`}>
                  <GiWaveSurfer className={classes.iconWhite} size={60} />
                </div>
                <h3 className={`${classes.cardTitleWhite} ${classes.marginTop30}`}>$69</h3>
                <strong className={classes.cardDescriptionWhite}>
                  5 SURF lessons with equipment + APNEA + 2 SURF-TRAINING lessons
                </strong>
                <p className={classes.cardDescriptionWhite}>Location: Santa Teresa</p>
                <p className={classes.cardDescriptionWhite}>Days: 3 Days</p>
                <Button
                  round
                  color="linkedin"
                  component="a"
                  href="mailto:staytrue.surf@gmail.com?subject=Hello, Hi! I am interested in Package 3!"
                >
                  Choose package
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card pricing color="white" style={{ width: '20rem' }}>
              <CardBody pricing>
                <p className={classes.cardTitle}>Package 4</p>
                <div className={`${classes.iconWrapper} ${classes.iconWrapperColor}`}>
                  <MdKitesurfing className={classes.iconWhite} size={60} />
                </div>
                <h3 className={`${classes.cardTitleWhite} ${classes.marginTop30}`}>$69</h3>
                <strong className={classes.cardDescriptionWhite}>
                  Cabuya : 1 SURF / STAND UP lesson with equipment + ATV rental + CACAO TOUR
                </strong>
                <p className={classes.cardDescriptionWhite}>Location: Santa Teresa</p>
                <p className={classes.cardDescriptionWhite}>Days: 3 Days</p>
                <Button
                  round
                  color="linkedin"
                  component="a"
                  href="mailto:staytrue.surf@gmail.com?subject=Hello, Hi! I am interested in Package 4!"
                >
                  Choose package
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card pricing color="white" style={{ width: '20rem' }}>
              <CardBody pricing>
                <p className={classes.cardTitle}>Package 5</p>
                <div className={`${classes.iconWrapper} ${classes.iconWrapperColor}`}>
                  <MdSurfing className={classes.iconWhite} size={60} />
                </div>
                <h3 className={`${classes.cardTitleWhite} ${classes.marginTop30}`}>$69</h3>
                <strong className={classes.cardDescriptionWhite}>
                  Cabuya : 1 SURF / STAND UP lesson with equipment + ATV rental + CACAO TOUR
                </strong>
                <p className={classes.cardDescriptionWhite}>Location: Santa Teresa</p>
                <p className={classes.cardDescriptionWhite}>Days: 3 Days</p>
                <Button
                  round
                  color="linkedin"
                  component="a"
                  href="mailto:staytrue.surf@gmail.com?subject=Hello, Hi! I am interested in Package 5!"
                >
                  Choose package
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card pricing color="white" style={{ width: '20rem' }}>
              <CardBody pricing>
                <p className={classes.cardTitle}>Package 6</p>
                <div className={`${classes.iconWrapper} ${classes.iconWrapperColor}`}>
                  <MdOutlineKitesurfing className={classes.iconWhite} size={60} />
                </div>
                <h3 className={`${classes.cardTitleWhite} ${classes.marginTop30}`}>$69</h3>
                <strong className={classes.cardDescriptionWhite}>3 SURF lessons with equipment + SURF THEORY</strong>
                <p className={classes.cardDescriptionWhite}>Location: Santa Teresa</p>
                <p className={classes.cardDescriptionWhite}>Days: 3 Days</p>
                <Button
                  round
                  color="linkedin"
                  component="a"
                  href="mailto:staytrue.surf@gmail.com?subject=Hello, Hi! I am interested in Package 6!"
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
