// Action Methods
// "/projects"
const index = (req, res) => {
  res.send('Respondiendo a "/Projects/index"');
};

// "/projects/add"
const add = (req, res) => {
  res.send('Respondiendo a "/projects/addView"');
};

// Pendiente por programar
export default {
  add,
  index,
};
