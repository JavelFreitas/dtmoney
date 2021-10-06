import logo from '../../assets/Logo.svg'
import { Container, Content } from './style'

interface HeaderProps {
    onHandleOpenNewTransactionModal: () => void
}

export function Header({onHandleOpenNewTransactionModal}: HeaderProps){
    
    return (
        <Container>
            <Content>
                <img src={logo} alt="dtmoney" />
                <button type="button" onClick={onHandleOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}