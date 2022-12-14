import React from 'react';
import './Article.styles.css';
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
} from '../../assets/images';

const Article = () => {
  return (
    <main>
      <section class="main-container-left">
        <h2>Top Stories</h2>
        <div class="container-top-left">
          <article>
            <img src={Image1} alt="" />

            <div>
              <h3>Best Used Cars Under $20, 000 for families</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis ea sint, nisi rem earum fugit? Facere veritatis
                sapiente eveniet quibusdam.
              </p>

              <a href="#">
                Read More <span>{`>>`}</span>
              </a>
            </div>
          </article>
        </div>

        <div class="container-bottom-left">
          <article>
            <img src={Image2} />
            <div>
              <h3>Best smart speakers for the year</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi iure modi animi cupiditate. Explicabo, nihil?
              </p>

              <a href="#">
                Read More <span>{`>>`}</span>
              </a>
            </div>
          </article>

          <article>
            <img src={Image3} />
            <div>
              <h3>
                iPad Pro, reviewed: Has the iPad become my main computer now?
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi iure modi animi cupiditate. Explicabo, nihil?
              </p>
              <a href="#">
                Read More <span>{`>>`}</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section class="main-container-right">
        <h2>Latest Stories</h2>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              Here's how to track your stimulus check with the IRS Get My
              Payment Portal
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              repellendus?
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src={Image4} />
        </article>

        <article>
          <h4>just in </h4>
          <div>
            <h2>The best outdoor games to play with your family</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              repellendus?
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src={Image5} />
        </article>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              Why walk? Check out the best electric scooters and e-bikes for
              2020
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              repellendus?
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src={Image6} />
        </article>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              Disneyland Paris will stream its Lion King stage show Friday night
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              repellendus?
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src={Image7} />
        </article>

        <article>
          <h4>just in </h4>
          <div>
            <h2>
              Looking at a phone's lock screen also requries a warrant, judge
              rules
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              repellendus?
            </p>

            <a href="#">
              Read More <span>{`>>`}</span>
            </a>
          </div>
          <img src={Image8} />
        </article>
      </section>
    </main>
  );
};

export default Article;
