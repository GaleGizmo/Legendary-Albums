export interface ApiAlbumI {
  createdAt?: string;
  updatedAt?:string
  title: string;
  artist: string;
  genre: Genres[];
  cover: string;
  songs: string[];
  year: Number;
  label: string;
  producer: string;
  _id?: string;
  description: string;
  length: number;
  spotify:string
}
export interface AlbumI {
  title: string;
  artist: string;
  genre: Genres[];
  cover?: string;
  songs?: string[];
  year: Number;
  label?: string;
  producer?: string;
  description?: string;
  length?: number;
  spotify?: string
}

export interface ApiAuthorI {
  name: string;
  numberOfComponents: number;
  componentsNames: string[];
  genre: Genres;
  country: string;
  discography: string[];
  image: string;
  description: string;
  _id?: string;
}
export interface AuthorI {
  name: string;
  numberOfComponents?: number;
  componentsNames?: string[];
  genre?: Genres;
  country?: string;
  discography?: string[];
  image?: string;
  description?: string;
  
}
export type Genres =
  | 'Rock'
  | 'Pop'
  | 'Folk'
  | 'Punk'
  | 'Rap'
  | 'Techno'
  | 'Disco'
  | 'Blues'
  | 'Soul'
  | 'Heavy'
  | 'Hip hop'
  | 'Worldbeat'
  | 'Funk'
  | 'R&B';
