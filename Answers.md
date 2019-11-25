1. What problem does the context API help solve?

The Context API is stable, more efficient and production ready.
Context API is a way to enable components to share some data without explicitly passing via each component manually.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is actually an object, not a class that hold the state of the application.
Actions are plain JavaScript objects that describe what happened, but don’t describe how the app state changes.
Reducers are pure functions that define how the app state changes. They are used to recalculate the new application state or, at least a part of it.
“Single Source Of Truth”, which means that we have only one place (Store) where we store the only state for the whole application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local. Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it kind of like a database so long as they hook into it. 
Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware created by Dan Abramov, that provides the ability to handle asynchronous operations inside our Action Creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My best state management is Context API because it is not as confusing as Redux and there is less code for use. Using the context API you can share values between components without having to pass props.
