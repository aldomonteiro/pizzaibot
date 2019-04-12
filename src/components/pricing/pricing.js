import React, { useState, useRef } from 'react';
import Modal from 'react-responsive-modal';
import {
    Header, Items, Columns, Price, PriceHeader,
    PriceItem, Container, Img, Button
} from './pricing.css';
import Cadastro from '../cadastro/cadastro';
import Title from '../title';
import Icon1 from './plano-degustacao.png';
import Icon2 from './plano-delivery.png';
import Icon3 from './plano-gourmet.png';
import Icon4 from './plano-rede.png';

const Pricing = () => {
    const [isOpen, setOpen] = useState(false);
    const [origin, setOrigin] = useState('pricing');
    const modalContainer = useRef(null);
    return (
        <Container ref={modalContainer}>
            <Header>
                <Title as="h2" size="large">
                Planos e preços
                </Title>
            </Header>
            <Items>
                <Columns>
                    <Price>
                        <PriceHeader>
                            <Img alt="Plano Degustaçao" src={Icon1} />
                            <div>Degustação</div>
                        </PriceHeader>
                        <Button bgColor="#cccc00" onClick={() => { setOrigin('degustacao'); setOpen(true) }}>
                            Grátis! Clique aqui
                        </Button>
                        <PriceItem bgColor='#E6E8F6' fontSize="12px">Experimente sem pagar nada. Quando o limite de pedidos for atendido,
                        o seu plano será atualizado para o próximo plano.</PriceItem>
                        <PriceItem>100 pedidos por mês</PriceItem>
                        <PriceItem bgColor='#E6E8F6'>Cardápio Online</PriceItem>
                        <PriceItem>Sistema de gestão de pedidos online</PriceItem>
                        <PriceItem bgColor='#E6E8F6'>Consultas ilimitadas</PriceItem>
                        <PriceItem bgColor='#E6E8F6'>Whatsapp Integrado</PriceItem>
                    </Price>
                </Columns>
                <Columns>
                    <Price>
                        <PriceHeader>
                            <Img alt="Plano Delivery" src={Icon2} />
                            <div>Mini Delivery</div>
                        </PriceHeader>
                        <Button bgColor="green" onClick={() => { setOrigin('mini-delivery'); setOpen(true) }}>
                        Clique aqui e consulte</Button>
                        <PriceItem bgColor='#E6E8F6'>Até 500 pedidos por mês</PriceItem>
                        <PriceItem >Cardápio Online</PriceItem>
                        <PriceItem bgColor='#E6E8F6'>Sistema de gestão de pedidos online</PriceItem>
                        <PriceItem>Consultas ilimitadas</PriceItem>
                        <PriceItem bgColor='#E6E8F6'>Whatsapp Integrado</PriceItem>
                    </Price>
                </Columns>
                <Columns>
                    <Price>
                        <PriceHeader>
                            <Img alt="Plano Delivery" src={Icon2} />
                            <div>Delivery</div>
                        </PriceHeader>
                        <Button bgColor="#00Aeef" onClick={() => { setOrigin('delivery'); setOpen(true) }}>
                        Clique aqui e consulte</Button>
                        <PriceItem bgColor='#E6E8F6'>Até 1.000 pedidos por mês</PriceItem>
                        <PriceItem >Cardápio Online</PriceItem>
                        <PriceItem bgColor='#E6E8F6'>Sistema de gestão de pedidos online</PriceItem>
                        <PriceItem>Consultas ilimitadas</PriceItem>
                        <PriceItem bgColor='#E6E8F6'>Whatsapp Integrado</PriceItem>
                    </Price>
                </Columns>
                <Columns>
                    <Price>
                        <PriceHeader>
                            <Img alt="Plano Gourmet" src={Icon3} />
                            <div>Gourmet</div>
                        </PriceHeader>
                        <Button bgColor="#ffd700" onClick={() => { setOrigin('gourmet'); setOpen(true) }}>
                        Clique aqui e consulte</Button>
                        <PriceItem bgColor='#E6E8F6'>Pedidos ilimitados!</PriceItem>
                        <PriceItem>Cardápio Online</PriceItem>
                        <PriceItem bgColor='#E6E8F6'>Sistema de gestão de pedidos online</PriceItem>
                        <PriceItem>Consultas ilimitadas</PriceItem>
                        <PriceItem bgColor='#E6E8F6'>Whatsapp Integrado</PriceItem>
                        <PriceItem color='blue' fontSize='20px'>Suporte 24x7 por telefone</PriceItem>
                    </Price>
                </Columns>
                <Columns>
                    <Price>
                        <PriceHeader>
                            <Img alt="Plano Rede" src={Icon4} />
                            <div>Rede</div>
                        </PriceHeader>
                        <Button bgColor="#6600cc" onClick={() => { setOrigin('rede'); setOpen(true) }}>
                        Clique aqui e consulte</Button>
                        <PriceItem bgColor='#E6E8F6' fontSize="12px">Se você gerencia uma rede de restaurantes, podemos
                        criar uma solução para gestão de pedidos gerados em uma única página
                        e entregues por várias lojas.</PriceItem>
                        <PriceItem>Sistem de gestão de pedidos online</PriceItem>
                        <PriceItem bgColor='#E6E8F6'>Cardápio Online</PriceItem>
                        <PriceItem>Consultas ilimitadas</PriceItem>
                        <PriceItem bgColor='#E6E8F6'>Whatsapp Integrado</PriceItem>
                        <PriceItem>Segmentação de pedidos por loja/endereço do cliente</PriceItem>
                        <PriceItem bgColor='#E6E8F6'>Suporte 24x7 por telefone</PriceItem>
                    </Price>
                </Columns>
            </Items>
            <Modal
                open={isOpen}
                onClose={() => setOpen(false)}
                center
                container={modalContainer.current}>
                <Cadastro origin={origin} />
            </Modal>
        </Container>
    );
}

export default Pricing;
