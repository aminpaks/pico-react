import { Observable } from 'rxjs/Observable';
import { AjaxError } from 'rxjs/observable/dom/AjaxObservable';
import { Epic, combineEpics } from 'redux-observable';
import { PlainAction } from 'redux-typed-actions';
import { PicoPhotosLoad } from './actions';
import { RootState } from '../../_state/types';
import { PixabayPhotoResponse } from './types';

function getPhotoQueryUrl(query: string, page: number): string {
  const photosURL = `https://pixabay.com/api/?key=6860981-47604f3cd2cdb2355548df02a` +
    `&image_type=photo&page=${page}&q=${encodeURIComponent(query)}`;
  return photosURL;
}

const picoPhotos: Epic<PlainAction, RootState> = (action$, state) =>
  action$.filter(PicoPhotosLoad.is)
    .switchMap(action => {
      const { query, page = 1 } = action.payload;
      return Observable.ajax({
        url: getPhotoQueryUrl(query, page),
        async: true,
        method: 'get',
        crossDomain: true,
      })
        .map(res => res.response as PixabayPhotoResponse)
        .map(res => PicoPhotosLoad.success.get(res.hits))
        .catch((err: AjaxError) => Observable.of(PicoPhotosLoad.failure.get(err.stack || err.message)));
    });

export default combineEpics(picoPhotos);
