import {
  CheckIcon,
  FormControl,
  Icon as NbIcon,
  IFormControlProps,
  Input,
  ISelectProps,
  Pressable,
  Select,
  WarningOutlineIcon,
} from 'native-base';
import {IInputProps} from 'native-base/lib/typescript/components/primitives/Input/types';
import React, {PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface NbInputParentProps extends IFormControlProps {
  title?: string;
  error_message?: string;
}

export interface NbInputProps extends IInputProps, PropsWithChildren {
  title?: string;
  error_message?: string;
  onSelect?: () => void;
}

export interface NbSelectProps extends ISelectProps {
  title?: string;
  error_message?: string;
  isRequired?: boolean;
  onSelect?: () => void;
}

interface MoreNbInputProps {
  InputBasic: React.FC<NbInputProps>;
  ModalSelect: React.FC<NbSelectProps>;
  ModalInputBasic: React.FC<NbInputProps>;
}

export const NbInput: React.FC<NbInputParentProps> & MoreNbInputProps = ({
  title,
  error_message,
  children,
  ...props
}) => {
  const {isInvalid, isRequired, isReadOnly} = props;
  return (
    <FormControl
      w="100%"
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isInvalid={isInvalid}>
      {title && <FormControl.Label>{title}</FormControl.Label>}
      {children}
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {error_message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

NbInput.InputBasic = function InputBasic({title, error_message, ...props}) {
  const [show, setShow] = React.useState(false);
  const isPasspord = props.type === 'password';
  return (
    <NbInput title={title} error_message={error_message} {...props}>
      <Input
        InputRightElement={
          isPasspord ? (
            <Pressable onPress={() => setShow(!show)}>
              <NbIcon
                as={<Icon name={show ? 'visibility' : 'visibility-off'} />}
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          ) : undefined
        }
        {...props}
        type={show ? 'text' : props.type}
      />
    </NbInput>
  );
};

NbInput.ModalInputBasic = function ModalInputBasic({
  title,
  error_message,
  onSelect,
  ...props
}) {
  return (
    <NbInput title={title} error_message={error_message} {...props}>
      <TouchableOpacity onPress={onSelect}>
        <Input
          onPressIn={onSelect}
          _disabled={{
            borderColor: 'muted.500',
            color: 'black',
            placeholderTextColor: 'black',
          }}
          InputRightElement={
            <NbIcon
              as={<Icon name={'expand-more'} />}
              size={5}
              mr="2"
              color="muted.400"
            />
          }
          {...props}
        />
      </TouchableOpacity>
    </NbInput>
  );
};

NbInput.ModalSelect = function ModalSelect({
  title,
  error_message,
  onSelect,
  ...props
}) {
  return (
    <NbInput
      title={title}
      error_message={error_message}
      isRequired={props.isRequired}>
      <TouchableOpacity onPress={onSelect}>
        <Select
          {...props}
          isDisabled
          accessibilityLabel="Choose Service"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
        />
      </TouchableOpacity>
    </NbInput>
  );
};
