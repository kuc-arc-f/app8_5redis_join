//

//const mysql = require('promise-mysql');

export default {
    convert_array:function(get_items){
        var ret = [];
        get_items.forEach(async function (get_item) {
            var row = JSON.parse(get_item || '[]')
    //        console.log( row )
            ret.push(row)
        });
        return ret;
    },
    get_books_list:function(items){
        var ret = [];
        items.forEach(function(item){
            var row = JSON.parse(item || '[]')
    //        console.log( row );
            ret.push( row )
        });
        return ret;        
    },
    get_category_keys: function(items){
        var ret = [];
        items.forEach(function(item){
            ret.push( item.category_id )
        });
        return ret;
    },
    get_category_items: function(items){
        var ret = [];
        items.forEach(function(item){
            var row = JSON.parse(item || '[]')
            ret.push( row )
        });
        return ret;
    },
    get_category_name: function(key, category_items){
        var ret = "";
        category_items.forEach(function(category){
            if(category.id == key){
    // /            console.log(category.title )
                ret = category.name;
            }
        });
        return ret;
    },
    func1 :function(){
        console.log('#_func1aa')
    },

}
