export interface Link {
  id: string;
  destination_url: string;
  short_code: string;
  description: string | null;
  created_at: string;
  clicks: number;
}
