displayJoke = (req, res) => {
    const data =
      'Why did the lollipop cross the road? ... It was stuck to the chicken!';
    res.status(200).send(data);
  };
  
  module.exports = {
    displayJoke,
  };