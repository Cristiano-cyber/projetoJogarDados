/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable default-case */
import { useState } from "react";
import Dado1 from "./images/face1.png"
import Dado2 from "./images/face2.png"
import Dado3 from "./images/face3.png"
import Dado4 from "./images/face4.png"
import Dado5 from "./images/face5.png"
import Dado6 from "./images/face6.png"
import { Img, Main } from "./styled";

function App() {
  const [inicio, setInicio] = useState(1)

  function jogarDados (){
    const sortearNum = Math.floor(Math.random() * 6 + 1)

    setInicio(sortearNum)
    console.log(sortearNum)
  }

  const result = () => {
    switch (inicio) {
      case 1:
        return <Img src={Dado1} alt="img1"/>
      case 2:
        return <Img src={Dado2} />
      case 3:
        return <Img src={Dado3} />
      case 4:
        return <Img src={Dado4} />
      case 5:
        return <Img src={Dado5} />
      case 6:
        return <Img src={Dado6} />     
    }
  }

  return (
    <Main>
      <h1>JOGAR DADOS</h1>
      {result()}
      <br />
      <button onClick={jogarDados}>JOGAR</button>
    </Main>
  );
}

export default App;
