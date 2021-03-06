import {useState} from 'react';
import Calendar from 'react-calendar'
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Home = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="create">
          <h4 >Home</h4>
          <h5>About Us</h5>
          <p>
              Karasuno Volleyball Association was created to provide an opportunity for all volleyball players aged 18+ to improve their volleyball skills.
          </p>
          <h5>Tournament Information</h5>
          <p>
              Our tournaments will allow players to compete every weekend.
          </p>
          <Calendar
            onChange={onChange}
            value={value}
          />
        </div>
      );
}
 
export default Home;
