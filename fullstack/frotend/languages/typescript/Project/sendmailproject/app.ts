let nodemailer=require('nodemailer')

let middleMan=nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'shivanssoni01@gmail.com',
            pass:'#9876Shiv*3w45'
        },
        tls:{
            rejectUnauthorized:false
        }
    }
)

let mailOptions={
    from:'shivanssoni01@gmail.com',
    to:'jipandit5555@gmail.com',
    subject:'Hello, this is a test email',
    text:'Test Email'
}

middleMan.sendMail(mailOptions,(err:any,res:any)=>{
    if(err){
        console.log(err)
    }else{
        console.log("mail sent")
    }
})