import React from 'react';
import Button from 'src/components/atoms/Button';

type ButtonFormTypes = {
  text: string,
  label: string,
  testId: string
}
const ButtonForm = ({ text, label, testId }: ButtonFormTypes) => {
  return (
    <Button label={label} testId={testId}>
      {text}
    </Button>
  );
};

export default ButtonForm;