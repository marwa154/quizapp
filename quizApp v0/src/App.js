import React from 'react';
import Login from "./pages/Login";
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Categories from './components/Categories';
import CategoryQuizDetails from './components/CategoryQuizDetails'
import HomeLayout from './pages/HomeLayout';
import Quiz from './components/Quiz';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { GlobalProvider } from './components/context/GlobalState';
function App() {

  return (
    <GlobalProvider>
     <Routes >
      <Route path='/login' element={<Login/>} />
      <Route path='/Register' element={<Register/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/quizCategories' element={<HomeLayout/>} >
      <Route path='' element={<Categories/>}/>
        <Route path=':cat' element={<CategoryQuizDetails/>}/>
        <Route path='quiz/:cat' element={<Quiz/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
     </GlobalProvider>
  );
}

export default App;
