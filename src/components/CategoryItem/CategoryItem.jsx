import { Container, Image, Info, Title, Button } from './CategoryItem.styles';

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  );
}

export default CategoryItem;