import {
  Banner,
  BannerContent,
  BenefitsContainer,
  BenefitsContent,
  CardList,
  Container,
  Content,
  DropContainer,
} from './styles'

import { useDrop } from 'react-dnd'

import CoffeeBanner from '../../assets/coffee-banner.svg'
import {
  Coffee,
  Package,
  ShoppingCart,
  ShoppingCartSimple,
  Timer,
} from 'phosphor-react'

import { coffeeList } from '../../utils/coffeeList'
import { CoffeeCard } from '../../components/CoffeeCard'
import { useShoppingCart } from '../../hooks/useShoppingCart'

export function Home() {
  const {
    getItemDroppedAndAddInCart,
    cardIsInDragging,
    dropContainerIsHover,
    setDropContainerIsHover,
  } = useShoppingCart()

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      setDropContainerIsHover(true)
    },
    drop(item: any, monitor) {
      getItemDroppedAndAddInCart(item.id)
      setDropContainerIsHover(false)
    },
  })

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

      <DropContainer
        ref={dropRef}
        className={
          cardIsInDragging
            ? `visible ${dropContainerIsHover && 'isHover'}`
            : 'hidden'
        }
      >
        <div>
          <ShoppingCartSimple size={32} />
          <strong>Solte aqui para adicionar ao carrinho</strong>
        </div>
      </DropContainer>
    </Container>
  )
}
