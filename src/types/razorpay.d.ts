// src/types/razorpay.d.ts

interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name?: string;
    description?: string;
    order_id: string;
    handler: (response: RazorpayPaymentResponse) => void;
    prefill?: {
      name?: string;
      email?: string;
      contact?: string;
    };
    theme?: {
      color?: string;
    };
  }
  
  interface RazorpayPaymentResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }
  
  interface RazorpayInstance {
    on(arg0: string, arg1: (response: any) => void): unknown;
    open: () => void;
  }
  
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
  