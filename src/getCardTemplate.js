export const getCardTemplate = () => {
  return `<div class="card">
      <div class="outside">
        <div class="front">
          <p>С днём рождения!</p>
          <p>Нажми на меня</p>
          <div class="cake">
            <div class="top-layer"></div>
            <div class="middle-layer"></div>
            <div class="bottom-layer"></div>
            <div class="candle"></div>
          </div>
        </div>
        <div class="back">
          <div class="image-wrapper">
            <img
              class="person-avatar"
              src=""
            />
          </div>
        </div>
      </div>
      <div class="inside">
        <p>
          Поздравляю тебя с днём рождения, <span class="person-name"></span>, желаю тебе крепкого здоровья,
          удачи, ярких дней, исполнения всех твоих желаний и огромной любви!!!
        </p>
        <h1>&#127873;</h1>
      </div>
    </div>`;
};
