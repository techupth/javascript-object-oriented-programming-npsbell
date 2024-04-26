class EmailNotification { 
    constructor(notificationId, createdTime, content, receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver} `);
    }
}

class SMSNotification { 
    constructor(notificationId, createdTime, content, phoneNumber){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send(){
        console.log(`Notification has been sent to ${this.phoneNumber} `)
    }
}

let bellEmail = new EmailNotification(111, "09.00", "Hi", "napasorn.tsp@gmail.com");
bellEmail.send();

let bellNumber = new SMSNotification(222, "10.00", "Hi", "011-1234567");
bellNumber.send();