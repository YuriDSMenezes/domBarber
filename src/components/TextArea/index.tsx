import React, { TextareaHTMLAttributes } from 'react';
import * as S from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, ...rest }) => {
  return (
    <>
      <S.Container>
        {label ? <S.LabelText>{label}</S.LabelText> : null}
        <S.TextArea rows={20} {...rest} />
      </S.Container>
    </>
  );
};

export default TextArea;
