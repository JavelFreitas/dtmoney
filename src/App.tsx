import styled from 'styled-components'
import { Header } from './components/Header/Header';
import { GlobalStyle } from './styles/global';

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`

export function App() {
  return (
    <div className="App">
        <Header />
        <GlobalStyle/>
    </div>
  );
}