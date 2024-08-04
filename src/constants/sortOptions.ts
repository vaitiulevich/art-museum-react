interface SortOption {
  value: string;
  label: string;
}

export const sortOptions: SortOption[] = [
  { value: '', label: 'Sort by default' },
  { value: 'is_public_domain', label: 'With private domain' },
  { value: 'date_start', label: 'Sort by Established Date' },
  { value: 'id', label: 'Sort by ID' },
];
