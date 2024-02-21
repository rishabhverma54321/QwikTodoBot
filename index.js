import {Telegraf} from 'telegraf'
import 'dotenv/config'

const bot = new Telegraf(process.env.Token);


bot.start((ctx)=>{
    // console.log(ctx)
   const name = ctx.from?.first_name;
   ctx.reply(`Hi ${name}, this bot is at your service 🙇`)
})

bot.use((ctx, next)=>{
    // ctx.reply("how are you!")
    ctx.reply('This command is not valid 😔' )
})

bot.launch()