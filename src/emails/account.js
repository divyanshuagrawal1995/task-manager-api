const ApiKey='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'

const sgMail=require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'divyanshuagrawal1995@gmail.com',
        subject:'Thanks for Joining in !',
        text:`welcome to the app ${name} let me know how you get along with the app`
    })

}
const canelationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'divyanshuagrawal1995@gmail.com',
        subject:'Sorry for the Inconvience',
        text:`Goodbye ${name}. we are sorry for Inconvience.How can we kept you on board let me know`
    })
}
module.exports={
    sendWelcomeEmail,
    canelationEmail
}