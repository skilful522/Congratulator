import happyBirthday from "../assets/happyBirthday.mp3";
import "./styles.css";

import { getCardTemplate } from "./getCardTemplate";

const getElementsByClass = (selector) =>
  document.querySelectorAll("." + selector);

const body = document.querySelector("body");

const user_id = 168326438;

let isPlayMusic = false;

VK.init({
  apiId: 51433402,
});

const MAX_ID = 114030939;

VK.Api.call(
  "friends.get",
  {
    user_id,
    v: "5.131",
    fields: ["bdate", "name_case", "photo_200_orig"],
  },
  ({ response: { items } }) => {
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentDate = `${currentDay}.${currentMonth}`;

    const personsHasBirthdayToday = items.filter(({ id, bdate }) => {
      if (id === MAX_ID) {
        return currentDate.toString() === '6.10';
      }

      if (bdate) {
        const [bday, bmonth] = bdate.split(".");

        return currentDate === `${bday}.${bmonth}`;
      }
    });

    if (personsHasBirthdayToday.length > 0) {
      isPlayMusic = true;
    }

    if (personsHasBirthdayToday.length === 0) {
      body.innerHTML = '<p class="empty-list">Сегодня нет именниников =(</p>';
    }

    personsHasBirthdayToday.forEach(() => {
      body.innerHTML = body.innerHTML + getCardTemplate();
    });

    const personAvatars = getElementsByClass("person-avatar");
    const personNames = getElementsByClass("person-name");

    personsHasBirthdayToday.forEach(({ first_name, photo_200_orig }) => {
      personNames.forEach((personName) => {
        personName.innerHTML = first_name;
      });
      personAvatars.forEach((personAvatar) => {
        personAvatar.src = photo_200_orig;
      });
    });
  }
);

addEventListener(
  "click",
  () => {
    if (isPlayMusic) {
      const audio = new Audio(happyBirthday);
      audio.play();
    }
  },
  { once: true }
);
