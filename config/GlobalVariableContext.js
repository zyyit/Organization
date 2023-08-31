import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeviceVariables = { UserPic: 'some UserPic' };
const AppVariables = {
  Position: [
    { label: '部长', value: '1' },
    { label: '课长', value: '2' },
    { label: '项目经理', value: '3' },
    { label: '项目组长', value: '4' },
    { label: '普通员工', value: '5' },
  ],
  StaffDept: [
    { label: '营业部', value: '1' },
    { label: '销售部', value: '2' },
    { label: '技术开发部', value: '3' },
    { label: '管理部', value: '4' },
  ],
  StaffEducat: [
    { label: '研究生及以上', value: '1' },
    { label: '本科', value: '2' },
    { label: '大专', value: '3' },
    { label: '高中', value: '4' },
    { label: '初中及以下', value: '5' },
  ],
  StaffRole: [
    { label: '管理员', value: '1' },
    { label: '普通用户', value: '2' },
  ],
  Staffstater: ['1', '2'],
  StaffstaterLabel: ['在职', '离职'],
  resultArray: '',
  testData: [
    {
      id: '000000000000000001',
      tel: '0000-0000-0001',
      name: '张三',
      role: '普通用户',
      email: 'test@test.com.cn',
      college: '测试大学',
      img_url:
        'https://th.bing.com/th/id/OIP.NIL9iedqTEF1uQnjw_FOxAHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7',
      linkman: '张一',
      birthday: '20000101',
      password: '00001',
      position: '普通员工',
      trun_date: '20200601',
      start_time: '2020-01-01',
      linkman_tel: '0000-0000-0011',
      work_status: '在职',
      moonlighting: false,
      employee_code: 'XXX-XX-0001',
      qualifications: '本科',
      department_name: '技术开发部',
    },
    {
      id: '000000000000000002',
      tel: '0000-0000-0002',
      name: '李四',
      role: '管理员',
      email: 'test01@test.com.cn',
      college: '测试工程大学',
      img_url:
        'https://th.bing.com/th/id/OIP.NIL9iedqTEF1uQnjw_FOxAHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7',
      linkman: '李一',
      birthday: '20000102',
      password: '00002',
      position: '项目组长',
      trun_date: '20200602',
      start_time: '20200102',
      linkman_tel: '0000-0000-0012',
      work_status: '在职',
      moonlighting: false,
      employee_code: 'XXX-XX-0002',
      qualifications: '本科',
      department_name: '销售部',
    },
    {
      id: '000000000000000003',
      tel: '0000-0000-0003',
      name: '王五',
      role: '普通用户',
      email: 'test02@test.com.cn',
      college: '测试工业大学',
      img_url:
        'https://th.bing.com/th/id/OIP.NIL9iedqTEF1uQnjw_FOxAHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7',
      linkman: '王一',
      birthday: '20000103',
      password: '00003',
      position: '普通员工',
      trun_date: '20200603',
      start_time: '20200103',
      linkman_tel: '0000-0000-0013',
      work_status: '在职',
      moonlighting: false,
      employee_code: 'XXX-XX-0003',
      qualifications: '本科',
      department_name: '管理部',
    },
    {
      id: '000000000000000004',
      tel: '0000-0000-0004',
      name: '赵六',
      role: '普通用户',
      email: 'test03@test.com.cn',
      college: '测试交通大学',
      img_url:
        'https://th.bing.com/th/id/OIP.NIL9iedqTEF1uQnjw_FOxAHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7',
      linkman: '赵一',
      birthday: '20000104',
      password: '00004',
      position: '普通员工',
      trun_date: '20200604',
      start_time: '20200104',
      linkman_tel: '0000-0000-0014',
      work_status: '在职',
      moonlighting: false,
      employee_code: 'XXX-XX-0004',
      qualifications: '本科',
      department_name: '营业部',
    },
    {
      id: '000000000000000005',
      tel: '0000-0000-0005',
      name: '刘七',
      role: '普通用户',
      email: 'test04@test.com.cn',
      college: '测试工程学院',
      img_url:
        'https://th.bing.com/th/id/OIP.NIL9iedqTEF1uQnjw_FOxAHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7',
      linkman: '刘一',
      birthday: '20000105',
      password: '00005',
      position: '普通员工',
      trun_date: '20200605',
      start_time: '20200105',
      linkman_tel: '0000-0000-0015',
      work_status: '在职',
      moonlighting: false,
      employee_code: 'XXX-XX-0005',
      qualifications: '大专',
      department_name: '销售部',
    },
    {
      id: '000000000000000006',
      tel: '0000-0000-0006',
      name: '孙八',
      role: '管理员',
      email: 'test04@test.com.cn',
      college: '测试工程学院',
      img_url:
        'https://th.bing.com/th/id/OIP.NIL9iedqTEF1uQnjw_FOxAHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7',
      linkman: '孙一',
      birthday: '20000106',
      password: '00006',
      position: '项目经理',
      trun_date: '20200606',
      start_time: '20200106',
      linkman_tel: '0000-0000-0016',
      work_status: '在职',
      moonlighting: false,
      employee_code: 'XXX-XX-0006',
      qualifications: '大专',
      department_name: '销售部',
    },
  ],
};
const GlobalVariableContext = React.createContext();
const GlobalVariableUpdater = React.createContext();

