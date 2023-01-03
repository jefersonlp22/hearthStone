import { FormEvent } from 'react';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { Card } from '../../interfaces/Card';
import { INNITIAL_CARD_VALUES } from '../../utils';
import { Container } from './styles';

interface FormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  values: Card
  handleChange: (key: string, value: string | number) => void
}

const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const CreateOrUpdateForm = ({ handleSubmit, values = INNITIAL_CARD_VALUES, handleChange }: FormProps) => {

  return (
    <Container>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className='input__box'>
          <div>
            <div className='input'>
              <TextField
                required
                value={values.name}
                onChange={(e) => handleChange('name', e.target.value)}
                id="standard-basic"
                label="Nome"
                variant="standard"
              />
            </div>
            <div className='input'>
              <TextField
                multiline={true}
                id="outlined-multiline-static"
                rows={3}
                required
                value={values.description}
                onChange={(e) => handleChange('description', e.target.value)}
                label="Descrição"
                variant="outlined"
              />
            </div>
          </div>
        </div>
        <div className='input__box'>
          <div className='input__select'>
            <InputLabel id="demo-simple-select-standard-label">Ataque</InputLabel>
            <Select
              fullWidth
              size='small'
              value={values.attack}
              onChange={(e) => handleChange('attack', e.target.value)}
            >
              {options.map((option, i) => <MenuItem key={i} value={option}>{option}</MenuItem>)}
            </Select>
          </div>
          <div className='input__select'>
            <InputLabel id="demo-simple-select-standard-label">Defesa</InputLabel>
            <Select
              fullWidth
              size='small'
              value={values.defence}
              onChange={(e) => handleChange('defence', e.target.value)}
            >
              {options.map((option, i) => <MenuItem key={i} value={option}>{option}</MenuItem>)}
            </Select>
          </div>
          <div className='input__select'>
            <InputLabel id="demo-simple-select-standard-label">Classe</InputLabel>
            <Select
              fullWidth
              size='small'
              value={values.class}
              onChange={(e) => handleChange('class', e.target.value)}
            >
              <MenuItem value={'Mago'}>{'Mago'}</MenuItem>
              <MenuItem value={'Paladino'}>{'Paladino'}</MenuItem>
              <MenuItem value={'Caçador'}>{'Caçador'}</MenuItem>
              <MenuItem value={'Druida'}>{'Druida'}</MenuItem>
              <MenuItem value={'Qualquer'}>{'Qualquer'}</MenuItem>
            </Select>
          </div>
          <div className='input__select'>
            <InputLabel id="demo-simple-select-standard-label">Tipo</InputLabel>
            <Select
              fullWidth
              size='small'
              value={values.type}
              onChange={(e) => handleChange('type', e.target.value)}
            >
              <MenuItem value={'Magia'}>{'Magia'}</MenuItem>
              <MenuItem value={'Criatura'}>{'Criatura'}</MenuItem>
            </Select>
          </div>
        </div>
        <div className='button'>
          <Button variant='outlined' type='submit'> Salvar </Button>
        </div>
      </form>
    </Container>
  )
}

export default CreateOrUpdateForm;