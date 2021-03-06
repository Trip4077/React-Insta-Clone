import styled from 'styled-components';

const Post = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 40px 0;
  margin-left: 20%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;

  @media(max-width: 1322px) {
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 200px;

  padding: 10px 0;

  font-weight: bold;
  font-size: 1.6rem;
`;

const UserImg = styled.img`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  margin:  0 6% 0 8%;
`;

export {
  Post,
  User,
  UserImg
}
