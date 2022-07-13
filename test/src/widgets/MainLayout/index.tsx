import React from 'react';
import {View} from 'react-native';
import ContentWidget from './widget/Content.Widget';
// import ContentWidget from './widget/Content.Widget';

type Props = {};

export const MainLayout: React.FC<Props> = () => {
  return (
    <View>
      {/* content  */}
      <ContentWidget />
      {/* <Text>dsadsadsa</Text> */}
    </View>
  );
};
