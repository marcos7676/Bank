import logoImg from "../../assets/logo.svg"

import { Container, Content } from "./styles"

interface HeaderProps {
    onOenNewTransactionModal: () => void;
}

export function Header({ onOenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="bank" />
                <button type="button" onClick={onOenNewTransactionModal}>
                    Nova transação
                </button>
                </Content>
        </Container>
    )
}