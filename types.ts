
import React from 'react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricePlan {
  id: number;
  title: string;
  price: string;
  description: string;
  features: string[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FabricTip {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}