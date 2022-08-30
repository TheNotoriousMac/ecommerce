import { Container, Title, Desc, InputContainer, Input, Button } from './Newsletter.styles';
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite products.</Desc>
        <InputContainer>
            <Input placeholder='Your email' />
            <Button> 
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter