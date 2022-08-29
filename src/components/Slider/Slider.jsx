import { Container, Arrow } from './Slider.styles';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlinedIcon />
        </Arrow>
        <Arrow direction="right">
            <ArrowRightOutlinedIcon />
        </Arrow>
    </Container>
  );
}

export default Slider;