import React, { useState } from 'react'
import { CartBtnIcon } from '../../UI/icons'
import AccordionItem from '../../components/AccordionItem'
import Button from '../../components/Button'
import CustomRadio from '../../components/CustomRadio'
import HeaderItemPrice from '../../components/HeaderItemPrice'
import Modal from '../../components/Modal'
import PopUpWrapper from '../../components/PopUpWrapper'

import styles from './.module.scss'

export default function AddItemPopUp() {

  const [Pizaachecked, setPizzaChecked] = useState('vegetarian');
  const [PotatoChecked, setPotatoChecked] = useState(['vegetarian1']);
  const [Potato2Checked, setPotato2Checked] = useState(['vegetarian2']);

  console.log(Pizaachecked)
  console.log(PotatoChecked)

  const Pizza = [
    {
      id: 'vegetarian',
    },
    {
      id: 'pepperoni',
    },
    {
      id: 'margarita',
    },
    {
      id: 'chicken_supreme',
      text: 'Chicken Supreme'
    },
    {
      id: 'super_supreme',
      text: 'Super Supreme'
    },
  ];

  const potato = [
    {
      text: 'vegetarian',
      id: 'vegetarian1',
    },
    {
      text: 'pepperoni',
      id: 'pepperoni1',
    },
    {
      text: 'margarita',
      id: 'margarita1',
    },
    {
      id: 'chicken_supreme1',
      text: 'Chicken Supreme',
    },
    {
      id: 'super_supreme1',
      text: 'Super Supreme',
    },
  ];  

  const potato2 = [
    {
      id: 'vegetarian2',
      text: 'vegetarian',
    },
    {
      id: 'pepperoni2',
      text: 'pepperoni',
    },
    {
      id: 'margarita2',
      text: 'margarita',
    },
    {
      id: 'chicken_supreme2',
      text: 'Chicken Supreme',
    },
    {
      id: 'super_supreme2',
      text: 'Super Supreme',
    },
  ];
  

  return (
    <Modal id='add_item'>
      <PopUpWrapper
        title='Add Item Choices'
        id='add_item'
        textStart={true}
      >
        <div className={styles.content}>
          <HeaderItemPrice />
          <div 
            className={`d-flex flex-column ${styles.acc__container}`} 
            id="ACC__ID"
          >
            <AccordionItem title='Pizzas(Choose 1)' parentID="ACC__ID" id="Pizzas">
              <div className={`d-flex flex-wrap ${styles.acc__content}`}>
                {Pizza.map(input => (
                  <div 
                    className={styles.radioItem}
                    key={input.id}
                  >
                    <CustomRadio 
                      setChecked={setPizzaChecked} 
                      checked={Pizaachecked} 
                      name={'pizza'} 
                      type='radio' 
                      id={input.id} 
                      text={input.text || input.id}
                    />
                  </div>
                ))}
              </div>
            </AccordionItem>
            <AccordionItem title='Potato Wedges' parentID="ACC__ID" id="Potato">
              <div className={`d-flex flex-wrap ${styles.acc__content}`}>
                {potato.map(input => (
                  <div 
                    className={styles.radioItem}
                    key={input.id}
                  >
                    <CustomRadio
                      name={input.id} 
                      type='checkbox' 
                      id={input.id} 
                      text={input.text || input.id}
                      setcheckedArray={setPotatoChecked}
                      checkedArray={PotatoChecked}
                    />
                  </div>
                ))}
              </div>
            </AccordionItem>
            <AccordionItem title='Potato Wedges' parentID="ACC__ID" id="Potato2">
              <div className={`d-flex flex-wrap ${styles.acc__content}`}>
                {potato2.map(input => (
                  <div 
                  className={styles.radioItem}
                  key={input.id}
                  >
                    <CustomRadio
                      name={input.id} 
                      type='checkbox' 
                      id={input.id} 
                      text={input.text || input.id}
                      setcheckedArray={setPotato2Checked}
                      checkedArray={Potato2Checked}
                      defaultValue='vegetarian'
                    />
                  </div>
                ))}
              </div>
            </AccordionItem>
          </div>
        </div>
        <div className={styles.btn}>
        <Button>
          <div 
            className={`d-flex align-items-center justify-content-center ${styles.btn__content}`}
          >
            <CartBtnIcon />Add To Cart
          </div>
        </Button>
        </div>
      </PopUpWrapper>
    </Modal>
  )
}
