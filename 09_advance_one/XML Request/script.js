/**
 * What is API?
 * 
 * ans :- An API(Application program interface) is just a way of communication between two system which can be written in different-different language.
 * 
 * Before using "fetch" method we used "XMLHTTPREQUEST" to get the data from backend. The "XMLHttpRequest.readyState" property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states.
 * 
 *          Value           State                   Description
 *            0             UNSENT                  Client has been created. open() not called yet.
 *            1             OPENED                  open() has been called.
 *            2             HEADERS RECEIVED        sent() has been called, and header and status are available.
 *            3             LOADING                 Downloading: responseText holds partial data.
 *            4             DONE                    The operation is complete.
 * 
 * XML Request in JavaScript called AJAX.
 */

/**
 * What is the uses "new" keyword?
 * 
 * ans :- The "new" keyword is used to create new instence of an object or a function, JavaScript called Constructor method.
 * 
 * What is Built-in-Object?
 * 
 * ans :- Built-in-object means Global Objects. It refers to object in the Global scope. It has multiple division like:- Value Property, Function Property, Fundamental Object, Error Object, Number and Date, Indexed Collection.....etc
 */

/**
 * What are methods in JS?
 * 
 * ans :- JavaScript methods are action that can performed on objects. A JavaScript method is a property containing a function definition.
 */

//XHR REQUEST

// let username;
// let avatar;
// let followers;
// let following;

const profile = document.querySelector('#logo');
const img = document.createElement('img');
img.setAttribute('src', 'https://avatars.githubusercontent.com/u/143622103?s=400&u=b1f877cf27e27d2b06a7dd0d7c7ab0ac7eabb662&v=4');
profile.appendChild(img);

const userid = document.querySelector('#username');
const follower = document.querySelector('#followers');
const follow = document.querySelector('#following');


const requestURL = 'https://api.github.com/users/kuldeepc18';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);        //GET :: Requesting method,   requesURL :: From where the data comes.
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        // console.log(this.responseText);
        const data = JSON.parse(this.responseText);
        console.log(data);
        let username = data.login;
        userid.innerHTML = username;
        // let avatar = data.avatar_url;
        let followers = data.followers;
        follower.innerHTML = `Followers : ${followers}`
        let following = data.following;
        follow.innerHTML = `Following : ${following}`;

        return data;
    }
}

xhr.send();

/*


MDN Example of the XHRRequest

const xhr = new XMLHttpRequest();
const method = "GET";
const url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = () => {
In local files, status is 0 upon success in Mozilla Firefox
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
The request has been completed successfully
      console.log(xhr.responseText);
    } else {
Oh no! There has been an error with the request!
    }
  }
};
xhr.send();
*/


/*

const requestUrl = 'https://api.github.com/users/kuldeepc18'
    const xhr = new XMLHttpRequest();       //made a object named `xhr`
    xhr.open('GET', requestUrl)             //request has been sent
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            console.log(typeof data);
            console.log(data.followers);
        }
    }
    xhr.send();



Explaination of the above code :

Sure, I'll explain the provided code step by step:

1. const requestUrl = 'https://api.github.com/users/kuldeepc18' : Here, a constant variable `requestUrl` is declared and assigned the value 'https://api.github.com/users/kuldeepc18'. This URL is the endpoint from which data will be fetched.

2. const xhr = new XMLHttpRequest(); : An XMLHttpRequest object named `xhr` is created. This object is used to interact with servers.

3. xhr.open('GET', requestUrl) : The `open()` method of the `xhr` object is called to initialize the request. It takes two parameters: the HTTP method ('GET' in this case) and the URL to which the request is sent (`requestUrl`).

4.  xhr.onreadystatechange = function () { ... } : An event handler is set up to listen for changes in the `xhr` object's `readyState` property. The `readyState` property holds the status of the XMLHttpRequest. The function provided will be called every time the `readyState` changes.

5. console.log(xhr.readyState); : This line logs the current `readyState` of the `xhr` object to the console. The `readyState` property indicates the state of the request (0: request not initialized, 1: server connection established, 2: request received, 3: processing request, 4: request finished and response is ready).

6. if (xhr.readyState === 4) { ... } : This condition checks if the `readyState` is equal to 4, which means the request is complete and the response is ready to be processed.

7. const data = JSON.parse(this.responseText) : If the `readyState` is 4, the response text from the server is parsed as JSON and stored in the `data` variable.

8. console.log(typeof data); : The type of the `data` variable is logged to the console. This is useful for debugging and understanding the structure of the response.

9. console.log(data.followers); : Finally, the number of followers from the `data` object (assuming it contains follower information) is logged to the console.

10. xhr.send(); : The `send()` method is called on the `xhr` object to send the request to the server.

This code sets up an XMLHttpRequest to fetch data from the specified URL, processes the response when it's ready, and logs information about the response to the console.
*/