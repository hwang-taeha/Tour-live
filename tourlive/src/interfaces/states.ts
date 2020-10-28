export interface Ilist {
  id?: string;
  title?: string;
  rate?: number;
  price?: string;
  created_at?: string;
}

export interface Ilists {
  lists: Ilist[];
}

export interface headerProps {
  searchForKeyword: (text: string, isFullUrl?: boolean) => void;
}
