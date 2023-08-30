import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const getAllPOST = (Constants, _args, handlers = {}) =>
  fetch(`http://211.159.163.203:80/Organization/personnel/selectInfo`, {
    body: JSON.stringify({
      state: '0',
      department_id: 'SYS-XA-KFB1-KE2',
      queryFlg: '1',
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useGetAllPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['posts', args],
    () => getAllPOST(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchGetAllPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetAllPOST({}, { refetchInterval, handlers: { onData, ...handlers } });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetAll: refetch });
};

export const getByIdPOST = (Constants, { userId }, handlers = {}) =>
  fetch(`http://211.159.163.203:80/Organization/personnel/selectInfo`, {
    body: JSON.stringify({ employee_code: userId }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useGetByIdPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['post', args],
    () => getByIdPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['posts']),
    }
  );
};

export const FetchGetByIdPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  userId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetByIdPOST(
    { userId },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetById: refetch });
};

export const insertInfoPOST = (
  Constants,
  {
    address,
    appTantouCd,
    birthday,
    college,
    department_id,
    department_name,
    email,
    employee_code,
    icon_path,
    identity_no,
    linkman,
    linkman_tel,
    name,
    parentDeptName,
    parttime_kb,
    password,
    position_id,
    qualification_id,
    retirement_date,
    role_id,
    start_time,
    tel,
    trun_date,
    version_id,
    work_status,
  },
  handlers = {}
) =>
  fetch(`http://211.159.163.203:80/Organization/personnel/insertInfo`, {
    body: JSON.stringify({
      employee_code: employee_code,
      name: name,
      password: password,
      birthday: birthday,
      college: college,
      qualification_id: qualification_id,
      tel: tel,
      department_id: department_id,
      start_time: start_time,
      email: email,
      retirement_date: retirement_date,
      trun_date: trun_date,
      icon_path: icon_path,
      position_id: position_id,
      role_id: role_id,
      address: address,
      work_status: work_status,
      linkman: linkman,
      linkman_tel: linkman_tel,
      identity_no: identity_no,
      appTantouCd: appTantouCd,
      parttime_kb: parttime_kb,
      department_name: department_name,
      version_id: version_id,
      parentDeptName: parentDeptName,
    }),
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useInsertInfoPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => insertInfoPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('posts', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('post');
        queryClient.invalidateQueries('posts');
      },
    }
  );
};

export const FetchInsertInfoPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  address,
  appTantouCd,
  birthday,
  college,
  department_id,
  department_name,
  email,
  employee_code,
  icon_path,
  identity_no,
  linkman,
  linkman_tel,
  name,
  parentDeptName,
  parttime_kb,
  password,
  position_id,
  qualification_id,
  retirement_date,
  role_id,
  start_time,
  tel,
  trun_date,
  version_id,
  work_status,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useInsertInfoPOST(
    {
      address,
      appTantouCd,
      birthday,
      college,
      department_id,
      department_name,
      email,
      employee_code,
      icon_path,
      identity_no,
      linkman,
      linkman_tel,
      name,
      parentDeptName,
      parttime_kb,
      password,
      position_id,
      qualification_id,
      retirement_date,
      role_id,
      start_time,
      tel,
      trun_date,
      version_id,
      work_status,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchInsertInfo: refetch });
};
