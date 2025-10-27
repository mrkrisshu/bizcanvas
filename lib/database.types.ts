export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          subscription_status: 'free' | 'premium'
          generation_count: number
          created_at: string
        }
        Insert: {
          id: string
          email: string
          subscription_status?: 'free' | 'premium'
          generation_count?: number
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          subscription_status?: 'free' | 'premium'
          generation_count?: number
          created_at?: string
        }
      }
      canvases: {
        Row: {
          id: string
          user_id: string
          title: string
          data: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          data: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          data?: Json
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      // Add your database views here
    }
    Functions: {
      // Add your database functions here
    }
    Enums: {
      // Add your database enums here
    }
  }
}

export interface BusinessModelCanvas {
  key_partners: string[]
  key_activities: string[]
  value_propositions: string[]
  customer_relationships: string[]
  customer_segments: string[]
  key_resources: string[]
  channels: string[]
  cost_structure: string[]
  revenue_streams: string[]
}
