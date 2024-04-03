export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface userData {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  DL_No: string;
  fname: string;
  lname: string;
  phone_number: string;
  street: string;
  city: string;
  Zip_code: string;
  Membership_id: string | null;
  Membership_type: string | null;
  role: string;
}

export interface category {
  id: string;
  Category_name: string;
  No_of_luggage: number;
  No_of_person: number;
  Cost_per_day: number;
  Late_fee_per_hour: number;
}

export interface location {
  id: string;
  Location_name: string;
  Street: string;
  City: string;
  Street_name: string;
  Zipcode: number;
}
