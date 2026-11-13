'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { initialCustomers, initialInvoices, initialProducts, initialSubscriptions, initialTeam, initialTransactions, type Customer, type Invoice, type Product, type Subscription, type TeamMember, type Transaction } from '@/lib/nexora-data'

type DemoState = {
  customers: Customer[]
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>
  subscriptions: Subscription[]
  setSubscriptions: React.Dispatch<React.SetStateAction<Subscription[]>>
  transactions: Transaction[]
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
  invoices: Invoice[]
  setInvoices: React.Dispatch<React.SetStateAction<Invoice[]>>
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  team: TeamMember[]
  setTeam: React.Dispatch<React.SetStateAction<TeamMember[]>>
}

const DemoContext = createContext<DemoState | null>(null)
const storageKey = 'nexora-demo-workspace-v1'

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [customers, setCustomers] = useState(initialCustomers)
  const [subscriptions, setSubscriptions] = useState(initialSubscriptions)
  const [transactions, setTransactions] = useState(initialTransactions)
  const [invoices, setInvoices] = useState(initialInvoices)
  const [products, setProducts] = useState(initialProducts)
  const [team, setTeam] = useState(initialTeam)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey)
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<Pick<DemoState, 'customers' | 'subscriptions' | 'transactions' | 'invoices' | 'products' | 'team'>>
        if (parsed.customers) setCustomers(parsed.customers)
        if (parsed.subscriptions) setSubscriptions(parsed.subscriptions)
        if (parsed.transactions) setTransactions(parsed.transactions)
        if (parsed.invoices) setInvoices(parsed.invoices)
        if (parsed.products) setProducts(parsed.products)
        if (parsed.team) setTeam(parsed.team)
      }
    } catch {
      window.localStorage.removeItem(storageKey)
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (ready) window.localStorage.setItem(storageKey, JSON.stringify({ customers, subscriptions, transactions, invoices, products, team }))
  }, [customers, subscriptions, transactions, invoices, products, team, ready])

  const value = useMemo(() => ({ customers, setCustomers, subscriptions, setSubscriptions, transactions, setTransactions, invoices, setInvoices, products, setProducts, team, setTeam }), [customers, subscriptions, transactions, invoices, products, team])
  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>
}

export function useDemoData() {
  const context = useContext(DemoContext)
  if (!context) throw new Error('useDemoData must be used inside DemoProvider')
  return context
}
