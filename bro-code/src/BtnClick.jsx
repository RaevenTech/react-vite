import "./btnClick.css"

const BtnClick = () => {

  let count = 0

  const handleClick = (name) => { 
    if(count < 3){
      count++
      console.log(`${name} you clicked ${count} times`)
    }else if(count === 3){
      console.log(`${name} stop clicking me`)
    }else{
      console.log(`OK ${name} that's enough!!!`)
    }
  }
 
  

  return (
    <button className="btn" onClick={() => handleClick("Bro")}>Click me</button>
  )
}

export default BtnClick