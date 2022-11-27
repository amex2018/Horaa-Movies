import React from 'react'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import request from '../Requests'
import './HomeScreen.css'
import Row from '../List_Movies/Row'
 function HomeScreen() {
  return (
    <div>
        {/* navbar */}
       <Navbar />
        {/* banner */}
        <Banner />
        {/* row */}
        <Row
         title= "NetFlix Originals"
         fetchUrl={request.fetchNetflixOriginals}
         isLargeRow
        />
        <Row
         title= "Trending Now"
         fetchUrl={request.fetchTrending}
         
        />
        <Row
         title= "Action Movies"
         fetchUrl={request.fetchActionMovies}
         
        />
        <Row
         title= "Comedy Movies"
         fetchUrl={request.fetchComedyMovies}
         
        />
        <Row
         title= "Horror Movies"
         fetchUrl={request.fetchHorrorMovies}
         
        />
        <Row
         title= "Romance Movies"
         fetchUrl={request.fetchRomanceMovies}
         
        />
        <Row
         title= "Documentaries"
         fetchUrl={request.fetchDocumentaries}
         
        />
    </div>
  )
}

export default HomeScreen