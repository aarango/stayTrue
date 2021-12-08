import React from 'react'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import cardsStyle from 'assets/jss/material-kit-pro-react/views/presentationSections/cardsStyle.js'
import { Card } from '@material-ui/core'

const useStyles = makeStyles(cardsStyle)
export default function SectionLocation({ ...rest }) {
  const classes = useStyles()
  return (
    <div className='cd-section' {...rest}>
      <Card>
        <div
          className={classes.features4}
          style={{
            backgroundImage: `url(${require('assets/img/background.jpg').default})`,
          }}
        >
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem md={5} sm={6} className={classes.mlAuto}>
                <div
                  style={{
                    margin: '10px',
                    paddingTop: '20px',
                    paddingBottom: '15px',
                    textShadow:
                      '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
                  }}
                  className={classes.cardDescription}
                >
                  <h3 className={classes.title}>Location</h3>
                  <h6 className={classes.description}>Santa Teresa</h6>
                  <h5 className={classes.description}>
                    The idyllic Santa Teresa is situated on the west coast of Costa Rica, one of the 7 official blue
                    zones on the planet. Getting here feels like stepping straight into a postcard with long beaches,
                    warm turquoise water and lush jungles as far as the eye can see. A unique sense of belonging and
                    peace. Santa Teresa is a beautiful beach town where you will find an international community of
                    beach lovers and is recognized internationally as a top surfing location for all levels. This quirky
                    surf town is a travellers paradise, with a relaxed way of life and a wide range of adventures to
                    explore. Enjoy a barefoot existence, relaxed, cosmopolitan community full of friendly people who
                    love living in an unspoiled, beautiful beach paradise and PURA VIDA lifestyle.
                  </h5>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </Card>
    </div>
  )
}
