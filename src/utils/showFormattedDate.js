const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const locale = localStorage.getItem('locale');

  return new Date(date).toLocaleDateString(`${locale}-ID`, options);
};

export default showFormattedDate;
