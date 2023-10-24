# React + Vite

Deployed MyAwsomeStore

https://652663930649102862db4830--visionary-bonbon-a4c3e8.netlify.app/


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


NOTES FROM 10/17    

General notes: 
- Cart components: there is a lot of duplication and you can consolidate these.
    - One method: You can create an `api.js` file in your `src` folder that holds all of the API methods (all of your `fetchData` functions) and import the ones you need.
    - You can then create one file with your actual component (the jsx following the return statement - something like Cart)
- getAllCarts.jsx - I think there is some old code in here that is throwing you off. In this component, it could help to pseudocode what you are trying to do first (write out each step you want to happen) and then write code. 
- productDetails.jsx- this component is using some hooks that it will not work. Doesn't really look like the rest of the app, so that could be why it's not working. This is not a quick fix, needs more dedicated attention. 

Next steps ... 
[ ] Fetch all users and store in state (in App.jsx, preferably)
[ ] Pass `users`, `setUsers`, `user`, `setUser`, etc (whichever you need to access in the component) as props to the components via your routes (App.jsx)
[ ] In login component, match the user that is logging in with to one of the users in your users state. Then, you can `setUser` when you set the token in your `handleSubmit` function to make the user information accessible across all connected components.
[ ] In cart component, you can EITHER use the `cartById` component with the user's ID OR you can use `getAllCarts` and filter to the logged in user's cart (Up to you, but I recommend using `cartByID`. The code is much clearer and easier to understand in that component and it will need less editing). However, BEFORE loading a cart from the API, check to see if a cart for this user is stored in local storage - this will contain more up to date data. 
    [ ] **NOTE-when adding/removing items from cart, you will need to update the cart state NOT the API (the api will not store any changes). 
[ ] When the user logs out, make sure to clear the user's information from the state AND from local storage.


