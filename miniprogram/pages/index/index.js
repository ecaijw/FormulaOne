const { getDriverStandings } = require('../../services/f1Service')

Page({
  data: {
    drivers: []
  },

  async onLoad() {
    const drivers = await getDriverStandings()
    this.setData({ drivers })
  }
})