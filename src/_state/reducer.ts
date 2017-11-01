import { combineReducers } from 'redux';
import { RootState } from './types';
import { reducer as picoReducer } from '../pico/_state/reducer';

export const rootReducer = combineReducers<RootState>({
  Pico: picoReducer,
});
