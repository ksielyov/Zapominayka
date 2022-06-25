import codePush from 'react-native-code-push';
import {Alert} from 'react-native';

const useCodePushService = () => {
  codePush
    .sync(
      {
        installMode: codePush.InstallMode.ON_NEXT_RESTART,
      },
      status => {
        switch (status) {
          case codePush.SyncStatus.INSTALLING_UPDATE:
            Alert.alert(
              'Получено обновление',
              'Для установки обновления перезагрузите приложение',
            );
            break;
        }
      },
    )
    .catch(
      error =>
        __DEV__ &&
        console.log('Ошибка синхронизации с codePush сервисом', error),
    );
  codePush.disallowRestart();
};

export {useCodePushService};
