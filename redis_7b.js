
// redis, sorted add

const redis = require("redis");
const {promisify} = require('util');
const client = redis.createClient();

client.on("error", function(error) {
  console.error(error);
});
const getAsync = promisify(client.get).bind(client);

var key_head  = "book:";
//
function category_add(){
    client.incr("idx-category", function(err, reply) {
        //    console.log(reply); // 11
            var key = "category:" + String(reply)
            console.log( key );
            client.zadd("sorted-category" , reply , key );
            var item = {
                name:"政治",  
                id: key,
            };
            var json = JSON.stringify( item );
            client.set(key , json , function() {
            });
        });
}
//
function test2(){
    client.incr("idx-book" , function(err, reply) {
        //    console.log(reply); // 11
            var key = key_head + String(reply)
            console.log( key );
            client.zadd("sorted-books", reply , key );
            var item = {
                title:"tit"+ reply,  
                content: "con"+ reply,
                category_id: "category:7",
                id: key,
            };
            var json = JSON.stringify( item );
            client.set(key , json , function() {
            });
        });
}

//
// main()
//
//category_add();
test2();
//client.quit()

