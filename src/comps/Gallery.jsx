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
        <div id='galeria' class="container">
            <h1 className='text-5xl flex justify-center pb-3 mb-6 border-b-4 font-bold'>Galeria</h1>
            <div class="image-gallery">
                <div class="column">
                    <div class="image-item">
                        <img src='https://i.postimg.cc/L6MYC8vC/img1.jpg' alt="" />
                        <div class="overlay"><span>Torta Alusiva</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/FHrfvCM0/img2.jpg' alt="" />
                        <div class="overlay"><span>Torta Alusiva</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/GmX4mJRV/img3.jpg' alt="" />
                        <div class="overlay"><span>Torta Alusiva</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/65s2ZpJS/img9.jpg' alt="" />
                        <div class="overlay"><span>Recepcion</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/NjBKNC0k/img6.jpg' alt="" />
                        <div class="overlay"><span>Brownies de la casa</span></div>
                    </div>
                </div>
                <div class="column">
                    <div class="image-item">
                        <img src='https://i.postimg.cc/dtm7zcxq/img4.jpg' alt="" />
                        <div class="overlay"><span>Torta Alusiva</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/T36DzYtm/img1.jpg' alt="" />
                        <div class="overlay"><span>Torta Alusiva</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/BvvX38H8/img10.jpg' alt="" />
                        <div class="overlay"><span>Parrilla Luz y Fuerza</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/vZhcC7gF/img11.jpg' alt="" />
                        <div class="overlay"><span>Torta Alusiva</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/qqKNF9nj/img7.jpg' alt="" />
                        <div class="overlay"><span>Torta Alusiva</span></div>
                    </div>
                </div>
                <div class="column">
                    <div class="image-item">
                        <img src='https://i.postimg.cc/s21vQQDX/img5.jpg' alt="" />
                        <div class="overlay"><span>Asado 200 personas</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/vHW1twGm/img2.jpg' alt="" />
                        <div class="overlay"><span>Torta Alusiva</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/CKvnnCSH/img3.jpg' alt="" />
                        <div class="overlay"><span>Torta Alusiva</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/gcLLr658/img4.jpg' alt="" />
                        <div class="overlay"><span>Torta Alusiva</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/pT49q29m/img8.jpg' alt="" />
                        <div class="overlay"><span>Torta Alusiva</span></div>
                    </div>
                    <div class="image-item">
                        <img src='https://i.postimg.cc/nzCj4sL8/img5.jpg' alt="" />
                        <div class="overlay"><span>Torta Alusiva</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery