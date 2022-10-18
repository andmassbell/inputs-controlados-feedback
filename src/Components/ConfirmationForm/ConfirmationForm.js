import React from 'react'
import { Form} from '../MainPage/styles'

const ConfirmationForm = (props) => {
  return (
    <Form>
        <label>
          Data de nascimento:
        <input
        type="date"
        placeholder="01/01/2004"
        value={props.date}
        onChange={props.onChangeDate}
        />
        </label>

        <label>
          Insira seu número de celular:
          <input
          type="phone"
          placeholder='(00) 0000-0000'
          value={props.phone}
          onChange={props.onChangePhone}
          />
          </label>

          <label>
          Selecione uma opção de gênero:
          <select value={props.genero} onChange={props.onChangeGenero}>
            <option></option>
            <option>Homem cisgênero</option>
            <option>Mulher cisgênero</option>
            <option>Homem Trans</option>
            <option>Mulher Trans</option>
            <option>Pessoa não binária</option>
            <option>Outros</option>
            <option>Prefiro não responder</option>
          </select>
          </label>

          <label>
          Selecione uma opção de etnia:
          <select value={props.etnia} onChange={props.onChangeEtnia}>
          <option></option>
          <option>Pardo</option>
          <option>Negro</option>
          <option>Branco</option>
          <option>Amarelo</option>
          <option>Indígena</option>
          <option>Prefiro não dizer</option>
          </select>
          </label>

          <label>
          Curso Integral web fullstack 
          <input type="radio" name="turma" onChange={props.onChangeCourse} />
          </label>

          <label>
            Curso noturno Web fullstack
            <input type="radio" name="turma" onChange={props.onChangeCourse2} />
          </label>

          <label>
            Tem ensino médio completo?  
            <input type="checkbox" onChange={props.onChangeCheckbox} />
          </label>

          <label>
            Tem disponibilidade para participar das atividades? 
            <input type="checkbox" onChange={props.onChangeCheckbox2} />
          </label>

      <button onClick={props.sendData2}>Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm