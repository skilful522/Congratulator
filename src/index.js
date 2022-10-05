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

const max = {
  id: 114030939,
  photo_200_orig:
    "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/bQW6t5tpTfnJAyB0W7hSs_vt8cxRxrzdal72xqk1yYNAyqcBkkKkkz5hDLzF3MB-cV1HPGlC.jpg?size=200x355&quality=96&crop=0,0,1215,2160&ava=1",
  track_code:
    "b80a8cd1HbyRlcUzCanvmwYKIwrPu7DA8JN1l0rEsd1p-FQShXBw157xrzINrLnJJpCw43zSw9Tpn2L5Lrfu",
  first_name: "Max",
  last_name: "Pavlusevich",
  can_access_closed: true,
  is_closed: false,
};

// VK.Api.call(
//   "friends.get",
//   {
//     user_id,
//     v: "5.131",
//     fields: ["bdate", "name_case", "photo_200_orig"],
//   },
//   ({ response: { items } }) => {
//     const date = new Date();
//     const currentDay = date.getDate();
//     const currentMonth = date.getMonth() + 1;
//     const currentDate = `${currentDay}.${currentMonth}`;
//
//     const personsHasBirthdayToday = [max];
//
//     // const personsHasBirthdayToday = items.filter(({ id, bdate }) => {
//     //   if (id === MAX_ID) {
//     //     return currentDate.toString() === '6.10';
//     //   }
//     //
//     //   if (bdate) {
//     //     const [bday, bmonth] = bdate.split(".");
//     //
//     //     return currentDate === `${bday}.${bmonth}`;
//     //   }
//     // });
//
//     if (personsHasBirthdayToday.length > 0) {
//       isPlayMusic = true;
//     }
//
//     if (personsHasBirthdayToday.length === 0) {
//       body.innerHTML = '<p class="empty-list">Сегодня нет именинников =(</p>';
//     }
//
//     personsHasBirthdayToday.forEach(() => {
//       body.innerHTML = body.innerHTML + getCardTemplate();
//     });
//
//     const personAvatars = getElementsByClass("person-avatar");
//     const personNames = getElementsByClass("person-name");
//
//     personsHasBirthdayToday.forEach(({ first_name, photo_200_orig }) => {
//       personNames.forEach((personName) => {
//         personName.innerHTML = first_name;
//       });
//       personAvatars.forEach((personAvatar) => {
//         personAvatar.src = photo_200_orig;
//       });
//     });
//   }
// );

const personsHasBirthdayToday = [max];

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
