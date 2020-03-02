const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];




export const getDay = () => {
  const date = new Date()
  return days[date.getDay()]
}
export const getMonth = () => {
  const date = new Date()
  return months[date.getMonth()]
}
export const getYear = () => {
  const date = new Date()
  return date.getFullYear();
}
export const getDate = () => {
  const date = new Date()
  return date.getDate()
}

export default {
  getDay, getMonth, getDate, getYear
}

