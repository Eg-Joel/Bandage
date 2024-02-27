import React from 'react'

function SecondCarousel() {
  return (
    <div className="carousel-container2">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-content">
              <p>summer 2020</p>
              <h1>Vita Classic</h1>
              <p>
                We know how large objects will act, how are objects will acr. We know.
              </p>
              <div className='carousel2-text'>
                <h6>$16.48</h6>
              <button className="green-button">ADD TO CART</button>
              </div>
            
            </div>
            <img
              className="d-block w-100"
              src="./caroul2.png"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
          <div className="carousel-content">
              <p>summer 2020</p>
              <h1>NEW COLLECTION</h1>
              <p>
                We know how large objects will act, but things on a small scale.
              </p>
              <button className="green-button">Shop Now</button>
            </div>
            <img
              className="d-block w-100"
              src="./caroul2.png"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
          <div className="carousel-content">
              <p>summer 2020</p>
              <h1>NEW COLLECTION</h1>
              <p>
                We know how large objects will act, but things on a small scale.
              </p>
              <button className="green-button">Shop Now</button>
            </div>
            <img
              className="d-block w-100"
              src="./carImg.png"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default SecondCarousel