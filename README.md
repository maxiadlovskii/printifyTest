# Printify frontend homework


## Install

```sh
npm i
```

## Run

Run development server

```sh
npm start
```

Open browser and go to http://localhost:4200

## About

#### Structure
App components separated to 4 parts:

- pages
- containers
- view
- ui

<b>Pages</b> contains components that connect directly to the router. This approach allows you to quickly customize and find the pages you need.

<b>Containers</b> contain application logic. All calculations and connections to services are contained here. The given approach allows not to scatter logic on the application, and to keep it in specially allocated components. This simplifies the development and the search for possible problems.

<b>View</b>. This component type describes the properties obtained and renders the layout.  Because there is no logic in the components, these components allows them to be reused.

<b>ui</b> This type of component is a simple component for the user interface. These are wrappers over existing components from other libraries and specialize to application needs.


<b>By the same principle, are also separated   modules</b>

#### User flow
 
On clicking "Import Orders" button open modal window. Order and Product can be filtrated and chosen just by clicking. Then user can chose type of product. I added product step, because i don't understand what should be after choosing order. On every step I added some request to static json file. As we have all chosen data by user we could use it to send to server.    