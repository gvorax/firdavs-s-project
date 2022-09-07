import React from 'react';
import Image_1 from '../../assets/images/banner-news-1.jpg'
import Image_2 from '../../assets/images/banner-news-2.jpg'
import Image_3 from '../../assets/images/banner-news-3.jpg'
import Image_4 from '../../assets/images/banner-news-4.jpg'

const Newsbanner = () => {
  return (
    <section className = "banner">
            <div className = "banner-main-content">
                <h2>Eng songi va yangi maqolalarni shu saytdan toping</h2>
                <h3>Maqolalar sayti</h3>

                <button>
                    <a href = "#">Ko'proq ma'lumot</a>
                </button>

                <div className = "current-news-head">
                    <h3>Apple Glasses: What we expect, what we think we are <span>by scott stein</span></h3>

                    <h3>What's it's like to have Elon Musk's old phone number <span>by abrar al-heeti</span></h3>

                    <h3>Watch the exact moment Chris Pratt accidentally deletes 51, 000 emials <span>by goel fashingbauer</span></h3>

                    <h3>Richard Branson's Virgin Orbit will launch a rocket from midair Sunday <span>by eric mack</span></h3>
                </div>
            </div>

            <div className = "banner-sub-content">
                <div className = "hot-topic">
                    <img src = {Image_1} alt = ""/>

                    <div className = "hot-topic-content">
                        <h2>Twitter's New Retweet With Comment Counter Is Now Available On Andriod & Web</h2>

                        <h3>New Topic 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur nostrum minus iusto fugit unde.</p>
                        <a href = "#">Read More</a>
                    </div>
                </div>

                <div className = "hot-topic">
                    <img src = {Image_2} alt = ""/>

                    <div className = "hot-topic-content">
                        <h2>Twitter's New Retweet With Comment Counter Is Now Available On Andriod & Web</h2>

                        <h3>New Topic 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur nostrum minus iusto fugit unde.</p>
                        <a href = "#">Read More</a>
                    </div>
                </div>

                <div className = "hot-topic">
                    <img src = {Image_3} alt = ""/>

                    <div className = "hot-topic-content">
                        <h2>Twitter's New Retweet With Comment Counter Is Now Available On Andriod & Web</h2>

                        <h3>New Topic 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur nostrum minus iusto fugit unde.</p>
                        <a href = "#">Read More</a>
                    </div>
                </div>

                <div className = "hot-topic">
                    <img src = {Image_4} alt = ""/>

                    <div className = "hot-topic-content">
                        <h2>Twitter's New Retweet With Comment Counter Is Now Available On Andriod & Web</h2>

                        <h3>New Topic 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequatur nostrum minus iusto fugit unde.</p>
                        <a href = "#">Read More</a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Newsbanner;