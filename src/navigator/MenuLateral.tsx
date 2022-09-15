import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const MenuLateral = () =>  {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',  
      }}
      drawerContent={(props) => <MenuInterno { ...props } />}
    >
      <Drawer.Screen name="StackNavigator" options={{title:"Home"}} component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" options={{title:"Configuración"}} component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

export const MenuInterno = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContent}>
        <Image 
          source={{uri:'https://www.shareicon.net/data/512x512/2016/07/21/799340_user_512x512.png'}}
          style={styles.avatar}
        />
      </View>

    <View style={styles.menuItems}>
      <TouchableOpacity
        onPress={() => navigation.navigate('StackNavigator')}
      >
        <View style={styles.menuBtn}>
          <Text style={styles.menuText}>Equipos</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SettingsScreen')}
      >
        <View style={styles.menuBtn}>
          <Text style={styles.menuText}>Partidos</Text>
        </View>
      </TouchableOpacity>
    </View>

    </DrawerContentScrollView>
  )
}