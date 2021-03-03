import React from 'react';
import styled from 'styled-components';
// import StarOutlineIcon from '@material-ui/icons/StarOutline';
// import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
  return (
    <Container>
      <Header></Header>
      <MessageContainer></MessageContainer>
      <ChatInput></ChatInput>
    </Container>
  );
}

export default Chat;

//styled components

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  min-height: 0;
`;

const Header = styled.div``;

const MessageContainer = styled.div``;

const ChatInput = styled.div``;
