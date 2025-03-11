import * as React from 'react';
import { Theme } from '../../types';
import styled from '@emotion/styled';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fullWidth?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string | number;
  label: string;
  errorMessage?: string;
  startAdornment?: React.ReactNode;
}

const StyledTextField = styled('input')<TextFieldProps & { theme: Theme }>(
  ({ theme, error = false, fullWidth = false, startAdornment }) => ({
    fontFamily: 'inherit',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: 400,
    lineHeight: theme.typography.h5.lineHeight,
    padding: theme.size?.(6),
    paddingLeft: startAdornment ? theme.size?.(9) : theme.size?.(6),
    width: fullWidth ? '100%' : '',
    height: theme.size(16),
    backgroundColor: theme.colors.background.paper,
    boxShadow: `inset 0 0 0 1px ${
      error ? theme.colors.semantic.error : theme.colors.border['default']
    }`,

    borderRadius: theme.size(2),
    color: theme.colors.text.default,
    outline: 'none',
    transition: 'box-shadow 0.4s',
    '&:hover': {
      boxShadow: `inset 0 0 0 2px ${
        error ? theme.colors.semantic.error : theme.colors.border.hover
      }`,
    },
    '&:focus': {
      boxShadow: `inset 0 0 0 2px ${
        error ? theme.colors.semantic.error : theme.colors.border.selected
      }`,
    },
    '&:disabled': {
      backgroundColor: theme.colors.background.subtle,
      cursor: 'not-allowed',
    },
  })
);

const TextFieldWrapper = styled('div')<{ fullWidth?: boolean }>(
  ({ theme, fullWidth }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.size(1),
    width: fullWidth ? '100%' : 'auto',
    position: 'relative',
  })
);

const Label = styled('label')<{ theme: Theme }>(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  color: theme.colors.text.subtle,
}));

const ErrorMessage = styled('span')<{ theme: Theme }>(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.caption.fontWeight,
  color: theme.colors.semantic.error,
  paddingLeft: theme.size(4),
  position: 'absolute',
  bottom: 0,
  marginBottom: theme.size(-5),
}));

const StartAdornment = styled('div')<{ theme: Theme }>(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.h5.fontWeight,
  color: theme.colors.text.bold,
  position: 'absolute',
  pointerEvents: 'none',
  left: theme?.size(4),
  paddingRight: theme?.size(2),
  top: '50%',
  transform: 'translateY(-50%)',
}));

const InputContainer = styled('div')<{ theme: Theme }>(({ theme }) => ({
  position: 'relative',
}));

function TextField(props: TextFieldProps) {
  const {
    error,
    fullWidth,
    onChange,
    placeholder,
    value,
    label,
    errorMessage,
    startAdornment,
    ...otherProps
  } = props;
  const inputId = React.useId();
  const errorId = `${inputId}-error`;

  return (
    <TextFieldWrapper fullWidth={fullWidth}>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <InputContainer>
        {startAdornment && <StartAdornment>{startAdornment}</StartAdornment>}
        <StyledTextField
          startAdornment={startAdornment}
          id={inputId}
          error={error}
          fullWidth={fullWidth}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          aria-invalid={error}
          aria-describedby={error ? errorId : undefined}
          {...otherProps}
        />
      </InputContainer>

      {error && errorMessage && (
        <ErrorMessage id={errorId} role="alert">
          {errorMessage}
        </ErrorMessage>
      )}
    </TextFieldWrapper>
  );
}

export { TextField };
