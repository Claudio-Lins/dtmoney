import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from '../services/api'

export const TransactionsContext = createContext<Transition[]>([])

interface Transition {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

interface TransitionsProviderProps {
  children: ReactNode
}

export function TransitionsProvider({ children }: TransitionsProviderProps) {
  const [transactions, setTransactions] = useState<Transition[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider
      value={transactions}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

