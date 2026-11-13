export type Customer = {
  id: string
  name: string
  email: string
  company: string
  plan: string
  spend: number
  joined: string
  status: 'Active' | 'Inactive' | 'Pending'
}

export type Subscription = {
  id: string
  customerId: string
  customer: string
  plan: string
  cycle: 'Monthly' | 'Yearly'
  amount: number
  started: string
  renewal: string
  status: 'Active' | 'Trial' | 'Past due' | 'Cancelled'
}

export type Transaction = {
  id: string
  customerId: string
  customer: string
  product: string
  date: string
  amount: number
  method: 'Visa' | 'Mastercard' | 'Bank transfer' | 'Wallet'
  status: 'Completed' | 'Pending' | 'Failed' | 'Refunded'
}

export type Invoice = {
  id: string
  customerId: string
  customer: string
  number: string
  issue: string
  due: string
  amount: number
  status: 'Paid' | 'Pending' | 'Overdue' | 'Draft'
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  billing: 'Monthly' | 'Yearly' | 'One-time' | 'Custom'
  subscribers: number
  revenue: number
  status: 'Active' | 'Archived'
}

export type TeamMember = {
  id: string
  name: string
  email: string
  role: 'Owner' | 'Admin' | 'Manager' | 'Analyst' | 'Viewer'
  status: 'Active' | 'Invited'
  lastActive: string
}

export const initialCustomers: Customer[] = [
  { id: 'cus_1048', name: 'Olivia Chen', email: 'olivia.chen@northstar.io', company: 'Northstar Labs', plan: 'Business', spend: 4680, joined: '2026-04-16', status: 'Active' },
  { id: 'cus_1047', name: 'Marcus Johnson', email: 'marcus@arcstudio.co', company: 'Arc Studio', plan: 'Professional', spend: 2450, joined: '2026-04-14', status: 'Active' },
  { id: 'cus_1046', name: 'Sofia Martinez', email: 'sofia@meridian.design', company: 'Meridian Design', plan: 'Professional', spend: 1890, joined: '2026-04-12', status: 'Active' },
  { id: 'cus_1045', name: 'Ethan Williams', email: 'ethan@bloomhq.com', company: 'Bloom HQ', plan: 'Starter', spend: 570, joined: '2026-04-10', status: 'Pending' },
  { id: 'cus_1044', name: 'Ava Patel', email: 'ava@orbitcommerce.com', company: 'Orbit Commerce', plan: 'Business', spend: 3920, joined: '2026-04-08', status: 'Active' },
  { id: 'cus_1043', name: 'Noah Kim', email: 'noah@layerworks.co', company: 'Layer Works', plan: 'Starter', spend: 380, joined: '2026-04-04', status: 'Inactive' },
  { id: 'cus_1042', name: 'Isabella Brown', email: 'isabella@fieldnote.app', company: 'Fieldnote', plan: 'Enterprise', spend: 12800, joined: '2026-04-02', status: 'Active' },
  { id: 'cus_1041', name: 'Liam Wilson', email: 'liam@brightpath.io', company: 'Brightpath', plan: 'Professional', spend: 1470, joined: '2026-03-28', status: 'Active' },
  { id: 'cus_1040', name: 'Mia Thompson', email: 'mia@studioform.co', company: 'Studio Form', plan: 'Starter', spend: 285, joined: '2026-03-24', status: 'Pending' },
  { id: 'cus_1039', name: 'James Rodriguez', email: 'james@copperlane.com', company: 'Copperlane', plan: 'Business', spend: 5750, joined: '2026-03-21', status: 'Active' },
]

