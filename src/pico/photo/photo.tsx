import * as React from 'react';
import { PicoPhoto } from '../_state/types';
import './photo.css';

interface PhotoProps {
  photo: PicoPhoto;
}

export class Photo extends React.Component<PhotoProps> {
  getTagLinks = (tags: string) => tags.split(/,\s*/)
    .map((tag, index) =>
      (<a key={index} href={`https://pixabay.com/en/photos/${tag}/`} target="_blank">{tag}</a>)
    )

  render() {
    const { photo } = this.props;
    return (
      <figure
        key={photo.id}
      >
        <a href={photo.pageURL} target="_blank"><img src={photo.webformatURL} /></a>
        <figcaption>{this.getTagLinks(photo.tags)}</figcaption>
      </figure>
    );
  }
}

export default Photo;
