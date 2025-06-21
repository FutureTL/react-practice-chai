Here I will be including all study material plus my learnings while studying react.
Two libraries- react and reactDOM are used for manipulating the DOM of the web.
- For mobile applications, we use react and react-native.

-React is our core foundational library which takes all the references. And reactDOM is its implementation in web. On the other hand, react-native is its implementation in mobile devices.

DOM stands document object model and web has its own DOM, that means we represent the browser in a DOM like structure. 
-An interesting thing is that react creates its own DOM called Virtual DOM.

- Very interesting concept: I am not working with create-react-app only with vite. But in the series, hitesh compared the two and we can understand from there why create-react-app is not prefered to use now. 
- In index.html file in the create-react-app, script to run js is not present. So, upon inspecting the package.json file we see it has, react-scripts, which in the backend runs all the scripts and loads the js scripts in html page. VS
- in index.html in vite implementation , the script file is directly included in the html file. So this becomes a bit light weight, as unnecessarily the scripts are also not getting loaded.

- Impt point: 
1. In vite, if we keep the file name as .js , it may cause an error. So .jsx must be kept even if the file contains purely javascript only.
2. The name of the components must be uppercase. Components are nothing but functions we create in a file and then maybe export them to another file.
3. Only one element can be returned in jsx file. If you want to return more than 1 element , wrap it in an empty element tag and put as many in it. Then, technically we are returning just 1 element.

Correct way: This is called a fragment
<>
<p>chai aur code</p>
<h1>This is my first time learning react!</h1>
</>

Incorrect way:
<p>chai aur code</p>
<h1>This is my first time learning react!</h1>

Why hooks are used: react controls the UI of our application. Suppose we have a variable has has been written at a number of places in our code, then react will use hooks to propogate the change made to that variable to all the locations where it is located. 
useState hook: kind of does what I have described above.

Some important concepts of React( can be further elaborated):
    


Website to get good cards- [LINK](https://www.devui.in/)
we can also install an extension called react snippets .