// Attempt to parse a string as JSON. If the parse fails, return the string as-is.
// This is necessary to account for variables which are already present in local
// storage, but were not stored in JSON syntax (e.g. 'hello' instead of '"hello"').
function tryParseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

class GlobalVariable {
  /**
   *  Filters an object of key-value pairs for those that should be
   *  persisted to storage, and persists them.
   *
   *  @param values Record<string, string>
   */
  static async syncToLocalStorage(values) {
    const update = Object.entries(values)
      .filter(([key]) => key in DeviceVariables)
      .map(([key, value]) => [key, JSON.stringify(value)]);

    if (update.length > 0) {
      await AsyncStorage.multiSet(update);
    }

    return update;
  }

  static async loadLocalStorage() {
    const entries = await AsyncStorage.multiGet(Object.keys(DeviceVariables));

    // If values isn't set, use the default. These will be written back to
    // storage on the next render.
    const withDefaults = entries.map(([key, value]) => [
      key,
      value ? tryParseJson(value) : DeviceVariables[key],
    ]);

    return Object.fromEntries(withDefaults);
  }
}

class State {
  static defaultValues = {
    ...AppVariables,
    ...DeviceVariables,
  };

  static reducer(state, { type, payload }) {
    switch (type) {
      case 'RESET':
        return { values: State.defaultValues, __loaded: true };
      case 'LOAD_FROM_ASYNC_STORAGE':
        return { values: { ...state.values, ...payload }, __loaded: true };
      case 'UPDATE':
        return state.__loaded
          ? {
              ...state,
              values: {
                ...state.values,
                [payload.key]: payload.value,
              },
            }
          : state;
      default:
        return state;
    }
  }

  static initialState = {
    __loaded: false,
    values: State.defaultValues,
  };
}

export function GlobalVariableProvider({ children }) {
  const [state, dispatch] = React.useReducer(State.reducer, State.initialState);

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  // This effect runs on mount to overwrite the default value of any
  // key that has a local value.
  React.useEffect(() => {
    async function initialStorageLoader() {
      try {
        const payload = await GlobalVariable.loadLocalStorage();
        dispatch({ type: 'LOAD_FROM_ASYNC_STORAGE', payload });
      } catch (err) {
        console.error(err);
      }
    }
    initialStorageLoader();
  }, []);

  // This effect runs on every state update after the initial load. Gives us
  // best of both worlds: React state updates sync, but current state made
  // durable next async tick.
  React.useEffect(() => {
    async function syncToAsyncStorage() {
      try {
        await GlobalVariable.syncToLocalStorage(state.values);
      } catch (err) {
        console.error(err);
      }
    }
    if (state.__loaded) {
      syncToAsyncStorage();
    }
  }, [state]);

  const onLayoutRootView = React.useCallback(async () => {
    if (state.__loaded) {
      await SplashScreen.hideAsync();
    }
  }, [state.__loaded]);

  // We won't want an app to read a default state when there might be one
  // incoming from storage.
  if (!state.__loaded) {
    return null;
  }

  return (
    <GlobalVariableUpdater.Provider
      value={dispatch}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableContext.Provider value={state.values}>
        {children}
      </GlobalVariableContext.Provider>
    </GlobalVariableUpdater.Provider>
  );
}

// Hooks
export function useSetValue() {
  const dispatch = React.useContext(GlobalVariableUpdater);
  return ({ key, value }) => {
    dispatch({ type: 'UPDATE', payload: { key, value } });
    return value;
  };
}

export function useValues() {
  return React.useContext(GlobalVariableContext);
}
