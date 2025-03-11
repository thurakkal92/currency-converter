import * as React from 'react';
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  useInteractions,
  FloatingFocusManager,
  useTypeahead,
  offset,
  flip,
  size,
  autoUpdate,
  FloatingPortal,
} from '@floating-ui/react';
import styled from '@emotion/styled';
import { Theme } from '../../types';
import { MenuItem } from '../MenuItem';
import { Box } from '../Box';
import { Icon } from '../Icon';

type Option = {
  country: string;
  currency: string;
  rate: number;
  countryCode: string;
  symbol: string;
};

interface SelectProps extends React.InputHTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean;
  error?: boolean;
  startAdornment?: React.ReactNode;
  options: Option[];
  placeholder?: string;
  label?: string;
  selectedItemLabel?: React.ReactNode;
  onMenuItemSelect?: (selectedOption: Option) => void;
}

const StyledSpan = styled('span')<{ theme: Theme }>(({ theme }) => ({
  display: 'inline-flex',
  height: 32,
  width: 32,
  borderRadius: '100%',
  overflow: 'hidden',
  marginRight: theme.size(2),
  border: '1px solid',
  borderColor: theme.colors.border.subtle,
}));

const Label = styled('label')<{ theme: Theme }>(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  color: theme.colors.text.subtle,
  paddingBottom: theme.size(1),
}));

const SelectLabel = styled('span')<{ theme: Theme }>(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  // fontWeight: theme.typography.h5.fontWeight,
  color: theme.colors.text.bold,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

const StyledMenuWrapper = styled('ul')<{ theme: Theme }>(({ theme }) => ({
  backgroundColor: theme.colors.background.paper,
  border: '1px solid',
  borderColor: theme.colors.border.subtle,
  boxShadow: theme.boxShadow['md'],
  paddingBottom: theme.size(2),
  paddingTop: theme.size(2),
}));

const StyledSelect = styled('div')<SelectProps & { theme: Theme }>(
  ({ theme, error = false, fullWidth = false, startAdornment }) => ({
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 400,
    lineHeight: theme.typography.body2.lineHeight,
    padding: theme.size?.(6),
    paddingLeft: startAdornment ? theme.size?.(9) : theme.size?.(6),
    width: fullWidth ? '100%' : '',
    height: theme.size(16),
    backgroundColor: theme.colors.background.paper,
    cursor: 'pointer',
    minWidth: 200,
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

export function Select(props: SelectProps) {
  const {
    // placeholder,
    startAdornment,
    label,
    options,
    selectedItemLabel,
    fullWidth,
    onMenuItemSelect,
  } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const { refs, floatingStyles, context } = useFloating<HTMLElement>({
    placement: 'bottom-start',
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const listRef = React.useRef<Array<HTMLElement | null>>([]);
  const listContentRef = React.useRef<Option[]>(options);
  const isTypingRef = React.useRef(false);

  const click = useClick(context, { event: 'mousedown' });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'listbox' });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    loop: true, // Allow looping through the list
  });
  const typeahead = useTypeahead(context, {
    listRef: listContentRef as any,
    activeIndex,
    selectedIndex,
    onMatch: isOpen ? setActiveIndex : setSelectedIndex,
    onTypingChange(isTyping) {
      isTypingRef.current = isTyping;
    },
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [dismiss, role, listNav, typeahead, click]
  );

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column" width={fullWidth ? '100%' : ''}>
      {label && <Label>{label}</Label>}
      <StyledSelect
        aria-labelledby="select-label"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={0}
        role="combobox"
        ref={refs.setReference}
        aria-autocomplete="none"
        {...getReferenceProps()}
      >
        <SelectLabel>
          <Box display="flex" alignItems="center">
            {startAdornment && <StyledSpan>{startAdornment}</StyledSpan>}
            {selectedItemLabel}
          </Box>
          <Icon icon={isOpen ? 'chevronUp' : 'chevronDown'} />
        </SelectLabel>
      </StyledSelect>
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <StyledMenuWrapper
              aria-labelledby="select-label"
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
                overflowY: 'auto',
                minWidth: 100,
                borderRadius: 8,
                outline: 0,
                display: 'flex',
                flexDirection: 'column',
              }}
              {...getFloatingProps()}
            >
              {options &&
                options.map((value, i) => (
                  <MenuItem
                    startAdornment={
                      <img
                        src={`https://flagcdn.com/${value.countryCode.toLocaleLowerCase()}.svg`}
                        alt="Ukraine"
                        height={24}
                        style={{ objectFit: 'cover' }}
                      />
                    }
                    label={`${value.currency} - ${value.country}`}
                    selected={i === selectedIndex}
                    key={i}
                    ref={(node: HTMLElement | null) => {
                      listRef.current[i] = node;
                    }}
                    role="option"
                    tabIndex={i === activeIndex ? 0 : -1}
                    aria-selected={i === selectedIndex && i === activeIndex}
                    {...getItemProps({
                      // Handle pointer select.
                      onClick() {
                        handleSelect(i);
                        onMenuItemSelect && onMenuItemSelect(value);
                      },
                      // Handle keyboard select.
                      onKeyDown(event: React.KeyboardEvent) {
                        if (event.key === 'Enter') {
                          event.preventDefault();
                          handleSelect(i);
                          onMenuItemSelect && onMenuItemSelect(value);
                        }

                        if (event.key === ' ' && !isTypingRef.current) {
                          event.preventDefault();
                          handleSelect(i);
                          onMenuItemSelect && onMenuItemSelect(value);
                        }
                      },
                    })}
                  />
                ))}
            </StyledMenuWrapper>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </Box>
  );
}
