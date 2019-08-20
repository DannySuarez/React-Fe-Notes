export const createNote = (title, body) => {
  return fetch('http://localhost:7890/api/v1/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  })
    .then(res => {
      if(!res.ok) throw 'Could not save';
      return res.json();
    });  
    
};

export const getNote = () => {
  return fetch('http://localhost:7890/api/v1/notes', {
  })
    .then(res => {
      if(!res.ok) throw 'Could not get';
      return res.json();
    });
};
