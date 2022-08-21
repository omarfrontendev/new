import React from "react";
import ResturantDetailsHeader from "../../components/ResturantDetailsHeader";
import ItemDetailsRow from "../../components/ItemDetailsRow";
import ResturantCategoriesList from "../../components/ResturantCategoriesList";
import Accordion from "../../components/Accordion";
import { useState } from "react";

export default function ResturantDetailsPage() {

  const [currentActive, setCurrentActive] = useState('');

  const categories = [
    {
      id: "Americana_Festival",
      title: "Americana Festival",
      control: 'a',
      meals:[
        {
          id: 1,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 2,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 3,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
      ]
    },
    {
      id: "Deals",
      title: "Deals",
      control: 'b',
      meals:[
        {
          id: 4,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 5,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 6,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
      ]
    },
    {
      id: "Pizzas",
      title: "Pizzas",
      control: 'c',
      meals:[
        {
          id: 7,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 8,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 9,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
      ]
    },
    {
      id: "Salads",
      title: "Salads",
      control: 'd',
      meals:[
        {
          id: 10,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 11,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 12,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
      ]
    },
    {
      id: "Appetizers",
      title: "Appetizers",
      control: 'e',
      meals:[
        {
          id: 13,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 14,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 15,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
      ]
    },
    {
      id: "Desserts",
      title: "Desserts",
      control: 'f',
      meals:[
        {
          id: 16,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 17,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 18,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
      ]
    },
    {
      id: "Drinks",
      title: "Drinks",
      control: 'g',
      meals:[
        {
          id: 19,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 20,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 21,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
      ]
    },
    {
      id: "Extras",
      title: "Extras",
      control: 'h',
      meals:[
        {
          id: 22,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 23,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
        {
          id: 24,
          img: '/assets/unnamed.png',
          name: 'Lux Chocolate',
          type: 'Etoile . Deserts',
          rating: 4.8,
          duration: 20,
          oldPrice: 100,
          currentPrice: 50
        },
      ]
    },
  ];  

  return (
    <div className="res__details__page__wrappper py-5">
      <ResturantDetailsHeader />
      <div className="row">
        <div className="d-lg-none">
          <ItemDetailsRow active='menu' />
        </div>
        <div className="order-2 order-lg-1 col-12 col-lg-8 pe-lg-4">
          <div className="pt-4 pt-lg-0">
            <div className="d-none d-lg-block">
              <ItemDetailsRow />
            </div>
            <Accordion
              currentActive={currentActive}
              setCurrentActive={setCurrentActive}
              categories={categories}
              id={"UNIQUE__ID"}
            />
          </div>
        </div>
        <div className="order-1 order-lg-2 col-12 col-lg-4 ps-lg-4">
          <div className="pt-1 pt-lg-5">
            <ResturantCategoriesList 
              setCurrentActive={setCurrentActive} 
              currentActive={currentActive}
              categories={categories}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
