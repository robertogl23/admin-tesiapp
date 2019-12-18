export default class Fetch {
    constructor(){
        this.URL_API = 'http://localhost:4000/'
        this.CONFIG = {}
    }
    async getApi() {
        let response = await fetch(this.URL_API)
        if (response.ok) return await response.json()
        throw new Error(response.status)
    }
    async postApiLogin(data = {}){
        console.log(data)
        let response = await fetch(`${this.URL_API}admin/login`,{
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
        return await response.json()
    }
}