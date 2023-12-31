import styled from "styled-components";
import { Link } from 'react-router-dom';

const PostBody = styled.div`
    width: 610px;

    display: flex;

    padding: 18px 17px;
    margin-top: 16px;
    border-radius: 16px;

    background-color: #171717;
    font-family: "Lato", sans-serif;

    position: relative;

    @media (max-width: 610px) {
        width: 100%;
        border-radius: 0;

        padding: 15px 9px;
    }
`;

const UserContainer = styled.div`
        width: 87px;
        display: flex;
        flex-direction: column;
        align-items: center;

        color: #FFF;

        margin-left: -15px;

        @media (max-width: 610px) {
            width: 70px;
        }
`;

const UserPicture = styled.div`
    & > * {
        width: 50px;
        height: 50px;

        border-radius: 50%;

        border: 1px solid white
    }

    @media (max-width: 610px) {
        & > * {
            width: 40px;
            height: 40px;
        }
    }
`;

const TextContainer = styled.div`
    width: calc(100% - 72px);
    
    display: flex;
    flex-direction: column;
`;

const UserName = styled(Link)`
    max-width: 455px;
    
    font-size: 19px;
    font-weight: 400;
    line-height: 20.4px;
    color: #FFF;
    
    padding-bottom: 8px;
    word-break: break-word;
    
    text-decoration: none;

    &hover {
        cursor: pointer;
        filter: brightness(5);
        text-decoration: underline;
    }

    @media (max-width: 610px) {
        font-size: 17px;
        max-width: 57vw;

        padding-bottom: 4px;
    }
`;

const UserMessage = styled.div`
    font-size: 17px;
    font-weight: 400;
    line-height: 20.7px;
    color: #B7B7B7;

    display: ${(props) => props.editing == true ? 'none': 'inline'};
    padding-bottom: 8px;

    span {
        font-size: 15px;
        font-weight: 700;
        line-height: 20.4px;
        color: #FFF;

        gap: 5px;
    }

    @media (max-width: 610px) {
        font-size: 15px;
        line-height: 18px;

        padding-bottom: 4px;
    }
`;

const MetadataContainer = styled.div` 
    a {
        all: unset;
    }
`;

export {
    PostBody,
    UserContainer,
    UserPicture,
    TextContainer,
    UserName,
    UserMessage,
    MetadataContainer
}