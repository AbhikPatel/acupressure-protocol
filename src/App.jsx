import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import PageNotFound from './PageNotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App