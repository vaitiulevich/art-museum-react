export interface FavoriteMarkProps {
  id: number;
}

export interface favouriteItem {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  is_public_domain: boolean;
}
export interface FavouritesState {
  items: number[];
  favourites: favouriteItem[];
  isLoadingFavourites: boolean;
  error: string;
}
