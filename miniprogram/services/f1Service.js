// services/f1Service.js
const { request } = require('../utils/request')

// 👉 现在：直接调第三方
const BASE_URL = 'https://api.jolpi.ca/ergast/f1'

const getDriverStandings = async () => {
  const data = await request(`${BASE_URL}/current/driverStandings.json`)

  const list =
    data.MRData.StandingsTable.StandingsLists[0].DriverStandings

  // 👉 做一层转换（以后后端换了，这里不变）
  return list.map(item => ({
    position: item.position,
    name: item.Driver.givenName + ' ' + item.Driver.familyName,
    nationality: item.Driver.nationality,
    team: item.Constructors[0].name,
    points: item.points,
  }))
}

module.exports = {
  getDriverStandings
}