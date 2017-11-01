export interface PicoPhoto {
  id: string;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  favorites: number;
  likes: number;
  comments: number;
  user_id: string;
  user: string;
  userImageURL: string;
}

export interface PixabayPhotoResponse {
  total: number;
  totalHits: number;
  hits: PicoPhoto[];
}

export interface PicoState {
  photos: PicoPhoto[];
  error: boolean;
  message: string;
  loading: boolean;
}
