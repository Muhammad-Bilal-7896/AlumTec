import React, { useEffect, useState } from "react";
import Head from "next/head";
import '../styles/globals.css'

// import "../ContainerCss/Home.css";
// import "../ContainerCss/Admin.css";
// import "../ContainerCss/Staff.css";

// import "../ComponentCss/Navbar.css";

// import "react-date-picker/dist/DatePicker.css"
// import "react-calendar/dist/Calendar.css"
import "../Styling/About.css"
import "../Styling/AboutUsPage.css"
import "../Styling/careerPage.css"
import "../Styling/Contact.css"
import "../Styling/Details.css"
import "../Styling/Footer.css"
import "../Styling/Header.css"
import "../Styling/Home.css"
import "../Styling/Products.css"
import "../Styling/ProductsPage.css"
import "../Styling/Services.css"
import "../Styling/SlideShow.css"

import { Provider } from 'react-redux'
function Loader(){
  return (
    <div className="loading-wrapper" >
      <br />
      <br />
      <h1 className="text-center">Alumtec Glazing solution Inc.</h1>
      <div className="loading">
        <span />
        <span />
        <span />
        <span />
        <span />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <div className="hideInitially">
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </div> */}
        <h5 className="">ALL RIGHTS RESERVED. INDEXED 2021</h5>
      </div>
    </div>
  );
}

import store from "../store";



function MyApp({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const finishLoading = () => {
    setIsLoaded(true);
  }

  useEffect(() => {
    setTimeout(finishLoading, 1000);
  })
  return <>
    <Head>
      <meta charset="utf-8" />
      <meta httpEquiv="content-language" content="en" />
      <link rel="icon" href="logo.ico" />
      <meta name="description" content="Aluminium curtain wall, windows and doors are our speciality.Glazing solutions are our passion" />
      <meta name="keywords" content="Aluminium, Glazing Solutions, Curtain Wall, Windows , Doors" />
      <meta name="author" content="Muhammad-Bilal-7896" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Alumtec Glazing Solutions Inc | Aluminium, Glazing Solutions, Curtain Wall, Windows , Doors" />
      {/* <!-- Font Awesome --> */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
      {/* <!-- Google Fonts --> */}
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      {/* <!-- MDB --> */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.0.0/mdb.min.css" rel="stylesheet" />

     
      <link rel="apple-touch-icon" href="logo.ico" />
      {/* <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
      --> */}
      {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
      {/* <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.
      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    --> */}

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.0.0/mdb.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.4.1.js"></script>

      <title>Alumtec Glazing Solutions Inc</title>
    </Head>
    <Provider store={store}>
      {(isLoaded == true) ? (
        <>
          <Component {...pageProps} />
        </>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </Provider>
  </>
}

export default MyApp
