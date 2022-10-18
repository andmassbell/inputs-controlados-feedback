import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [email, setEmail] = useState("");
const [formFlow, setFormFlow] = useState(1); //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX
const [date, setDate] = useState("");
const [phone, setPhone] = useState("");
const [genero, setGenero] = useState("");
const [etnia, setEtnia] = useState("");
const [course, setCourse] = useState("false");
const [course2, setCourse2] = useState("false");
const [checkbox, setCheckbox] = useState("false");
const [checkbox2, setCheckbox2] = useState("false");

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeDate = (event) => {
  setDate(event.target.value);
};

const onChangePhone = (event) => {
  setPhone(event.target.value);
};

const onChangeGenero = (event) => {
  setGenero(event.target.value);
};

const onChangeEtnia = (event) => {
  setEtnia(event.target.value);
};

const onChangeCourse = () => {
  setCourse(!course);
};

const onChangeCourse2 = () => {
  setCourse2(!course2);
};

const onChangeCheckbox = () => {
  setCheckbox(!checkbox);
};

const onChangeCheckbox2 = () => {
  setCheckbox2(!checkbox2);
};

const sendData = () => {
  if ( name.length === 0 || age.length === 0 || email.length === 0){
    alert("Todos os campos são obrigatórios! Os preencha.");
  } else if (name.length < 10 || name.length > 30){
    alert("Nome necessita ter no minimo 10 caracteres e máximo de 30!")
  } else if (age < 18) {
    alert("É necessário que o estudante seja maior de idade.");
  } else if (!email.includes("@") && !email.includes(".")){
    alert("Email possui caracteres faltando!")
  } else {

    setFormFlow(2)
  }
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
}

const sendData2 = () => {
  if (date.length !== 10) {
    alert("Data de nascimento não preenchida!");
  } else if (phone.length !== 11){
    alert("Insira um número de telefone válido")
  } else if (genero === ""){
    alert("Selecione um gênero!")
  } else if (etnia === ""){
    alert("Selecione uma etnia!")
  } else if (course === false && course2 === false){
    alert("Selecione uma opção de curso!")
  } else if (checkbox !== true || checkbox2 !== true){
    alert("Selecione as duas caixas!")
  } else {
    alert("Inscrição bem sucedida!");
      setDate("");
      setPhone("");
      setGenero("");
      setEtnia("");
      setCourse();
      setCourse2();
      setCheckbox();
      setCheckbox2();
  } 
    
}


  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      name={name}
      age={age}
      email={email}
      onChangeName={onChangeName}
      onChangeAge={onChangeAge}
      onChangeEmail={onChangeEmail}
      sendData={sendData}
      setFormFlow={setFormFlow}
      // insira aqui suas props
      /> : <ConfirmationForm
      date={date}
      phone={phone}
      genero={genero}
      etnia={etnia}
      course={course}
      checkbox={checkbox}
      onChangeDate={onChangeDate}
      onChangePhone={onChangePhone}
      onChangeGenero={onChangeGenero}
      onChangeEtnia={onChangeEtnia}
      onChangeCourse={onChangeCourse}
      onChangeCourse2={onChangeCourse2}
      onChangeCheckbox={onChangeCheckbox}
      onChangeCheckbox2={onChangeCheckbox2}
      sendData2={sendData2}
      />}
    </MainContainer>
  )
}

export default MainPage