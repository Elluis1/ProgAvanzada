var COIN_API_SDK = (function () {
    if (apiKey === void 0) {apiKey = null;}
    this.apiKey = ""
    this.headers = {}
    this.url = "https://rest-test.coinapi.io/v1/exchanges"
    if(apiKey) {
        this.apiKey = apiKey
        this.headers = {
            "X-CoinAPI-key": apiKey
        }
        this.url = "https://rest.coinapi.io"
    }
})

const apiKey = '51BE0883-2A87-434D-B9C3-FD0862FAED57'