import React from "react";
import "../customCard/CustomCard.css";
import Primary from "../buttons/Primary";

const CustomCard=( {
    image,
    title,
    description,
    languages=[],
    buttonText="Start Challenge",
    challengeLevel,
    onButtonClick
  }

)=> {

  // 🎨 choose background color based on challengeLevel
  const getLevelColor=()=> {
    switch (challengeLevel.toLowerCase()) {
      case "advanced":
        return "#ff4d4d";
      case "intermediate":
        return "#ffb84d";
      default:
        return "#06923E";
    }
  }

  ;

  return (<div className="custom_card"> <div className="custom_card_img"> <img src= {
      image
    }

    alt= {
      title
    }

    /> {
      challengeLevel && (<div className="challenge_level"

        style= {
            {
            backgroundColor: getLevelColor()
          }
        }

        > {
          challengeLevel
        }

        </div>)
    }

    </div> <div className="custom_card_content"> <h3> {
      title
    }

    </h3> <p> {
      description
    }

    </p> {
      languages.length > 0 && (<div className="custom_card_lang"> {
          languages.map((lang, index)=> (<div key= {
                index
              }

              className="lang"> {
                lang
              }

              </div>))
        }

        </div>)
    }

    <div className="custom_card_btn"> <Primary type="button"onClick= {
      onButtonClick
    }

    > {
      buttonText
    }

    </Primary> </div> </div> </div>);
}

;

export default CustomCard;