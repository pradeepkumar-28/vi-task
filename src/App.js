import React from 'react'
import { EuiProvider } from '@elastic/eui';
import Dashbord from './pages/Dashbord';

function App() {
  return (
    <EuiProvider>
      <Dashbord/>
    </EuiProvider>
  )
}

export default App