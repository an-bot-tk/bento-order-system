// TypeScript型定義 - API契約
// schemas.pyから自動生成された型定義

export interface SuccessResponse {
  success: boolean;
  message: string;
}

export interface ErrorResponse {
  success: boolean;
  message: string;
  detail?: string;
}

// ===== 認証関連 =====

export interface UserCreate {
  username: string;
  email: string;
  password: string;
  full_name: string;
  role: 'customer' | 'store';
}

export interface CustomerLogin {
  username: string;
  password: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserResponse {
  id: number;
  username: string;
  email: string;
  full_name: string;
  role: string;
  is_active: boolean;
  created_at: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
  user: UserResponse;
}

// ===== メニュー関連 =====

export interface MenuBase {
  name: string;
  price: number;
  description?: string;
  image_url?: string;
  is_available: boolean;
}

export interface MenuCreate extends MenuBase {}

export interface MenuUpdate {
  name?: string;
  price?: number;
  description?: string;
  image_url?: string;
  is_available?: boolean;
}

export interface MenuResponse extends MenuBase {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface MenuListResponse {
  menus: MenuResponse[];
  total: number;
}

// ===== 注文関連 =====

export interface OrderBase {
  menu_id: number;
  quantity: number;
  delivery_time?: string;
  notes?: string;
}

export interface OrderCreate extends OrderBase {}

export interface OrderStatusUpdate {
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled';
}

export interface OrderResponse {
  id: number;
  user_id: number;
  menu_id: number;
  quantity: number;
  total_price: number;
  status: string;
  delivery_time?: string;
  notes?: string;
  ordered_at: string;
  updated_at: string;
  menu: MenuResponse;
  user?: UserResponse;
}

export interface OrderListResponse {
  orders: OrderResponse[];
  total: number;
}

// ===== 注文履歴関連（新規追加） =====

export interface OrderHistoryItem {
  id: number;
  quantity: number;
  total_price: number;
  status: string;
  delivery_time?: string;
  notes?: string;
  ordered_at: string;
  // メニュー情報（注文履歴に必要な項目のみ）
  menu_id: number;
  menu_name: string;
  menu_price: number;
  menu_image_url?: string;
}

export interface OrderHistoryResponse {
  orders: OrderHistoryItem[];
  total: number;
}

// ===== その他統計関連 =====

export interface OrderSummary {
  total_orders: number;
  pending_orders: number;
  confirmed_orders: number;
  preparing_orders: number;
  ready_orders: number;
  completed_orders: number;
  cancelled_orders: number;
  total_sales: number;
}

export interface DailySales {
  date: string;
  total_sales: number;
  total_orders: number;
}

export interface SalesReportResponse {
  daily_sales: DailySales[];
  total_sales: number;
  total_orders: number;
}

export interface MenuFilter {
  is_available?: boolean;
  price_min?: number;
  price_max?: number;
  search?: string;
}

export interface OrderFilter {
  status?: string;
  date_from?: string;
  date_to?: string;
  user_id?: number;
}