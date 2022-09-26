import {NbInput} from '@src/components';
import {Button, ScrollView, VStack} from 'native-base';
import React, {useState} from 'react';
import {Modal} from 'react-native';
import {ModalSelectBus} from './modal-select-bus';

export interface FormRegisterProps {}

export const FormRegister: React.FC<FormRegisterProps> = () => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  return (
    <VStack direction="column" justifyContent={'space-between'} flex={1} px={4}>
      {/* modal */}

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ModalSelectBus
          onClose={() => setModalVisible(false)}
          onConfirm={a => console.log(a)}
          setValue={setValue}
          value={value}
        />
      </Modal>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <VStack space={2} flex={1}>
          <NbInput.InputBasic
            title="So dien thoai"
            placeholder="Nhap so dien thoai"
            isRequired
          />
          <NbInput.InputBasic
            title="Mat khau"
            type="password"
            placeholder="Nhap mat khau"
            isRequired
          />
          <NbInput.InputBasic
            title="Xac nhan mat khau"
            type="password"
            placeholder="Nhap mat khau"
            isRequired
          />
          <NbInput.InputBasic
            title="Ten dai ly"
            placeholder="Nhap ten dai ly"
          />
          <NbInput.ModalInputBasic
            onSelect={() => setModalVisible(true)}
            title="Ten dai ly"
            placeholder="Vui long chon"
            isRequired
            isDisabled
            value={value}
            _disabled={{
              borderColor: 'muted.500',
              color: 'black',
              placeholderTextColor: 'black',
            }}
          />
        </VStack>
      </ScrollView>

      <VStack height={100}>
        <Button variant={'outline'}>Tiep tuc</Button>
      </VStack>
    </VStack>
  );
};
