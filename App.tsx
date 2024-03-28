import { NativeModules } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View ,Text} from 'react-native'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const App = () => {

  const [isEnabled,setIsEnabled] = useState<boolean>(true)
  const PowerSavingModeModule = NativeModules.PowerSavingModeModule;

  const checkPowerSavingMode = () => {
    PowerSavingModeModule.isPowerSavingModeEnabled()
      .then((isEnabled: any) => {
        setIsEnabled(isEnabled)
        console.log('Power Saving Mode is enabled:', isEnabled);
      })
      .catch((error: any) => {
        console.error('Error checking power saving mode:', error);
      });
  };


  useEffect(() => {
    checkPowerSavingMode()
  }, [])

  return (
    <View>
      <Text>
        {isEnabled ? "true":"false"}
      </Text>
    </View>
  )
}

export default App