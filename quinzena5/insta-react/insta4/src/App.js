import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

          <Post
          nomeUsuario={'Lucas'}
          fotoUsuario={'https://avatars.githubusercontent.com/u/60482900?v=4'}
          fotoPost={'https://live.staticflickr.com/4004/4192302933_725fa5c202_b.jpg'}
        />

        <Post
          nomeUsuario={'Josiani'}
          fotoUsuario={'https://cdn.pixabay.com/photo/2015/04/20/13/08/woman-731107_1280.jpg'}
          fotoPost={'https://pixnio.com/free-images/2019/01/23/2019-01-23-09-10-18.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
