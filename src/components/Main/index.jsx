export const Main = ({setCount}) => {
  const incrementClick = () => {
    setCount((prev) => {
      return prev + 1
    })
  } 


  const decrimentClick = () =>{
    setCount((prev) => {
      return prev - 1
    })
  }
  return (
    <>
    <button onClick={incrementClick}>Plus one</button>
    <button onClick={decrimentClick}>Minus one</button>
    <main>Main</main>
    </>
  )
}

export { Main };