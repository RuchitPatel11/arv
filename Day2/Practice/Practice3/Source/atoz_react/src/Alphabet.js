const Alphabet = () => {
  const alphabets = [];
  for (let i = 65; i < 91; i++) {
    alphabets.push(String.fromCharCode(i));
  }

  return (
    <ul>
      {alphabets.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Alphabet;
