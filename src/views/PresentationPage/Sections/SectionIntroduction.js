import React from 'react'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import CardHeader from 'components/Card/CardHeader.js'

import componentsStyle from 'assets/jss/material-kit-pro-react/views/presentationSections/componentsStyle.js'
import group from 'assets/img/DSC_0486.jpg'
import level1 from 'assets/img/level1.jpg'

const useStyles = makeStyles(componentsStyle)

export default function SectionIntroduction({ ...rest }) {
  const classes = useStyles()
  return (
    <div className="cd-section" {...rest} style={{ background: 'rgb(245 227 203 / 58%)' }}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={5} lg={5} sm={11} xs={11}>
            <p className={classes.sectionDark}>
              <b style={{ fontSize: '1rem' }}>Stay True is a Surf Company </b>located in Santa Teresa, Costa Rica just a
              few steps barefoot from the sea. We aim to share an experience beyond just learning to surf, we will guide
              you to live the dream of staying true to a surfing lifestyle. We assure you that after a few days
              “breathing surf” with us, surfing will be part of your life, and you will view surfing from a completely
              different perspective. Not only are we going to surf, we are going to learn how to breathe through apnea
              techniques, stretch, train focused on surf techniques, tropical fresh nutrition, watch yourself surfing
              through video analysis, rest...All with the highest motivation and laughter 100% guaranteed.
            </p>
            <div style={{ marginBottom: '20px' }} className={classes.sectionDark}>
              <strong> Come and join us in our ocean playground!</strong>
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} xs={12} sm={12} md={7} lg={7}>
            <CardHeader image plain>
              <a>
                <img src={group} alt="level1" />
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
              <br />
            </CardHeader>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
