import {months} from "./arrayUtils";

export const getData = (item) => {
    const t = new Date(item.dob)

    return {
        Y: t.getFullYear(),
        M: months[t.getMonth()],
        D: t.getDate(),
    }
}

export const returnUserName = (user) => `${user.firstName} ${user.lastName}`

export const returnUserBirthday = (user) => `${getData(user).D} ${getData(user).M}, ${getData(user).Y} year`
