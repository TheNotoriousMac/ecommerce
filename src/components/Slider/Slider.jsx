import {
  Container,
  Arrow,
  Wrapper,
  ImgContainer,
  Image,
  Slide,
  InfoContainer,
  Title,
  Desc,
  Button,
} from "./Slider.styles";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../../data";
import { useState } from 'react';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction === 'left'){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={()=> handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {sliderItems.map(item => (
        <Slide bg={item.bg} key={item.id} >
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>
              {item.desc}
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      ))}
      </Wrapper>

      <Arrow direction="right" onClick={()=> handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
