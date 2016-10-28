var Twit = require('twit'); //dependicy to handle the request
var twit_keys = require('./twit_keys');//authentication keys and tokens

var T = new Twit(twit_keys);

var result = []; // array where store the result of the request

function callback(err, data, response) {

  var tweets = data.statuses;

  //build the array
  for (var i=0; i<tweets.length; i++){
  	  console.log(tweets[i].user.name+" "+tweets[i].user.screen_name)
      result.push={
          name:tweets[i].user.name,
          screen_name:tweets[i].user.screen_name,
          img:tweets[i].user.profile_image_url
      }
  }

}

var params = { q: '%23jam3', count: 5}

T.get('search/tweets',params,callback);

module.exports = result;
