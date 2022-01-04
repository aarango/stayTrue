import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader'
import CardBody from 'components/Card/CardBody.js'
import CardFooter from 'components/Card/CardFooter.js'
import Button from 'components/CustomButtons/Button.js'
import Muted from 'components/Typography/Muted.js'

import teamsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js'

import cardProfile2Square from 'assets/img/DSC_3970.jpg'
import cardProfile4Square from 'assets/img/DSC_3928.jpg'

const useStyles = makeStyles(teamsStyle)

export default function SectionTeams({ ...rest }) {
  const classes = useStyles()
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container} style={{ alignContent: 'center' }}>
        <GridContainer>
          <GridItem xs={11} sm={11} md={11} className={classes.mlAuto + ' ' + classes.mrAuto}>
            <h2 style={{ fontSize: '1.5rem', color: 'rgb(94 110 126)' }} className={classes.sectionDark}>
              <strong>OUR TEAM</strong>
            </h2>
          </GridItem>
        </GridContainer>
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={6} md={6}>
            <Card plain profile>
              <CardHeader image plain style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                <img src={cardProfile2Square} alt="chicho" />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>CICCIO</h4>
                <Muted>
                  <h6 className={classes.cardCategory}>founder & surf headcoach</h6>
                </Muted>
                <p className={classes.sectionDark}>
                  Born in Italy and raised in Costa Rica since he was 19 years old when he came searching for waves and
                  is still trapped in paradise 21 years later. He has surfed competitively since age 10 with sponsors in
                  California, Italy and Costa Rica, and declared 2020 Master Champion in Guanacaste. The most
                  experienced surf instructor in town, the man who will be there for you in the water.
                </p>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="instagram" href="http://instagram.com/_u/surfciccio/">
                  <i className="fab fa-instagram" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card plain profile>
              <CardHeader image plain style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                <img src={cardProfile4Square} alt="Lore" />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>LEO</h4>
                <Muted>
                  <h6 className={classes.sectionDark}>founder & concierge</h6>
                </Muted>
                <p className={classes.sectionDark}>
                  Originally from the Canary Islands, she was raised by the ocean and always involved in a variety of
                  watersports.. She left a career in finance to follow her dream of surfing and living peacefully
                  somewhere in paradise.Leo is stoked on life and full of love. She is in charge of making sure you
                  enjoy your trip.
                  <br />
                  <br />
                </p>
              </CardBody>
              <CardFooter profile plain className={classes.justifyContent}>
                <Button justIcon round color="instagram" href="http://instagram.com/_u/leooruiz/">
                  <i className="fab fa-instagram" />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
