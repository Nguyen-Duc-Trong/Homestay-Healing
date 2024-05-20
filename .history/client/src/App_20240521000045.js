import React from 'react'
import {BrowserRouter as Router , Routes,Route } from "react-router-dom"
import {routes} from "./routes/index.js"
import DefaultLayOut from './components/DefaultLayOut/DefaultLayOut.tsx'
import {personalRoutes} from "./routes/personalRoutes"
import PersonalPage from './pages/PersonalPage/PersonalPage.tsx'
import Footer from './components/DefaultLayOut/Footer/Footer.tsx'
import Header from './components/DefaultLayOut/Header/Header.tsx'
 const App = () => {
  // console.log(personalRoutes)
  return (
    <div className="App">
       <Router>
          <Routes>
                {
                  routes.map((it)=>{
                    const Page = it.page;

                const Layout = ({ children }) => {
                  if (it.isShowHeader && it.isShowFooter) {
                    return (
                      <div className="relative">
                        <DefaultLayOut/>
                      </div>
                    );
                  } else if(it.isShowHeader && !it.isShowFooter){
                    return(
                      <div className="relative">
                        <Header />
                        <main className='mainPage min-h-[100vh] pt-[80px] w-[1100px] mx-auto mt-[20px] '>
                            {children}
                        </main>
                      </div>
                    )
                  } else if(!it.isShowHeader && !it.isShowFooter){
                    return(
                      <div className="relative">
                        <main className='mainPage min-h-[100vh] pt-[80px] w-[1100px] mx-auto mt-[20px] '>
                            {children}
                        </main>
                      </div>
                    )
                  }
                  return (
                    <div className="relative">
                      {it.isShowHeader && <Header />}
                      <main className='mainPage min-h-[100vh] pt-[80px] w-[1100px] mx-auto mt-[20px] '>
                        {children}
                      </main>
                      {it.isShowFooter && <Footer />}
                    </div>
                  );
                };
                // it.isShowHeader && it.isShowFooter ? DefaultLayOut : ({ children }) => <div>{children}</div>;
                return (
                  <Route key={it.path} path ={it.path}  element={
                  <Layout className='relative'>
                    < Page />
                  </Layout>
                }/>
                )
              })
            }
             {personalRoutes.map((it) => {
            const PageChild = it.PageChild;
                return (
                  <Route key={it.path} path={it.path} element={
                    <PersonalPage>
                    < PageChild />
                  </PersonalPage>
                    }
                  />
                );
          })}
          </Routes>
        </Router>
    </div>
  )
}
export default App