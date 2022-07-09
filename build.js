var fs=require("fs")
var build
for(var i=0;i<2;i++)
    fs.readdir(__dirname+"/reports/"+["bugs","exploits"][i],(e,d)=>{
        if(e)return
        for(var _i;_i<d.length;_i++)
            build.push(fs.readFile(__dirname+"/reports/"+["bugs/","exploits/"][i]+d[_i]))})
if(build)
    fs.writeFile(__dirname+"/index.html",fs.readFileSync(__dirname+"/resources/index.html").replace("{}",build),(e)=>{
        if(e)return})
//#36393f