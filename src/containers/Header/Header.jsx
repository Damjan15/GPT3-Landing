import people from "../../assets/people.png"
import ai from "../../assets/ai.png"
import "./header.css"

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's build something amazing with GPT-3 OpenAPI</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus facere adipisci ea sint sapiente natus numquam, tenetur nostrum nesciunt vitae earum quas? In asperiores perspiciatis eaque ipsam aliquid natus aliquam?</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>1,600 people requested access in last 24 hours</p>
        </div>
        </div>

        <div className="gpt3__header-image">
          <img src={ai} alt="Ai" />
        </div>
  
    </div>
  )
}

export default Header