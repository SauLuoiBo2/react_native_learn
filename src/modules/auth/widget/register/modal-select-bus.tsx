import {
  Flex,
  HStack,
  Text,
  VStack,
  Icon as NbIcon,
  Divider,
  Button,
  Checkbox,
  ICheckboxProps,
  Radio,
} from 'native-base';
import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface ModalSelectBusProps {
  onClose?: () => void;
  onConfirm?: (s: string) => void;
  setValue: any;
  value: any;
}

export const ModalSelectBus: React.FC<ModalSelectBusProps> = ({
  onClose,
  onConfirm,
  setValue,
  value,
}) => {
  const handleConfirm = useCallback(() => {
    if (onClose) {
      onClose();
    }
    if (onConfirm) {
      onConfirm(value);
    }
  }, [onClose, onConfirm, value]);

  return (
    <Flex justifyContent={'center'} alignItems={'center'} flex={1} px={4}>
      <VStack
        space={4}
        backgroundColor="white"
        w={'full'}
        p={2}
        borderRadius={10}>
        {/* title */}
        <VStack space={2}>
          <HStack justifyContent={'space-between'}>
            <Text fontWeight={600}>Chọn hình thức kinh doanh</Text>
            <TouchableOpacity onPress={onClose}>
              <NbIcon
                as={<Icon name={'close'} />}
                size={5}
                mr="2"
                color="muted.400"
              />
            </TouchableOpacity>
          </HStack>
          <Divider />
        </VStack>
        {/* select */}
        <VStack space={1}>
          <Radio.Group
            name="myRadioGroup"
            value={value}
            onChange={nextValue => {
              setValue(nextValue);
            }}>
            <Radio value="online" my="1">
              Online
            </Radio>
            <Radio value="offline" my="1">
              Offline
            </Radio>
          </Radio.Group>
        </VStack>
        {/* button */}
        <Button onPress={handleConfirm}>Xac nhan</Button>
      </VStack>
    </Flex>
  );
};

export interface ItemCheckboxProps extends ICheckboxProps {
  label: string;
}

export const ItemCheckbox: React.FC<ItemCheckboxProps> = ({
  label,
  ...props
}) => {
  return (
    <Checkbox colorScheme="green" {...props}>
      {label}
    </Checkbox>
  );
};
