import { useState, useEffect } from 'react';
import { Card } from '../interfaces/Card';

const keyStorage = 'hearthStoneStorage'

export const useForm = () => {
  const [values, setValues] = useState<Card[]>([]);

  function createId() {
    const ids = values.map((item) => item.id)
    let number = Math.ceil(Math.random() * 30);
    while (ids.indexOf(number) >= 0) {
      number = Math.ceil(Math.random() * 30);
    }
    return number;
  }

  const getItems = (): Card[] => {
    const storagedValue = localStorage.getItem(keyStorage);
    return storagedValue ? JSON.parse(storagedValue) : [];
  }

  useEffect(() => {
    const items = getItems()
    setValues(items)
  }, []);

  const maximumNumberCards = () => values.length === 30

  const handleCreate = (value: Card) => {
    if (maximumNumberCards()) {
      return alert('Numero máximo de cartas atingido!')
    }
    setValues((prevState) => [...prevState, { ...value, id: createId() }]);
    localStorage.setItem(keyStorage, JSON.stringify([...values, value]))
  };

  const handleDelete = (value: Card) => {
    const items = getItems()
    const index = items.findIndex(item => item.id === value.id)
    items.splice(index, 1);
    setValues(items)
    localStorage.setItem(keyStorage, JSON.stringify(items));
  }

  const handleUpdate = (value: Card) => {
    const items = getItems()
    const index = items.findIndex(item => item.id === value.id)
    items[index] = value;
    setValues(items)
    localStorage.setItem(keyStorage, JSON.stringify(items));
  }


  return {
    values,
    setValues,
    handleDelete,
    handleCreate,
    handleUpdate
  };
};
