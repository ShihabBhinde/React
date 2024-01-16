function Random(){

  let number = Math.random() * 100;

  return <p style={{'background-color':' #776691'}}>Random number is : {Math.round(number)}</p>;
}

export default Random;

