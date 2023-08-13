
import './App.css';

import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =(props)=> {
  const apiKey = process.env.REACT_APP_NEWS_API;
const [progress, setProgress] = useState(0)
    return (
      <div>
        <Router> 
          <NavBar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
        
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress}   apiKey={apiKey}  pagesize={5} key="home" country="in" category="general" />} />
            <Route exact path="/home" element={<News setProgress={setProgress}   apiKey={apiKey}  pagesize={5} key="general" country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress}   apiKey={apiKey}  pagesize={5} key="business" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress}   apiKey={apiKey}  pagesize={5} key="entertainment" country="in" category="entertainment" />}  />
            <Route exact path="/general" element={<News setProgress={setProgress}   apiKey={apiKey}  pagesize={5} key="general" country="in" category="general" />}  />
            <Route exact path="/health" element={<News setProgress={setProgress}   apiKey={apiKey}  pagesize={5} key="health" country="in" category="health" />}  />
            <Route exact path="/science" element={<News setProgress={setProgress}   apiKey={apiKey}  pagesize={5} key="science" country="in" category="science" />}  />
            <Route exact path="/sports" element={<News setProgress={setProgress}   apiKey={apiKey}  pagesize={5} key="sports" country="in" category="sports" />}  />
            <Route exact path="/technology" element={<News setProgress={setProgress}   apiKey={apiKey}  pagesize={5} key="technology" country="in" category="technology" />}   />
        </Routes>
        </Router>
      </div>
    )
  
}
export default App;
