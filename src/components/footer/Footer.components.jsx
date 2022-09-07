import React from 'react'
import {SiGooglemessages} from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
            <div class = "footer-container">
                <div class = "footer-left">
                    <h2>RENESSANS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur molestias aut blanditiis totam quia enim, autem tenetur cum facere, fugit beatae at voluptas ipsum perferendis!</p>
                </div>

                <div class = "footer-right">
                    <h2>Izoh qoldirish uchun</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, autem!</p>
    
                    <div>
                        <input type = "text" placeholder = "Email Address" />
                        <SiGooglemessages />
                    </div>
                </div>
            </div>

            <p>Javlonbek Abdusamatov &copy; 2022 </p>
        </footer>
  )
}

export default Footer