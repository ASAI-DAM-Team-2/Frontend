import React, { Component } from 'react';
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import DishCard from '../../components/dish-card/DishCard';

import './HomePage.scss';
import IndexHeader from '../../components/Headers/IndexHeader';

const items = [
  {
    src: require('../../assets/img/meals/breakfast.jpg'),
    altText: 'Somewhere',
    caption: 'Somewhere',
  },
  {
    src: require('../../assets/img/meals/launch.jpg'),
    altText: 'Somewhere else',
    caption: 'Somewhere else',
  },
  {
    src: require('../../assets/img/meals/dinner.jpg'),
    altText: 'Here it is',
    caption: 'Here it is',
  },
];
//
function HomePage() {
  const mainDishes = [
    {
      title: 'Breakfast',
      description: 'mainDishes loerm loerm',
      img: {
        src: require('../../assets/img/meals/breakfast.jpg'),
        altText: 'Somewhere',
        caption: 'Somewhere',
      },
    },
    {
      title: 'Launch',
      description: 'mainDishes loerm loerm',
      img: {
        src: require('../../assets/img/meals/launch.jpg'),
        altText: 'Somewhere',
        caption: 'Somewhere',
      },
    },
    {
      title: 'Dinner',
      description: 'mainDishes loerm loerm',
      img: {
        src: require('../../assets/img/meals/dinner.jpg'),
        altText: 'Somewhere',
        caption: 'Somewhere',
      },
    },
  ];
  const otherDishes = [
    {
      title: 'one',
      description: 'otherDishes loerm loerm',
      img: {
        src: require('../../assets/img/meals/dinner.jpg'),
        altText: 'Somewhere',
        caption: 'Somewhere',
      },
    },
    {
      title: 'two',
      description: 'otherDishes loerm loerm',
      img: {
        src: require('../../assets/img/soroush-karimi.jpg'),
        altText: 'Somewhere',
        caption: 'Somewhere',
      },
    },
    {
      title: 'three',
      description: 'otherDishes loerm loerm',
      img: {
        src: require('../../assets/img/soroush-karimi.jpg'),
        altText: 'Somewhere',
        caption: 'Somewhere',
      },
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <div>
      <IndexHeader />
      <div className='homepage'>
        <div>
          <div className='section pt-o' id='carousel'>
            <Container>
              <Row>
                <Col className='ml-auto mr-auto' md='8'>
                  <Card className='page-carousel'>
                    <Carousel
                      activeIndex={activeIndex}
                      next={next}
                      previous={previous}
                    >
                      <CarouselIndicators
                        items={items}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                      />
                      {items.map((item) => {
                        return (
                          <CarouselItem
                            onExiting={onExiting}
                            onExited={onExited}
                            key={item.src}
                          >
                            <img src={item.src} alt={item.altText} />
                            <CarouselCaption
                              captionText={item.caption}
                              captionHeader=''
                            />
                          </CarouselItem>
                        );
                      })}
                      <a
                        className='left carousel-control carousel-control-prev'
                        data-slide='prev'
                        href='#pablo'
                        onClick={(e) => {
                          e.preventDefault();
                          previous();
                        }}
                        role='button'
                      >
                        <span className='fa fa-angle-left' />
                        <span className='sr-only'>Previous</span>
                      </a>
                      <a
                        className='right carousel-control carousel-control-next'
                        data-slide='next'
                        href='#pablo'
                        onClick={(e) => {
                          e.preventDefault();
                          next();
                        }}
                        role='button'
                      >
                        <span className='fa fa-angle-right' />
                        <span className='sr-only'>Next</span>
                      </a>
                    </Carousel>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>{' '}
        </div>
        <Container>
          <Row>
            {mainDishes.slice(0, 3).map((value, index) => {
              return (
                <Col className='ml-auto mr-auto' key={index}>
                  <DishCard
                    title={value.title}
                    description={value.description}
                    img={value.img}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
        <div />
      </div>
    </div>
  );
}

export default HomePage;
