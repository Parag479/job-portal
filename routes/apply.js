const handleApply = (projectId, companyId) => {
  axios.post('http://localhost:5000/apply', {
    projectId,
    companyId,
    message: 'I would like to apply with this project.',
  })
    .then(() => alert('Application submitted successfully!'))
    .catch((error) => console.error(error));
};