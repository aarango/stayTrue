import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from 'components/Card/Card.js'
import Carousel from 'react-slick'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import carouselStyle from 'assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.js'
import Atv from 'assets/img/atv.jpg'
import Apnea from 'assets/img/image00001.jpeg'
import Bio from 'assets/img/bio.jpg'
import Horse from 'assets/img/image00003.jpeg'
import Fishing from 'assets/img/fishing.jpg'
import Yoga from 'assets/img/yoga.jpg'
import Cicio from 'assets/img/cicio.JPG'
import Montezuma from 'assets/img/montezuma.jpg'
import Board from 'assets/img/board.jpg'

const useStyles = makeStyles(carouselStyle)

const imageStyle = {
  borderRadius: '5px',
  height: '100%',
  left: '0',
  objectFit: 'cover',
  //position: 'absolute',
  top: '0',
  width: '100%',
}

const cardStyle = {
  flex: '1 1 auto',
  position: 'relative',
  height: '462px',
}

export default function SectionActivitis({ ...rest }) {
  const classes = useStyles()
  const settings = {
    infinite: true,
    speed: 2000,
    //fade: true,
    slidesToShow: 3,
    //focusOnSelect: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
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
    <div className="cd-section" id="carousel" {...rest} style={{ background: 'rgb(245 227 203 / 58%)' }}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12} sm={12} xs={12}>
            <h2
              style={{ fontSize: '1.5rem', color: 'rgb(94 110 126)' }}
              className={classes.sectionDark}
            >
              <strong>ACTIVITIES</strong>
            </h2>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Carousel {...settings}>
              <GridItem xs={12} md={12} sm={12}>
                <Card style={cardStyle}>
                  <img src={Atv} alt="First slide" style={imageStyle} />
                  <ImageListItemBar
                    style={{
                      height: '100%',
                      justifyItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  />
                  <div className="slick-caption">
                    <h4>
                      <strong>ATV</strong>
                    </h4>
                    <p className={classes.sectionDark}>
                      All Terrain Vehicles (ATVs), also called “quads,” are the preferred method of transport and the
                      best for exploring the area. We recommended renting one during your visit.
                    </p>
                  </div>
                </Card>
              </GridItem>
              <GridItem xs={12} md={12} sm={12}>
                <Card style={cardStyle}>
                  <img src={Horse} alt="First slide" style={imageStyle} />
                  <ImageListItemBar
                    style={{
                      height: '100%',
                      justifyItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  />
                  <div className="slick-caption">
                    <h4>
                      <strong>HORSEBACK RIDING</strong>
                    </h4>
                    <p className={classes.sectionDark}>
                      An amazing experience.. Enjoy a natural landscape of rivers, mountains and beaches, while you ride
                      accompanied by local cowboys.
                    </p>
                  </div>
                </Card>
              </GridItem>
              <GridItem xs={12} md={12} sm={12}>
                <Card style={cardStyle}>
                  <img src={Bio} alt="First slide" style={imageStyle} />
                  <ImageListItemBar
                    style={{
                      height: '100%',
                      justifyItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  />
                  <div className="slick-caption">
                    <h4>
                      <strong>BIOLUMINESCENT TOUR</strong>
                    </h4>
                    <p className={classes.sectionDark}>
                      Most spectacular night tour. On this tour you can see the plankton glow in the dark from your
                      first paddle stroke, it’s a really unique experience not to be missed.
                    </p>
                  </div>
                </Card>
              </GridItem>
              <GridItem xs={12} md={12} sm={12}>
                <Card style={cardStyle}>
                  <img src={Fishing} alt="First slide" style={imageStyle} />
                  <ImageListItemBar
                    style={{
                      height: '100%',
                      justifyItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  />
                  <div className="slick-caption">
                    <h4>
                      <strong>FISHING</strong>
                    </h4>
                    <p className={classes.sectionDark}>
                      With our local captain You can do spearfishing, trolling, casting, or open water fishing in the
                      beautiful clear waters off the Nicoya Peninsula. Maybe you’ll come back with dinner!
                    </p>
                  </div>
                </Card>
              </GridItem>
              <GridItem xs={12} md={12} sm={12}>
                <Card style={cardStyle}>
                  <img src={Yoga} alt="First slide" style={imageStyle} />
                  <ImageListItemBar
                    style={{
                      height: '100%',
                      justifyItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  />
                  <div className="slick-caption">
                    <h4>
                      <strong>YOGA</strong>
                    </h4>
                    <p className={classes.sectionDark}>
                      Yoga complements surfing perfectly as it builds strength, flexibility and balance. Practicing yoga
                      after surfing for stretching is one of our daily bases.
                    </p>
                  </div>
                </Card>
              </GridItem>
              <GridItem xs={12} md={12} sm={12}>
                <Card style={cardStyle}>
                  <img style={imageStyle} src={Apnea} alt="First slide" className="slick-image" />
                  <ImageListItemBar
                    style={{
                      height: '100%',
                      justifyItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  />
                  <div className="slick-caption">
                    <h4>
                      <strong>APNEA</strong>
                    </h4>
                    <p className={classes.sectionDark}>
                      During this experience we will take you through an amazing journey into the world of a better
                      understanding of breathing as a life skill. The professional team will give you the tools to
                      strengthen your body and most importantly, your mind!
                    </p>
                  </div>
                </Card>
              </GridItem>
              <GridItem xs={12} md={12} sm={12}>
                <Card style={cardStyle}>
                  <img style={imageStyle} src={Cicio} alt="First slide" className="slick-image" />
                  <ImageListItemBar
                    style={{
                      height: '100%',
                      justifyItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  />
                  <div className="slick-caption">
                    <h4>
                      <strong>SURF TRAINING</strong>
                    </h4>
                    <p className={classes.sectionDark}>
                      Quality surf training will help you perform better in the water, catch more waves and enjoy a fun
                      surf session. Surf fitness is going to help keep you injury-free, too. Surfing is one of the most
                      enjoyable and physically demanding sports in the world.
                    </p>
                  </div>
                </Card>
              </GridItem>
              <GridItem xs={12} md={12} sm={12}>
                <Card style={cardStyle}>
                  <img style={imageStyle} src={Montezuma} alt="First slide" className="slick-image" />
                  <ImageListItemBar
                    style={{
                      height: '100%',
                      justifyItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  />
                  <div className="slick-caption">
                    <h4>
                      <strong>MONTEZUMA WATERFALL</strong>
                    </h4>
                    <p className={classes.sectionDark}>
                      The Montezuma waterfall consists of three cascading falls along a river in the bohemian beach town
                      of Montezuma. Is one of the biggest attractions of the area where you can swim, refresh and jump
                      into the water!
                    </p>
                  </div>
                </Card>
              </GridItem>
              <GridItem xs={12} md={12} sm={12}>
                <Card style={cardStyle}>
                  <img style={imageStyle} src={Board} alt="First slide" className="slick-image" />
                  <ImageListItemBar
                    style={{
                      height: '100%',
                      justifyItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  />
                  <div className="slick-caption">
                    <h4>
                      <strong>STAND-UP PADDLE BOARDING </strong>
                    </h4>
                    <p className={classes.sectionDark}>
                      The Montezuma waterfall consists of three cascading falls along a river in the bohemian beach town
                      of Montezuma. Is one of the biggest attractions of the area where you can swim, refresh and jump
                      into the water!
                    </p>
                  </div>
                </Card>
              </GridItem>
            </Carousel>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}
