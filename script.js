// JavaScript code

const tweetForm = document.getElementById('tweetForm');
const usernameInput = document.getElementById('username');
const tweetTextInput = document.getElementById('tweetText');
const newsfeed = document.getElementById('newsfeed');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = usernameInput.value;
    const tweetText = tweetTextInput.value;
    
    if (username && tweetText) {
        const tweet = createTweet(username, tweetText);
        newsfeed.insertBefore(tweet, newsfeed.firstChild);
        
        // Clear input fields
        usernameInput.value = '';
        tweetTextInput.value = '';
    }
});

function createTweet(username, tweetText) {
    const tweetDiv = document.createElement('div');
    tweetDiv.classList.add('tweet');
    
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.textContent = username;
    
    const tweetContentDiv = document.createElement('div');
    tweetContentDiv.classList.add('tweet-content');
    tweetContentDiv.textContent = tweetText;
    
    const likeButton = document.createElement('button');
    likeButton.textContent = 'Like';
    likeButton.addEventListener('click', function () {
        tweetDiv.style.backgroundColor = 'pink'; // Change color on like
    });
    
    const retweetButton = document.createElement('button');
    retweetButton.textContent = 'Retweet';
    retweetButton.addEventListener('click', function () {
        const clonedTweet = tweetDiv.cloneNode(true);
        newsfeed.insertBefore(clonedTweet, newsfeed.firstChild); // Add a clone on retweet
    });
    
    tweetDiv.appendChild(userDiv);
    tweetDiv.appendChild(tweetContentDiv);
    tweetDiv.appendChild(likeButton);
    tweetDiv.appendChild(retweetButton);
    
    return tweetDiv;
}
