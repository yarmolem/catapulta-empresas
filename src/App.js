import InputName from "./components/inputs/InputName"
import InputPhone from "./components/inputs/InputPhone"
import InputUploadImage from "./components/inputs/InputUploadImage"
import SelectDate from "./components/inputs/SelectDate"
import InputTextArea from "./components/inputs/InputTextArea"
import DropdonwnTipo1 from "./components/dropdown/DropdonwnTipo1"

const App = () => {
  const dateList = ["10-10-2021", "11-11-2021", "22-12-2021"];

  return (
    <div className="">
      <InputName
        labelName="Nombre"
        inputColor=""
      />
      <SelectDate dateList={dateList} />
      <InputPhone />
      <InputUploadImage />
      <InputTextArea/>
      <DropdonwnTipo1 title="Votaciones" content="fjkhfjhwejfhewkfwekhkwehekwlfhweklfhweflkhekwl"/>
      
    </div>
  )
}

export default App
