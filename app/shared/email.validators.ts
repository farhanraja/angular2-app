import {Control} from "angular2/common";

export class EmailValidators{
    static validEmail(control: Control){
        var email = control.value;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!re.test(email)){
            return {"invalid-email": true};
        }
        return null;
    }
}