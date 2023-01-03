import { useState, FormEvent, useEffect } from 'react';
import { TableCell, TableRow, Modal, TextField } from '@mui/material';
import CreateOrUpdateForm from '../../components/Forms/createOrUpdate';
import { TableListEdit } from '../../components/Tables/TableListEdit';
import { Card } from '../../interfaces/Card';
import { INNITIAL_CARD_VALUES } from '../../utils';
import { useForm } from '../../hooks/useForm';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { Container, Content, ModalContent } from './styles';


const COLUMNS = [
  {
    label: 'Nome',
    width: '10%'
  },
  {
    label: 'Descrição',
    width: '40%'
  },
  {
    label: 'Ataque',
    width: '5%'
  },
  {
    label: 'Defesa',
    width: '5%'
  },
  {
    label: 'Classe',
    width: '5%'
  },
  {
    label: 'Tipo',
    width: '5%'
  },
  {
    label: 'Ação',
    width: '5%'
  }
]

const Home = () => {
  const [card, setCard] = useState<Card>(INNITIAL_CARD_VALUES);
  const [cardList, setCardList] = useState<Card[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editCard, setEditCard] = useState(false);
  const { values, handleCreate, handleDelete, handleUpdate } = useForm()

  useEffect(() => {
    setCardList(values)
  }, [values]);

  useEffect(() => {
    setCardList(values)
  }, []);

  const handleChange = (key: string, value: string | number) => {
    setCard({
      ...card,
      [key]: value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    editCard ? handleUpdate(card) : handleCreate(card)
    handleCloseModal()
  }

  const handleEdit = (value: Card) => {
    setEditCard(true)
    setCard(value)
  }

  const handleCloseModal = () => {
    setEditCard(false)
    setCard(INNITIAL_CARD_VALUES)
  }

  const searchCard = (search: string) => {
    cardList.filter(card => {
      const cardData =
        `
        ${card.name.toUpperCase()}
        ${card.id}
        ${card.class.toUpperCase()}
        ${card.type.toUpperCase()}
      `;
      const searchData = search.toUpperCase();

      return cardData.indexOf(searchData) > -1;
    });
  }

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - cardList.length) : 0;

  return (
    <Container>
      {!editCard &&
        <Content>
          <h2>Hearth Stone</h2>
          <CreateOrUpdateForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={card}
          />
          <div className='search'>
            <div></div>
            <h3>Lista de Cartas</h3>
            <div>
              <TextField
                size='small'
                onChange={(e) => searchCard(e.target.value)}
                label="Pesquisar"
                placeholder='id, Nome, Classe, Tipo'
              />
            </div>
          </div>
          <TableListEdit
            data={cardList}
            columns={COLUMNS}
            page={page}
            rowsPerPage={rowsPerPage}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          >
            {(rowsPerPage > 0
              ? cardList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : cardList
            ).map((card) => (
              <TableRow key={card.name}>
                <TableCell width={'10%'} align="center">
                  {card.name}
                </TableCell>
                <TableCell width={'25%'} align="center">
                  {card.description}
                </TableCell>
                <TableCell width={'5%'} align="center">
                  {card.attack}
                </TableCell>
                <TableCell width={'5%'} align="center">
                  {card.defence}
                </TableCell>
                <TableCell width={'15%'} align="center">
                  {card.class}
                </TableCell>
                <TableCell width={'15%'} align="center">
                  {card.type}
                </TableCell>
                <TableCell align="center">
                  <BorderColorRoundedIcon onClick={() => handleEdit(card)} />
                  <DeleteRoundedIcon onClick={() => handleDelete(card)} />
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableListEdit>
        </Content>
      }
      <Modal
        open={editCard}
        onClose={() => handleCloseModal()}
      >
        <ModalContent>
          <div className='header'>
            <div></div>
            <div><h3>Editar carta</h3></div>
            <div><CloseRoundedIcon onClick={() => handleCloseModal()} /></div>
          </div>
          <CreateOrUpdateForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={card}
          />
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default Home;