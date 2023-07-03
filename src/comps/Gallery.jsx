import React from 'react'

import Img1 from '../../public/img1.jpg'
import Img2 from '../../public/img2.jpg'
import Img3 from '../../public/img3.jpg'
import Img4 from '../../public/img4.jpg'
import Img5 from '../../public/img5.jpg'
import Img6 from '../../public/img6.jpg'
import Img7 from '../../public/img7.jpg'
import Img8 from '../../public/img8.jpg'
import Img9 from '../../public/img9.jpg'
import Img10 from '../../public/img10.jpg'
import Img11 from '../../public/img11.jpg'

const Gallery = () => {
    return (
        <div class="container">
            <div class="image-gallery">
                <div class="column">
                    <div class="image-item">
                        <img src='https://i.postimg.cc/L6MYC8vC/img1.jpg' alt="" />
                        <div class="overlay"><span>Image title</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/FHrfvCM0/img2.jpg' alt="" />
                        <div class="overlay"><span>Image title</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/GmX4mJRV/img3.jpg' alt="" />
                        <div class="overlay"><span>Image title</span></div>
                    </div>
                </div>
                <div class="column">
                    <div class="image-item">
                    <img src='https://i.postimg.cc/dtm7zcxq/img4.jpg' alt="" />
                    <div class="overlay"><span>Image title</span></div>
                    </div>
                    <div class="image-item">
                    <img src='../../public/img1.jpg' alt="" />
                    <div class="overlay"><span>Image title</span></div>
                    </div>
                    <div class="image-item">
                    <img src={Img6} alt="" />
                    <div class="overlay"><span>Image title</span></div>
                    </div>
                    <div class="image-item">
                    <img src={Img7} alt="" />
                    <div class="overlay"><span>Image title</span></div>
                    </div>
                </div>
                <div class="column">
                    <div class="image-item">
                    <img src='https://i.postimg.cc/s21vQQDX/img5.jpg' alt="" />
                    <div class="overlay"><span>Image title</span></div>
                    </div>
                    <div class="image-item">
                    <img src={Img9} alt="" />
                    <div class="overlay"><span>Image title</span></div>
                    </div>
                    <div class="image-item">
                    <img src={Img10} alt="" />
                    <div class="overlay"><span>Image title</span></div>
                    </div>
                    <div class="image-item">
                    <img src={Img11} alt="" />
                    <div class="overlay"><span>Image title</span></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Gallery