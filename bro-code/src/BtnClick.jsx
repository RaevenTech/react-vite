import "./btnClick.css"

const BtnClick = () => {

  const handleClick = () => {
    console.log("OUCH!")
  }

  return (
    <button className="btn" onClick={handleClick}>Click me</button>
  )
}

export default BtnClick