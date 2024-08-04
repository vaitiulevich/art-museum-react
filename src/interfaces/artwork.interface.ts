export interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  is_public_domain: boolean;
}

export interface ArtworkProps {
  artwork: Artwork;
}

export interface ArtworkCatalogProps {
  artwork: Artwork[];
}

export interface ArtworkItemProps {
  title: string;
  artist_title: string;
  artist_id: number;
  image_id: string;
  artist_nacionality: string;
  date_end: number;
  date_start: number;
  credit_line: string;
  dimensions: string;
  place_of_origin: string;
  is_public_domain: boolean;
}

export interface FetchArtworksResponse {
  data: Artwork[];
  pagination: {
    total_pages: number;
  };
}

export interface FetchArtworksParams {
  limit?: number;
  page?: number;
  query?: string;
  ids?: string;
  isPublic?: boolean;
  isSearchable?: boolean;
  sort?: string;
}

export interface ArtworksInitialState {
  artworks: Artwork[];
  moreArtworks: Artwork[];
  isLoading: boolean;
  isLoadingMoreArtworks: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
  query: string;
}
