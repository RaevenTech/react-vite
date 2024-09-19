import "./btnClick.css"

const BtnClick = () => {

    const handleClick = (event) => {console.log(event)}

  return ( <button className="btn" onClick={(event) => handleClick(event)}>Click me</button> )

}

export default BtnClick