import React from 'react';

function useInput(defaultValue) {
  const [value, setValue] = React.useState(defaultValue);
  const onChangeHandler = (event) => setValue(event.target.value);
  return [value, onChangeHandler];
}

export default useInput;
