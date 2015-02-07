var mongoose = require('mongoose')
var mongoCollection = mongoose.model('');

module.exports = {
    index: function(request, response) {
        response.render('index',  {title: "BucketList"});
    },
    // // get from mongodb
    // get: function(request, response) {
    //     mongoCollection.find(function(err, mongodata) {
    //         response.send(mongodata);
    //     });
    // },
   
    // // post to mongodb
    // postAdd: function(request, response) {
    //     var a = new mongoCollection(request.body);
    //     a.save(function(err) {
    //         if(err){
    //             response.send('NO');
    //         } else {
    //             response.send('YES');
    //         }
    //     });
    // },
    // // remove existing customer from mongodb
    // postRemove: function(request, response) {
    //     mongoCollection.remove({_id:request.body._id}, function(err) {
    //         if(err){
    //             response.send('NO');
    //         } else {
    //             response.send('YES');
    //         }
    //     })
    // }
}
