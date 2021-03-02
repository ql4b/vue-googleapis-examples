# vue-googleapis-examples

This repository holds various examples of usage of the [vue-googleapis](https://github.com/ql4b/vue-googleapis) plugin that simplify usage of the Google APIs n your Vuejs 2.x project.  

# Authentication

There are two examples of how to add google authentication to your Vuejs site.
Both examples does not involve using a backend and everything is done between your frontend and the Google baakend. 

Please make sure you understand how `OAuth2` works, here is some [good documention](https://developers.google.com/identity/protocols/oauth2) from Google

## Basic example

https://github.com/ql4b/vue-googleapis-examples/tree/master/auth-basic

In this basic example you will see how to use the library in a single component and how you can define methods to signin the user and get signed status

## Vuex example

https://github.com/ql4b/vue-googleapis-examples/tree/master/auth-vuex

In the Vuex example you will see how a simple `vuex store module` can be used to manage authentication state and actions. 



