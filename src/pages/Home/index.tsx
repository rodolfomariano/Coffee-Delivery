import {
  Banner,
  BannerContent,
  BenefitsContainer,
  BenefitsContent,
  CardList,
  Container,
  Content,
} from './styles'

import CoffeeBanner from '../../assets/coffee-banner.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { coffeeList } from '../../utils/coffeeList'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <Container>
      <Banner>
        <BannerContent>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <BenefitsContainer>
              <BenefitsContent>
                <div>
                  <ShoppingCart size={16} weight="fill" />
                </div>
                <span>Compra simples e segura</span>
              </BenefitsContent>

              <BenefitsContent>
                <div>
                  <Package size={16} weight="fill" />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </BenefitsContent>

              <BenefitsContent>
                <div>
                  <Timer size={16} weight="fill" />
                </div>
                <span>Entrega rápida e rastreada</span>
              </BenefitsContent>

              <BenefitsContent>
                <div>
                  <Coffee size={16} weight="fill" />
                </div>
                <span>O café chega fresquinho até você</span>
              </BenefitsContent>
            </BenefitsContainer>
          </div>
          <img src={CoffeeBanner} alt="" />
        </BannerContent>
      </Banner>

      <Content>
        <h2>Nossos cafés</h2>

        <CardList>
          {coffeeList.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                title={coffee.title}
                description={coffee.description}
                image={coffee.coffeeImage}
                price={coffee.price}
                type={coffee.type}
              />
            )
          })}
        </CardList>
      </Content>
    </Container>
  )
}
