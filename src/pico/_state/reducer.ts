import { PlainAction } from 'redux-typed-actions';
import { PicoState } from './types';
import { PicoPhotosLoad } from './actions';

export const InitialState: PicoState = {
  photos: [],
  error: false,
  message: '',
  loading: false,
};

export function reducer(state: PicoState = InitialState, action: PlainAction): PicoState {
  if (PicoPhotosLoad.is(action)) {
    return {
      ...state,
      message: '',
      error: false,
      loading: true,
    };

  } else if (PicoPhotosLoad.success.is(action)) {
    return {
      ...state,
      message: '',
      loading: false,
      photos: action.payload,
    };
  
  } else if (PicoPhotosLoad.failure.is(action)) {
    return {
      ...state,
      error: true,
      loading: false,
      message: action.payload,
    };

  } else {
    return state;
  }
}
