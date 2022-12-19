import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

function Forecast({ forecast }) {
    function tConvert(time) {
      // Check correct time format and split into components
      time = time
        .toString()
        .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value
        time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join(""); // return adjusted time or original string
    }

  return (
    <>
      <label className="logo">Forecast</label>
      <Accordion allowZeroExpanded>
        {forecast.list.slice(0, 7).map((data, idx) => {

            const [getDate, getTime] = data.dt_txt.split(" ");
          console.log(data);

          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="list">
                    <span className="day">{tConvert(getTime)}</span>
                    <span className="day-icon">
                      <img
                        src={`./icons/${data.weather[0].icon}.png`}
                        alt=""
                        className="small-icon"
                      />
                    </span>
                    <span className="day-temp">
                      {Math.round(data.main.temp)}°C
                    </span>
                    <span className="min-max">
                      {Math.round(data.main.temp_min)}° /{" "}
                      {Math.round(data.main.temp_max)}°
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="panel">
                  <article>
                    <p>
                      <span>Weather: </span>
                      {`${data.weather[0].main}`}
                    </p>
                    <p>
                      <span>Description: </span>
                      {`${data.weather[0].description}`}
                    </p>
                    <p>
                      <span>Wind Speed: </span>
                      {`${Math.round(data.wind.speed)} km/h`}
                    </p>
                  </article>
                  <article>
                    <p>
                      <span>Feels Like: </span>
                      {`${Math.round(data.main.feels_like)}`}
                    </p>
                    <p>
                      <span>Humidity: </span>
                      {`${Math.round(data.main.humidity)}%`}
                    </p>
                    <p>
                      <span>Pressure: </span>
                      {`${Math.round(data.main.pressure)}`}
                    </p>
                  </article>
                  <article>
                    <p>
                      <span>Temperature: </span>
                      {`${Math.round(data.main.temp)}°C`}
                    </p>
                    <p>
                      <span>Temp min: </span>
                      {`${Math.round(data.main.temp_min)}°`}
                    </p>
                    <p>
                      <span>Temp max: </span>
                      {`${Math.round(data.main.temp_max)}°`}
                    </p>
                  </article>
                  <article>
                    <p>
                      <span>Ground Level: </span>
                      {`${Math.round(data.main.grnd_level)}`}
                    </p>
                    <p>
                      <span>Sea Level: </span>
                      {`${Math.round(data.main.sea_level)}`}
                    </p>
                    <p>
                      <span>Visibility: </span>
                      {`${Math.round(data.visibility)}`}
                    </p>
                  </article>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}

export default Forecast;
