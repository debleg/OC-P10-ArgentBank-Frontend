import "./homepagefeatures.css";
import chatIcon from "../../../../assets/icon-chat.png";
import moneyIcon from "../../../../assets/icon-money.png";
import securityIcon from "../../../../assets/icon-security.png";


const homepageFeatures = [
  {
    imageSource: chatIcon,
    imageAlt: "Chat Icon",
    headerContent: "You are our #1 priority",
    textContent:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    imageSource: moneyIcon,
    imageAlt: "Money Icon",
    headerContent: "More savings means higher rates",
    textContent:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    imageSource: securityIcon,
    imageAlt: "Security Icon",
    headerContent: "Security you can trust",
    textContent:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

const HomepageFeatures = () => {
  return (
    <section className="features">
      {homepageFeatures.map((feature) => (
        <div className="feature-item" key={feature.imageAlt}>
          <img
            src={feature.imageSource}
            alt={feature.imageAlt}
            className="feature-icon"
          />
          <h3 className="feature-item-title">{feature.headerContent}</h3>
          <p> {feature.textContent} </p>
        </div>
      ))}
    </section>
  );
};

export default HomepageFeatures;
