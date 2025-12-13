import { Logotype } from "../../components/Logotype";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./regis.css";

export const MasterRegis = () => {
  const [salaryRange, setSalaryRange] = useState([20, 50]);
  return (
    <div className="masterRegis">
      <Logotype className="logotype" />
      <div className="container">
        <h2>Профиль мастера</h2>
        <div className="cover">
          <label>Имя</label>
          <input placeholder="Иван"></input>
        </div>
        <div className="cover">
          <label>Фамилия</label>
          <input placeholder="Иванов"></input>
        </div>
        <div className="cover">
          <label>Номер телефона</label>
          <input placeholder="0 (559) 555 555" type="number"></input>
        </div>
        <div className="cover">
          <label>Опыт работы</label>
          <select name="" id="">
            <option value="">1-3 года</option>
            <option value="">3-6 лет</option>
            <option value="">6 лет и более</option>
            <option value="">Нет опыта</option>
          </select>
        </div>

        <div className="cover moneyRange">
          <label>Желаемый денежный диапазон</label>

          <div className="sliderWrapper">
            <Slider
              className="sliderMoney"
              range
              min={100}
              max={10000}
              step={10}
              value={salaryRange}
              onChange={setSalaryRange}
              allowCross={false}
            />

            <div className="moneyValues">
              <span>{salaryRange[0]} - {salaryRange[1]} сом</span>
            </div>
          </div>
        </div>

        <div className="photoUpload">
          <label htmlFor="photoInput" className="photoBox">
            <img src="/icons/photo.svg" alt="" className="photoIcon" />
            <span>Загрузите селфи</span>
          </label>

          <input
            id="photoInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>

        <button>Создать аккаунт</button>
      </div>
    </div>
  );
};
