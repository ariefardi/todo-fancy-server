let axios = require('axios')

class Controller {
    static getWeather (req,res) {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?id=1642911&units=metric&APPID=ba2d23c5ee58440fbaa71f51e48d27fe').
        then(({data})=> {
            let weather = []
            for(var i=0;i<data.list.length;i++){
                // console.log(data.list[i].dt_txt[11]+data.list[i].dt_txt[12])
                let temp = data.list[i].dt_txt[11]+data.list[i].dt_txt[12]
                if (temp=='09') {
                  weather.push(data.list[i])
                }
              }
              res.json({
                  weather
              })
        })
        .catch(err=> {
            res.json({
                message: err.message
            })
        })
    }
}
module.exports = Controller