export const initialSubscriptions: Subscription[] = [
  { id: 'sub_02841', customerId: 'cus_1048', customer: 'Olivia Chen', plan: 'Business', cycle: 'Yearly', amount: 1188, started: '2025-08-16', renewal: '2026-08-16', status: 'Active' },
  { id: 'sub_02840', customerId: 'cus_1047', customer: 'Marcus Johnson', plan: 'Professional', cycle: 'Monthly', amount: 49, started: '2026-02-14', renewal: '2026-05-14', status: 'Active' },
  { id: 'sub_02839', customerId: 'cus_1046', customer: 'Sofia Martinez', plan: 'Professional', cycle: 'Yearly', amount: 490, started: '2025-11-12', renewal: '2026-11-12', status: 'Active' },
  { id: 'sub_02838', customerId: 'cus_1045', customer: 'Ethan Williams', plan: 'Starter', cycle: 'Monthly', amount: 19, started: '2026-04-10', renewal: '2026-05-10', status: 'Trial' },
  { id: 'sub_02837', customerId: 'cus_1044', customer: 'Ava Patel', plan: 'Business', cycle: 'Monthly', amount: 99, started: '2025-12-08', renewal: '2026-05-08', status: 'Past due' },
  { id: 'sub_02836', customerId: 'cus_1042', customer: 'Isabella Brown', plan: 'Enterprise', cycle: 'Yearly', amount: 3600, started: '2025-04-02', renewal: '2026-04-02', status: 'Active' },
  { id: 'sub_02835', customerId: 'cus_1041', customer: 'Liam Wilson', plan: 'Professional', cycle: 'Monthly', amount: 49, started: '2026-01-28', renewal: '2026-05-28', status: 'Cancelled' },
  { id: 'sub_02834', customerId: 'cus_1039', customer: 'James Rodriguez', plan: 'Business', cycle: 'Yearly', amount: 990, started: '2025-03-21', renewal: '2026-03-21', status: 'Active' },
]

export const initialTransactions: Transaction[] = [
  { id: 'txn_84129', customerId: 'cus_1048', customer: 'Olivia Chen', product: 'Business plan', date: '2026-05-14', amount: 396, method: 'Visa', status: 'Completed' },
  { id: 'txn_84128', customerId: 'cus_1047', customer: 'Marcus Johnson', product: 'Professional plan', date: '2026-05-14', amount: 49, method: 'Mastercard', status: 'Completed' },
  { id: 'txn_84127', customerId: 'cus_1044', customer: 'Ava Patel', product: 'Business plan', date: '2026-05-13', amount: 99, method: 'Bank transfer', status: 'Pending' },
  { id: 'txn_84126', customerId: 'cus_1042', customer: 'Isabella Brown', product: 'Enterprise plan', date: '2026-05-13', amount: 300, method: 'Visa', status: 'Completed' },
  { id: 'txn_84125', customerId: 'cus_1045', customer: 'Ethan Williams', product: 'Starter plan', date: '2026-05-12', amount: 19, method: 'Wallet', status: 'Failed' },
  { id: 'txn_84124', customerId: 'cus_1046', customer: 'Sofia Martinez', product: 'Professional plan', date: '2026-05-12', amount: 49, method: 'Mastercard', status: 'Completed' },
  { id: 'txn_84123', customerId: 'cus_1039', customer: 'James Rodriguez', product: 'Business plan', date: '2026-05-11', amount: 99, method: 'Visa', status: 'Refunded' },
  { id: 'txn_84122', customerId: 'cus_1041', customer: 'Liam Wilson', product: 'Professional plan', date: '2026-05-10', amount: 49, method: 'Bank transfer', status: 'Completed' },
]

