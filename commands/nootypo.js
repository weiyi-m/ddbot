// this command was used to poke fun at a certain Discord user prominent at committing comedic typos
// "[p]nootypo length" shows the number of typos available in nooArray

const Discord = require('discord.js')

module.exports = {
    name: "nootypo",
    description: "Prints out a random typo made by ||noo||.",
    execute(message, args, client) {
        const nooArray = ["h!tertfold,lv", "lfolp", "ODNKLFNISG&SKD:LN SIUVFDSAANODP", "nope no  need for obt", "dimk done", "suyti", "shuiy", "sniepd amd shit", "ur gonna have eot search thru", "thats jsut keyabrod spam", "sevrrt died", "i need 50 roels", "ur a dfuihfds8usdfl,fuck", "FIJFICK", "dont do tahtsdakljfdnaad", "mans gonna boost to get a priv channel justto name it h!tertfold,lv i bet'", "iom la8ughin and u", "sfaijbn dasfabif", "whgy sdklfbjneasdasyg", "basically all of it is kawia", "IMAosaknlfad", "need 3more amari lvls, 2mil ubb, 2mildmc, or a perosn that wants to gib me role to idk", "DofdJNTKD", "NPNPN", "/sheug", "exitwe", "WHAT THE FICL", "NPN'IN", "WHGATEH FUCK.", "u wanged h!tehzhsndksbd pinned", "im bsck", "my broethet", "pn my ustbame", "nODJK A", "yes chta flood", "NOEFLKNJS", "?ae yeeee they r alts yes derifnetwlty", "wekceem", "wleokf,ee", "wekkcke nne'", "wle;opcooeme", "wlweolkcoeme", "wloedoom ee", "welkklcokkem e", "no esnioep", "pls esnipeyyt", "pls ensnyiopemr when", "H!trkjdfsnkj", "i qwiel top stioll; skkioiol;", ";welpc,e", "2jkwopkvcoem", "swekoflem", "h!terwat", "qlwo0dme", "h!tfdbhjjsnkdfnflkjds", "h!teydjxm", "i gotd s34d and 2nd plac ein sppeloing bee", "we;cp,e", "it exporesd", "h!torofcl.", "qleokcnd", "h!l;eladerboarld", "i was gonna do hg!irck", "h!trahch", "i hate u gujk7sd", "h!ytrivk", "THATS KEYBOAD SPMA", "DONT SHOE IT", "FCUL", "lmao tell the person who did that wah t eth fuck is tehri fov", ":L<MAJKBAD", "migrate majoang acc", "i need to migratre", "AND I FOUDN OUT WHY I CANT USE BLC RN", "i havent migrted my accoutn yet", "pls voye", "THATS OVER POWERS", "?ae no hrony", "LMAKDLA>MDKLSMSKLALKDNMLKNSF", "its bc u slept with ur etahchrjsbkad", "wase-", "casn i obby trap me", "?rm 213987s kill coffee by thtowi8nng several turnips at her and then poking her with a pensil", "no im on like 7 popunds of crak", "yo fuck off my girlsdlms;lfmsa", "try and msg me bitched", "BC I AM JESU", "unblcoked", "photoshooped", "not photo odueked"];

        if (args[0] === "length") {
            return message.channel.send(nooArray.length)
        }

        message.channel.send(nooArray[Math.floor(Math.random()*nooArray.length)])

    }
}
