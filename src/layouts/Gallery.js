import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
    "mdbreact";
import '../css/styles.css'
import img01 from '../img/heroPhotos/img01.jpg'
import img02 from '../img/heroPhotos/img02.jpg'
import img03 from '../img/heroPhotos/img03.jpg'
import img04 from '../img/heroPhotos/img04.jpg'
import img05 from '../img/heroPhotos/img05.jpg'
import img06 from '../img/heroPhotos/img06.jpg'

const Gallery = () => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={6}
                showControls={true}
                showIndicators={false}
                className="z-depth-1"
                slide
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={img01}
                                alt="First slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={img02}
                                alt="Second slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={img03}
                                alt="Third slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={img04}
                                alt="Fourth slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="5">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={img05}
                                alt="Fifth slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="6">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={img06}
                                alt="Sixth slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default Gallery;