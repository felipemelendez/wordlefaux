const MatchFinder = ({rowIndex, inputState, setInputState}) => {

  const changeHandler = (e) => {
    // console.log(`Letter: ${e.target.value}, Location: ${e.target.name}`);
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value
    })
  }

  console.log(inputState); // Character location

  return (
    <div>
      {[...Array(5)].map((box, columnIndex) => {
        return (
          <>
          <input
            name={`${rowIndex}-${columnIndex}`} // target name
            type="text" // target value
            maxlength="1"
            size="1"
            onChange={changeHandler} // Sets the state of this tag
          />
        </>
        );
      })}
    </div>
  );
};

export default MatchFinder;
