import React, { useState } from 'react'

const Section=({isVisible,setIsVisible,title,description})=>{

  // const [isVisible,setIsVisible]=useState(false)

  return(
    <div className='instacontainer'>
         <h4>{title}</h4>
         { isVisible ? <button onClick={()=>setIsVisible()}>hide</button> :<button onClick={()=>setIsVisible(true)}>show</button>  }
         {isVisible && <p>{description}</p>}
    </div>
  )
}

const  Instamart=()=> {
  
const [isVisibleConfig,setisVisibleConfig]=useState({
                                                        showAbout:true,
                                                        showFeed:false,
                                                        showCareer:false
                                                     })
 
  return (
    <div>
      <h1>Instamart</h1>

      <Section 
       isVisible={isVisibleConfig.showAbout} 
       setIsVisible={()=>{
        setisVisibleConfig({
          showAbout:true,
          showFeed:false,
          showCareer:false
        })
       }}
       title={"Instamart About"} 
       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
       />

      <Section 
      isVisible={isVisibleConfig.showFeed} 
      setIsVisible={()=>{
        setisVisibleConfig({
          showAbout:false,
          showFeed:true,
          showCareer:false
        })
       }}
      title={"Instamart Feed"} 
      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
      />
      <Section
       isVisible={isVisibleConfig.showCareer} 
       setIsVisible={()=>{
        setisVisibleConfig({
          showAbout:false,
          showFeed:false,
          showCareer:true
        })
       }}
       title={"Instamart Career"} 
       description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
       />

    </div>
  )
}

export default Instamart