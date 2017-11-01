import { combineEpics } from 'redux-observable';
import picoEpics from '../pico/_state/epics';

export const rootEpic = combineEpics(picoEpics);
