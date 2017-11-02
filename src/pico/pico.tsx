import * as React from 'react';
import { Subject } from 'rxjs/Subject';
import { connect, Dispatch } from 'react-redux';
import { PlainAction } from 'redux-typed-actions';
import { PicoPhotosLoad } from './_state/actions';
import { RootState } from '../_state/types';
import { PicoPhoto, PicoState } from './_state/types';
import Photo from './photo/photo';
import './pico.css';
import './pico.scss';

// Action creator
const fetchPhotos = (query: string, page: number = 1) => PicoPhotosLoad.get({ query, page });

interface PicoProps {
  photos: PicoPhoto[];
  fetchPhotos: typeof fetchPhotos;
}

export class Pico extends React.Component<PicoProps, PicoState> {
  input$ = new Subject<string>();

  constructor() {
    super();

    this.input$
      .debounceTime(500)
      .filter(value => value.length > 0)
      .subscribe(value => this.props.fetchPhotos(value, 1));

  }

  handleQueryInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.input$.next(e.target.value)

  renderPhotos = () => {
    const self = this;
    if (this.props.photos.length > 0) {
      return this.props.photos.map(photo => (<Photo key={photo.id} photo={photo} />));
    } else {
      return (<span className="message">Enter to start searching...</span>);
    }
  }

  render() {
    const photoContainerClassName = ['pico-photo-container'];

    if (this.props.photos.length <= 0) {
      photoContainerClassName.push('is-empty');
    }

    return (
      <div className="pico">
        <div className="pico-query">
          <input
            type="text"
            placeholder="Enter a query"
            autoFocus={true}
            onChange={this.handleQueryInput}
          />
        </div>
        <div className={photoContainerClassName.join(' ')}>{this.renderPhotos()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  photos: state.Pico.photos,
});

export default connect(mapStateToProps, { fetchPhotos })(Pico);
