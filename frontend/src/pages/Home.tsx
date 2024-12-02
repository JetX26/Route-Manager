
import React from 'react'
import RouteCard from '../components/RouteCard'

const Home = (): React.ReactNode => {

  return (
    <div className='h-screen  bg-base-100 flex flex-col justify-center items-center gap-4'>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative flex items-center justify-center w-full">
          <RouteCard></RouteCard>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative flex items-center justify-center w-full">
          <RouteCard></RouteCard>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative flex items-center justify-center w-full">
          <RouteCard></RouteCard>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative flex items-center justify-center w-full">
          <RouteCard></RouteCard>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home