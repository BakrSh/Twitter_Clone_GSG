var tweets = {0:{"username":'test',"tweet_content":'Dear visitor Welcome to my first project<br/>I hope you like this simple project'}}




var tweet_id = 1;
function newElement() {
  var today = new Date();
  var time_now = today.getHours() + ":" + today.getMinutes()
  var new_tweet = document.createElement("div");
  new_tweet.className = "tweet";
  new_tweet.id = tweet_id+1;
  new_tweet.innerHTML =  '<img class="tweet_logo" src="images/avatar.png" />';
  var tweet_main = document.createElement("div");
  tweet_main.className = "tweet_main";
  new_tweet.appendChild(tweet_main);
  var tweet_header = document.createElement("div");
  tweet_header.className = "tweet_header";
  tweet_main.appendChild(tweet_header);
  var username = document.getElementById("myUsername").value;          
  var tweet_name = document.createElement("div");
  tweet_name.className = "tweet_name";
  tweet_name.innerHTML = username;
  tweet_header.appendChild(tweet_name);
  var tweet_slug = document.createElement("div");
  tweet_slug.className = "tweet_slug";
  tweet_header.appendChild(tweet_slug);
  tweet_slug.innerHTML = username; 
  var tweet_time = document.createElement("div");
  tweet_time.className = "tweet_time";
  var time = document.createTextNode(time_now);
  tweet_time.appendChild(time); 
  tweet_header.appendChild(tweet_time); 
  var content = document.createElement("div");
  content.className = "content";
  text = document.getElementById("myInput").value; 
  content.innerHTML = text;
  tweet_main.appendChild(content);
  br = document.createElement("br");
  tweet_main.appendChild(br);
  tweet_icon = document.createElement("div");
  tweet_icon.className = "tweet_icon";
  tweet_icon.innerHTML = '<i class="fas fa-heart" id="love_bttn" onclick="click_love(this)"></i><i class="fas fa-retweet" id="rt_bttn" onclick="retweet(0)"></i>'.replaceAll('0',tweet_id+1);
  tweet_main.appendChild(tweet_icon);
  document.getElementById("tweet_container").appendChild(new_tweet);
  document.getElementById("myInput").value = "";
    document.getElementById("myUsername").value = "";
  tweets[tweet_id+1] = {"username":username,"tweet_content":text};
  console.log(tweets);
  tweet_id+=1;
}

function click_love(tweet_id){


if (tweet_id.style.color!="red") 
{
  tweet_id.style.color="red"
}
else
{
  tweet_id.style.color="#dbe3eb"
}

}

function retweet(tw_id){
  var today = new Date();
  var time_now = today.getHours() + ":" + today.getMinutes();

  new_id = tweet_id+ 1;
  console.log(new_id);
  all_content = '<div class="tweet" id="#id"><img class="tweet_logo" src="images/avatar.png" /><div class="tweet_main"><div class="tweet_header"><div class="tweet_name">#username</div><div></div><div class="tweet_slug">@ #username</div><div class="tweet_time">#time</div></div><div class="content">@content</div><br/><div class="tweet_icon"><i class="fas fa-heart" id="love_bttn" onclick="click_love(this)"></i><i class="fas fa-retweet" id="rtb_ttn" onclick="retweet(0)"></i></div></div></div>'.replaceAll('#username',tweets[tw_id].username).replace('@content',tweets[tw_id].tweet_content).replaceAll("#id",new_id).replace('#time',time_now).replace('0',new_id);
  document.getElementById("tweet_container").insertAdjacentHTML('afterbegin',all_content);
  tweet_id += 1;
}

