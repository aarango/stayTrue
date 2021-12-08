import {
  container,
  section,
  sectionDark,
  sectionDescription,
  title,
  whiteColor,
  mlAuto,
  hexToRgb,
} from 'assets/jss/stayTruePack'

const cardsStyle = {
  section: {
    ...section,
    padding: '50px 0px',
  },
  sectionDark,
  container,
  sectionDescription,
  title: {
    ...title,
    color: whiteColor,
    marginTop: '30px',
    marginBottom: '25px',
    minHeight: '32px',
  },
  description: {
    color: 'rgba(' + hexToRgb(whiteColor) + ',0.76)',
  },
  imageContainer: {
    maxWidth: '1040px',
    marginTop: '-140px',
    position: 'relative',
    height: '660px',
    '& img': {
      maxWidth: '1040px',
      width: 'auto',
      position: 'absolute',
      right: '0px',
      top: '0px',
    },
  },
  imageRigthContainer: {
    //maxWidth: '100%',
    //position: 'relative',
    //height: '90%',
    '& img': {
      //maxWidth: '40px',
      width: '100%',
      position: 'absolute',
      height: '730px',
      top: '-30px',
      right: '-50px',
    },
  },
  mlAuto,
}

export default cardsStyle
