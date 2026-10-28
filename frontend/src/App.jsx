import React,{useEffect,useState} from 'react'
import {BrowserRouter,Routes,Route,Navigate,useLocation} from 'react-router-dom'
import Shell from './components/Shell.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Products from './pages/Products.jsx'
import Sales from './pages/Sales.jsx'
import Customers from './pages/Customers.jsx'
import Expenses from './pages/Expenses.jsx'
import Analytics from './pages/Analytics.jsx'
import OperationsAI from './pages/OperationsAI.jsx'
import Suppliers from './pages/Suppliers.jsx'
import Purchases from './pages/Purchases.jsx'
import api from './services/api'

function Protected({children,user}) { const location=useLocation(); return user ? children : <Navigate to="/login" replace state={{from:location.pathname}}/> }
function Workspace({user,setUser}) {
  return <Shell user={user} setUser={setUser}><Routes>
    <Route path="/" element={<Dashboard user={user}/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/sales" element={<Sales/>}/>
    <Route path="/customers" element={<Customers/>}/>
    <Route path="/suppliers" element={<Suppliers/>}/>
    <Route path="/expenses" element={<Expenses/>}/>
    <Route path="/purchases" element={<Purchases/>}/>
    <Route path="/analytics" element={<Analytics/>}/>
    <Route path="/intelligence" element={<OperationsAI/>}/>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes></Shell>
}
function SimplePage({title,eyebrow,description}){return <div className="page-title-row"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p className="muted">{description}</p><div className="panel form-panel mt-4"><h3>Module status</h3><p className="muted mb-0">The API and database models are included in this starter. This screen is a visible placeholder; it is not a completed workflow.</p></div></div></div>}
function AppInner(){
  const [user,setUser]=useState(null);const [checking,setChecking]=useState(true)
  const refreshUser=async()=>{try{const r=await api.get('/auth/me/');setUser(r.data)}catch{setUser(null)}finally{setChecking(false)}}
  useEffect(()=>{if(localStorage.getItem('bizflow_access'))refreshUser();else setChecking(false)},[])
  if(checking)return <div className="boot-screen"><div className="brand-mark"><span>✦</span></div><b>Loading BizFlow…</b></div>
  return <Routes>
    <Route path="/login" element={user?<Navigate to="/" replace/>:<Login onLogin={refreshUser}/>}/>
    <Route path="/register" element={user?<Navigate to="/" replace/>:<Register/>}/>
    <Route path="/*" element={<Protected user={user}><Workspace user={user} setUser={setUser}/></Protected>}/>
  </Routes>
}
export default function App(){return <BrowserRouter><AppInner/></BrowserRouter>}
