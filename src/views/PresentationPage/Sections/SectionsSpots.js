import React from 'react'
// core components
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardBody from 'components/Card/CardBody.js'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-slick'

import playaHermosa from 'assets/img/DSC_0650.jpg'
import santateresa2 from 'assets/img/DSC_0622.jpg'
import lajas from 'assets/img/lajas.jpeg'
import malpais from 'assets/img/malpais.jpeg'
import playac from 'assets/img/playadelcarmen.jpg'
import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.js'

const useStyles = makeStyles(carouselStyle)

export default function SectionsSpots({ ...rest }) {
  const classes = useStyles()
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className={classes.section} id="carousel" className="cd-section" {...rest}>
      <div className={classes.container}>
        <h2 style={{ fontSize: '1.5rem', color: 'rgb(94 110 126)' }} className={classes.sectionDark}>
          <strong>SURF SPOTS</strong>
        </h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Carousel {...settings}>
              <GridItem xs={12} md={12} sm={12}>
                <Card blog>
                  <CardHeader image>
                    <a href="#santaTeresa">
                      <img src={santateresa2} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{ backgroundImage: `url(${santateresa2})`, opacity: 1 }}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>
                      <strong>SANTA TERESA</strong>
                    </h4>
                    <p className={classes.cardDescription}>
                      A fun, hollow beach break with consistent waves. Better suited for intermediate and advanced
                      surfers.
                      <br />
                      <br />
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} md={12} sm={12}>
                <Card blog>
                  <CardHeader image>
                    <img src={playaHermosa} alt="playaHermosa" />
                    <div
                      className={classes.coloredShadow}
                      style={{ backgroundImage: `url(${playaHermosa})`, opacity: 1 }}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>
                      <strong>PLAYA HERMOSA</strong>
                    </h4>
                    <p className={classes.cardDescription}>
                      Open sandy bottom beach break, mellow left and right waves, 4km long, plenty of peaks to choose
                      from.
                    </p>
                    <br />
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} md={12} sm={12}>
                <Card blog>
                  <CardHeader image>
                    <a href="#playaCarmen">
                      <img src={playac} alt="playaCarmen" />
                    </a>
                    <div className={classes.coloredShadow} style={{ backgroundImage: `url(${playac})`, opacity: 1 }} />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>
                      <strong>PLAYA DEL CARMEN</strong>
                    </h4>
                    <p className={classes.cardDescription}>
                      Boasting numerous peaks over a half-mile stretch of water, Carmen offers long breaks for the
                      experienced and beginners alike.
                      <br />
                      <br />
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} md={12} sm={12}>
                <Card blog>
                  <CardHeader image>
                    <a href="#MALPAIS">
                      <img src={malpais} alt="MALPAIS" />
                    </a>
                    <div className={classes.coloredShadow} style={{ backgroundImage: `url(${malpais})`, opacity: 1 }} />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>
                      <strong>MALPAIS</strong>
                    </h4>
                    <p className={classes.cardDescription}>
                      Combination of easier breaks and more challenging spots. In this area we have point breaks all
                      around.
                      <br />
                      <br />
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} md={12} sm={12}>
                <Card blog>
                  <CardHeader image>
                    <a href="#LAJAS">
                      <img src={lajas} alt="LAJAS" />
                    </a>
                    <div className={classes.coloredShadow} style={{ backgroundImage: `url(${lajas})`, opacity: 1 }} />
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>
                      <strong>LAJAS</strong>
                    </h4>
                    <p className={classes.cardDescription}>
                      Located on the western side of the peninsula, point break that only works when there’s a good
                      south swell. One of the longest waves we have.
                      <br />
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
            </Carousel>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
