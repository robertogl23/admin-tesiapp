
import ApiFetch from '../../class/ApiFetch'
export default class Actions extends ApiFetch {
    constructor(){
        super();
        this.dataAdmin = []
        this.action1 = 'Ingresar'
    }
    async fetchApi(event){
        event.preventDefault()
        console.log(await this.getApi()) 
    }
    async postLogin(values,ld,fct){
        
        ld()
        
        let data = {
            enrollment: values.en,
            pass: values.pass
        }
        this.dataAdmin = await this.postApiLogin(data)
        console.log(this.dataAdmin)
        if(this.dataAdmin.status === true){
            fct(this.dataAdmin.adminDB)
            window.location.href = '/home'
            return
        }
        return this.dataAdmin 

    }

}