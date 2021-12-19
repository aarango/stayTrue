import React from 'react'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'

import { makeStyles } from '@material-ui/core/styles'

import descriptionStyle from 'assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js'

const useStyles = makeStyles(descriptionStyle)

export default function SectionDescription({ ...rest }) {
  const classes = useStyles()
  return (
    <div className="cd-section" {...rest} style={{ background: 'rgb(245 227 203 / 58%)' }}>
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={7} sm={7}>
              <h2
                style={{ textAlign: 'center', fontSize: '1.5rem', color: 'rgb(94 110 126)' }}
                className={classes.sectionDark}
              >
                <strong>
                  We aim to share an experience beyond just learning to surf, we will guide you to live the dream of
                  staying true to a surfing lifestyle.
                </strong>
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  )
}
