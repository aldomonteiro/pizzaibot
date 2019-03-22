import React from 'react';
import {
    Header, Items, Columns, Price, PriceHeader,
    PriceItem, Container
} from './pricing.css';
import Title from '../title';
import Icon1 from './plano-degustacao.png';
import Icon2 from './plano-delivery.png';
import Icon3 from './plano-gourmet.png';
import Icon4 from './plano-rede.png';

const Pricing = () => (
    <Container>
        <Header>
            <Title as="h2" size="large">
                Planos e preços
            </Title>
        </Header>
        <Items>
            <Columns>
                <Price>
                    <PriceHeader>
                        <img alt="Plano Degustaçao" src={Icon1} />
                        <div>Degustação</div>
                    </PriceHeader>
                    <PriceItem bgColor="#cccc00" fontSize="30px" color="white">Grátis!</PriceItem>
                    <PriceItem bgColor='#E6E8F6' fontSize="15px">Experimente sem pagar nada. Quando o limite de pedidos for atendido,
                        o seu plano será atualizado para o Plano Delivery.</PriceItem>
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
                        <img alt="Plano Delivery" src={Icon2} />
                        <div>Delivery</div>
                    </PriceHeader>
                    <PriceItem bgColor="#00Aeef" fontSize="30px" color="white">Consulte</PriceItem>
                    <PriceItem bgColor='#E6E8F6'>Pedidos ilimitados!</PriceItem>
                    <PriceItem >Cardápio Online</PriceItem>
                    <PriceItem bgColor='#E6E8F6'>Sistema de gestão de pedidos online</PriceItem>
                    <PriceItem>Consultas ilimitadas</PriceItem>
                    <PriceItem bgColor='#E6E8F6'>Whatsapp Integrado</PriceItem>
                </Price>
            </Columns>
            <Columns>
                <Price>
                    <PriceHeader>
                        <img alt="Plano Gourmet" src={Icon3} />
                        <div>Gourmet</div>
                    </PriceHeader>
                    <PriceItem bgColor="#ffd700" fontSize="30px" color="white">Consulte</PriceItem>
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
                        <img alt="Plano Rede" src={Icon4} />
                        <div>Rede</div>
                    </PriceHeader>
                    <PriceItem bgColor="#6600cc" fontSize="30px" color="white">Consulte</PriceItem>
                    <PriceItem bgColor='#E6E8F6' fontSize="15px">Se você gerencia uma rede de restaurantes, podemos
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
    </Container>
);

export default Pricing;