export const initialInvoices: Invoice[] = [
  { id: 'inv_0288', customerId: 'cus_1048', customer: 'Olivia Chen', number: 'INV-2026-0288', issue: '2026-05-14', due: '2026-05-28', amount: 396, status: 'Paid' },
  { id: 'inv_0287', customerId: 'cus_1047', customer: 'Marcus Johnson', number: 'INV-2026-0287', issue: '2026-05-13', due: '2026-05-27', amount: 490, status: 'Pending' },
  { id: 'inv_0286', customerId: 'cus_1044', customer: 'Ava Patel', number: 'INV-2026-0286', issue: '2026-05-12', due: '2026-05-19', amount: 990, status: 'Overdue' },
  { id: 'inv_0285', customerId: 'cus_1042', customer: 'Isabella Brown', number: 'INV-2026-0285', issue: '2026-05-10', due: '2026-05-24', amount: 300, status: 'Paid' },
  { id: 'inv_0284', customerId: 'cus_1046', customer: 'Sofia Martinez', number: 'INV-2026-0284', issue: '2026-05-09', due: '2026-05-23', amount: 245, status: 'Draft' },
  { id: 'inv_0283', customerId: 'cus_1039', customer: 'James Rodriguez', number: 'INV-2026-0283', issue: '2026-05-08', due: '2026-05-22', amount: 198, status: 'Paid' },
]

export const initialProducts: Product[] = [
  { id: 'prd_01', name: 'Starter', description: 'Essential tools to find your flow.', price: 19, billing: 'Monthly', subscribers: 684, revenue: 12996, status: 'Active' },
  { id: 'prd_02', name: 'Professional', description: 'More power for growing teams.', price: 49, billing: 'Monthly', subscribers: 842, revenue: 41258, status: 'Active' },
  { id: 'prd_03', name: 'Business', description: 'Advanced tools for ambitious teams.', price: 99, billing: 'Monthly', subscribers: 261, revenue: 25839, status: 'Active' },
  { id: 'prd_04', name: 'Enterprise', description: 'Flexible scale for complex operations.', price: 0, billing: 'Custom', subscribers: 37, revenue: 14161, status: 'Active' },
]

export const initialTeam: TeamMember[] = [
  { id: 'mem_01', name: 'Alex Morgan', email: 'alex@acmetech.example', role: 'Owner', status: 'Active', lastActive: 'Just now' },
  { id: 'mem_02', name: 'Taylor Brooks', email: 'taylor@acmetech.example', role: 'Admin', status: 'Active', lastActive: '12 min ago' },
  { id: 'mem_03', name: 'Jordan Lee', email: 'jordan@acmetech.example', role: 'Analyst', status: 'Active', lastActive: '2 hours ago' },
  { id: 'mem_04', name: 'Casey Rivera', email: 'casey@acmetech.example', role: 'Manager', status: 'Invited', lastActive: 'Invitation pending' },
]

export const revenueSeries = [
  { month: 'Jan', recurring: 17400, oneTime: 5400 },
  { month: 'Feb', recurring: 18800, oneTime: 6100 },
  { month: 'Mar', recurring: 17900, oneTime: 4900 },
  { month: 'Apr', recurring: 21300, oneTime: 7200 },
  { month: 'May', recurring: 22900, oneTime: 6800 },
  { month: 'Jun', recurring: 22100, oneTime: 5900 },
  { month: 'Jul', recurring: 24700, oneTime: 7400 },
  { month: 'Aug', recurring: 23800, oneTime: 6900 },
  { month: 'Sep', recurring: 27900, oneTime: 8100 },
  { month: 'Oct', recurring: 29800, oneTime: 8500 },
  { month: 'Nov', recurring: 29100, oneTime: 7800 },
  { month: 'Dec', recurring: 33700, oneTime: 9900 },
]

export const activityFeed = [
  { title: 'New customer registered', detail: 'Olivia Chen joined the Business plan', time: '8 minutes ago', color: 'violet' },
  { title: 'Invoice paid', detail: 'INV-2026-0288 · $396.00', time: '42 minutes ago', color: 'green' },
  { title: 'Subscription upgraded', detail: 'Arc Studio moved to Professional', time: '2 hours ago', color: 'blue' },
  { title: 'Payment needs attention', detail: 'Ethan Williams · $19.00', time: '4 hours ago', color: 'amber' },
]

export const money = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(amount)
export const shortDate = (value: string) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(`${value}T12:00:00`))
