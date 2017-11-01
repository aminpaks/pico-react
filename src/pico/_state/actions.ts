import { defineScenarioAction } from 'redux-typed-actions';
import { PicoPhoto } from './types';

export const PicoPhotosLoad = defineScenarioAction<{
  query: string;
  page?: number;
}, PicoPhoto[]>('Pico Photo Load');
