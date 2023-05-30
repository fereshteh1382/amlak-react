const OptionSelect = ({Options}) => {
  return (
    <>
      {
        (Options && Options.length > 0) ?
        Options.map((item) => {
            
            return <option  key={item.key}  value={item.value}>{item.text}</option>
          }) 
          : <option></option>

      }
    </>

  )

}
export default OptionSelect;

