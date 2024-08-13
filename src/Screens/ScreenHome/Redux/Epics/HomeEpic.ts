import { switchMap } from 'rxjs/operators';
import axios from 'axios';
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from '../Slices/HomeSlice';
import { Observable } from '@reduxjs/toolkit';
import { ofType } from 'redux-observable';

const API_URL = 'https://74453a5be21f4f0ca12748ff2e709ebc.api.mockbin.io/';

export const homeEpic = (action$:any) =>
  action$.pipe(
    ofType(fetchDataRequest.type),
    switchMap(() =>
      axios.get(API_URL).then(
        (response) => fetchDataSuccess(response.data.data),
        (error) => fetchDataFailure(error.message)
      )
    )
  );

