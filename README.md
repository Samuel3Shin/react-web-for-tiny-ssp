# React-Web-for-Tiny-SSP

This is a simple web application developed using React to demonstrate the functioning of Tiny-SSP-with-Open-RTB-spec project. It interacts with the SSP to request an ad, then displays the ad response.

## Description

The application makes a POST request to the `/bid` endpoint of the SSP server with an example bid request payload. It then receives the bid response, and displays the returned ad.

## Code Structure

The main component is `App`, which is defined in `src/App.js`. In this file, the `useEffect` hook is used to make a POST request to the SSP server as soon as the component is mounted. 

The `useState` hook is used to maintain three pieces of state: 

1. `ad`: Stores the bid response from the SSP server.
2. `loading`: A boolean flag to indicate whether the ad request is in progress.
3. `error`: Stores any error that occurred during the ad request.

## How to Run

Before running the React application, ensure that the SSP server is running and accessible at `http://localhost:8080`. You can start the SSP server by running `docker-compose up` from the root directory of the Tiny-SSP-with-Open-RTB-spec project.

Then, you can start the React application by running the following commands from the root directory of this project:

```bash
docker-compose build --no-cache
docker-compose up
```
The application will be available at http://localhost:3000.

## How to Use
Once the application is running, you should see the ad displayed on the page, along with the ad ID, price, and impression URL. If the ad request is in progress, you will see a "Loading..." message. If an error occurs during the ad request, the error message will be displayed.

## Future Improvements
Future updates to this application could include more interactive features, such as the ability to customize the bid request payload, or to manually trigger ad requests.