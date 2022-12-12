// const getDate = () => {
//   let currentTimeDate = new Date()

//   var weekday = new Array(7)
//   weekday[0] = 'SUN'
//   weekday[1] = 'MON'
//   weekday[2] = 'TUE'
//   weekday[3] = 'WED'
//   weekday[4] = 'THU'
//   weekday[5] = 'FRI'
//   weekday[6] = 'SAT'

//   var month = new Array()
//   month[0] = '01'
//   month[1] = '02'
//   month[2] = '03'
//   month[3] = '04'
//   month[4] = '05'
//   month[5] = '06'
//   month[6] = '07'
//   month[7] = '08'
//   month[8] = '09'
//   month[9] = '10'
//   month[10] = '11'
//   month[11] = '12'

//   var hours = currentTimeDate.getHours()

//   var minutes = currentTimeDate.getMinutes()
//   minutes = minutes < 10 ? '0' + minutes : minutes

//   var AMPM = hours >= 12 ? 'PM' : 'AM'

//   if (hours === 12) {
//     hours = 12
//   } else {
//     hours = hours % 12
//   }

//   var currentTime = `${hours}:${minutes}${AMPM}`
//   var currentDay = weekday[currentTimeDate.getDay()]
//   var currentDate = currentTimeDate.getDate()
//   var currentMonth = month[currentTimeDate.getMonth()]
//   var CurrentYear = currentTimeDate.getFullYear()

//   var fullDate = `${currentDate} ${currentMonth} ${CurrentYear}`

//   document.getElementById('time').innerHTML = currentTime
//   document.getElementById('day').innerHTML = currentDay
//   document.getElementById('date').innerHTML = fullDate

//   setTimeout(getDate, 500)
// }
// getDate()
// export default getDate

function getDate() {
  var date = document.getElementById('date')
  var month = document.getElementById('month')
  var year = document.getElementById('year')
  var date_hien_tai = new Date().getDate()
  
  var month_hien_tai = new Date().getMonth()
  var year_hien_tai = new Date().getFullYear()
  if (date) {
    date.innerHTML = date_hien_tai
  }
  if (month) {
    month.innerHTML = month_hien_tai
  }
  if (year) {
    year.innerHTML = year_hien_tai
  }

}
var Dem_date = setInterval(getDate)

// var Dem_date = setInterval(Dong_ho, 5000)
// export default getDate