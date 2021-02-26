import React from 'react'
import styled from 'styled-components';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
    return (
        <Container>
            <HeaderContainer>
                <ChannelNameContainer>
                  <ChannelName># Henton <StarOutlineIcon /></ChannelName>
                  <Description>Family announcements and family matters</Description>

                </ChannelNameContainer>
                <DetailsContainer>
                    <Details>Details</Details>
                    <InfoOutlinedIcon />
                </DetailsContainer>
            </HeaderContainer>
            Chat 
        </Container>
    )
}

export default Chat

const Container = styled.div`
 

`

const HeaderContainer = styled.div`
height: 64px;
display: flex;
align-items: center;
padding-left: 19px;
justify-content: space-between;

`

const ChannelName = styled.div`

`

const ChannelNameContainer = styled.div`

`

const Description = styled.div`

`
const DetailsContainer = styled.div`
display: flex;
justify-content: space-between;
padding-right: 19px;

`

const Details = styled.div`
padding-left: 19px;

`