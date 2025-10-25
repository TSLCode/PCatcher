// This file declares TypeScript types and interfaces for Supabase data structures and responses.

declare module 'supabase' {
  export interface User {
    id: string;
    email: string;
    created_at: string;
    updated_at: string;
    // Add other user properties as needed
  }

  export interface Session {
    access_token: string;
    refresh_token: string;
    user: User;
    expires_at: number;
  }

  export interface DatabaseResponse<T> {
    data: T | null;
    error: Error | null;
  }

  export interface Error {
    message: string;
    code: string;
    details?: string;
  }

  // Add other types and interfaces as needed
}