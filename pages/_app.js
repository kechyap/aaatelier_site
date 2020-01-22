import React from "react";
import Navigation from "../components/Navigation";
import Foot from "../src/components/Foot";

let App = () => (
  <>
    <Component />

    <style jsx global>{`
      /* styles for html tags in all pages */
      html {
        --main-yellow: rgb(250, 189, 52);
        --brown: rgba(128, 107, 80, 0.8);
        --grey-background: rgba(154, 140, 120, 0.5);

        --pink1: rgba(255, 230, 225, 1);
        --pink2: rgba(255, 190, 180, 0.8);
        --pink3: rgba(200, 150, 150, 1);
        --pink33: rgb(230, 130, 130, 1);
        --pink333: rgb(230, 150, 150, 1);
        --pink4: rgba(190, 110, 110, 1);
        --pink44: rgb(220, 150, 140);
        --pink444: rgb(255, 150, 160);
        --pink5: rgba(215, 200, 200, 1);

        --xs: 0;
        --sm: 576;
        --md: 768;
        --lg: 992;
        --xl: 1200;

        font-size: 16px;
      }

      body {
        margin: 0;
        color: var(--pink3);
        background-color: rgb(215, 200, 200);
        font-family: "Titillium Web", "Noto Sans KR", sans-serif;
        line-height: 2.3rem;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      hr {
        border: none;
        border-bottom: 1px solid var(--pink3);
      }

      h1,
      h3,
      h5,
      h6 {
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 0.2em;
        padding-bottom: 0.5em;
        font-weight: 400;
        color: var(--pink4);
      }

      h2 {
        color: var(--pink4);
        font-weight: 400;
      }

      h4 {
        font-weight: 400;
        font-size: 1.1rem;
        color: var(--pink4);
      }

      a {
        color: var(--pink3);
      }

      hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: none;
        border-bottom: 1px solid var(--pink3);
      }

      .underline {
        text-decoration: underline;
        color: var(--pink4);
        font-size: 1.1rem;
        padding-bottom: 1rem;
        padding-top: 2rem;
      }

      ul {
        padding-left: 1.3rem;
        line-height: 1.3rem;
      }

      li {
        padding-bottom: 0.3rem;
        color: var(--pink3);
        font-size: 0.9rem;
        line-height: 1.7rem;
      }

      p {
        font-weight: 300;
        font-size: 0.95rem;
        line-height: 1.9rem;
        text-align: justify;
      }

      b {
        font-weight: 400;
        font-size: 1.05rem;
      }

      /* styles for classes in all pages  */
      .hide-xs {
        display: none;
      }
      .show-xs {
        display: block;
      }

      @media (min-width: 576px) {
        .hide-xs {
          display: block;
        }
        .show-xs {
          display: none;
        }
      }

      .hide-xs-sm {
        display: none;
      }
      .show-xs-sm {
        display: block;
      }

      @media (min-width: 768px) {
        .hide-xs-sm {
          display: block;
        }
        .show-xs-sm {
          display: none;
        }
      }

      .text-align-justify {
        text-align: justify;
      }
      .text-align-centered {
        text-align: center;
      }
      .text-align-right {
        text-align: right;
      }
      .text-align-left {
        text-align: left;
      }

      .font-dosis {
        font-family: "Dosis", "Noto Sans KR", sans-serif;
      }

      .font-titillium {
        font-family: "Titillium Web", "Noto Sans KR", sans-serif;
      }

      .weight-300 {
        font-weight: 300;
        font-size: 0.9rem;
      }
      .weight-400 {
        font-weight: 400;
      }
      .weight-500 {
        font-weight: 500;
      }
      .weight-700 {
        font-weight: 700;
      }

      .container-fluid {
        max-width: 1200px;
        margin: 0 auto;
      }

      .p-1 {
        padding-top: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
        padding-left: 0rem;
      }
      .p-1 {
        padding-top: 0.5rem;
        padding-right: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0.5rem;
      }
      .p-2 {
        padding-top: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
        padding-left: 1rem;
      }
      .p-3 {
        padding-top: 2rem;
        padding-right: 2rem;
        padding-bottom: 2rem;
        padding-left: 2rem;
      }
      .p-4 {
        padding-top: 3.5rem;
        padding-right: 3.5rem;
        padding-bottom: 3.5rem;
        padding-left: 3.5rem;
      }
      .p-5 {
        padding-top: 5rem;
        padding-right: 5rem;
        padding-bottom: 5rem;
        padding-left: 5rem;
      }
      .px-0 {
        padding-right: 0rem;
        padding-left: 0rem;
      }
      .px-1 {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
      }
      .px-2 {
        padding-right: 1rem;
        padding-left: 1rem;
      }
      .px-3 {
        padding-right: 2rem;
        padding-left: 2rem;
      }
      .px-4 {
        padding-right: 3.5rem;
        padding-left: 3.5rem;
      }
      .px-5 {
        padding-right: 5rem;
        padding-left: 5rem;
      }
      .py-0 {
        padding-top: 0rem;
        padding-bottom: 0rem;
      }
      .py-1 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
      .py-2 {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      .py-3 {
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
      .py-4 {
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;
      }
      .py-5 {
        padding-top: 5rem;
        padding-bottom: 5rem;
      }
      .pt-0 {
        padding-top: 0rem;
      }
      .pt-1 {
        padding-top: 0.5rem;
      }
      .pt-2 {
        padding-top: 1rem;
      }
      .pt-3 {
        padding-top: 2rem;
      }
      .pt-4 {
        padding-top: 3.5rem;
      }
      .pt-5 {
        padding-top: 5rem;
      }
      .pr-0 {
        padding-right: 0rem;
      }
      .pr-1 {
        padding-right: 0.5rem;
      }
      .pr-2 {
        padding-right: 1rem;
      }
      .pr-3 {
        padding-right: 2rem;
      }
      .pr-4 {
        padding-right: 3.5rem;
      }
      .pr-5 {
        padding-right: 5rem;
      }
      .pb-0 {
        padding-bottom: 0rem;
      }
      .pb-1 {
        padding-bottom: 0.5rem;
      }
      .pb-2 {
        padding-bottom: 1rem;
      }
      .pb-3 {
        padding-bottom: 2rem;
      }
      .pb-4 {
        padding-bottom: 3.5rem;
      }
      .pb-5 {
        padding-bottom: 5rem;
      }
      .pl-0 {
        padding-left: 0rem;
      }
      .pl-1 {
        padding-left: 0.5rem;
      }
      .pl-2 {
        padding-left: 1rem;
      }
      .pl-3 {
        padding-left: 2rem;
      }
      .pl-4 {
        padding-left: 3.5rem;
      }
      .pl-5 {
        padding-left: 5rem;
      }

      .m-1 {
        margin-top: 0rem;
        margin-right: 0rem;
        margin-bottom: 0rem;
        margin-left: 0rem;
      }
      .m-1 {
        margin-top: 0.5rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
      }
      .m-2 {
        margin-top: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        margin-left: 1rem;
      }
      .m-3 {
        margin-top: 2rem;
        margin-right: 2rem;
        margin-bottom: 2rem;
        margin-left: 2rem;
      }
      .m-4 {
        margin-top: 3.5rem;
        margin-right: 3.5rem;
        margin-bottom: 3.5rem;
        margin-left: 3.5rem;
      }
      .m-5 {
        margin-top: 5rem;
        margin-right: 5rem;
        margin-bottom: 5rem;
        margin-left: 5rem;
      }
      .mx-0 {
        margin-right: 0rem;
        margin-left: 0rem;
      }
      .mx-1 {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
      }
      .mx-2 {
        margin-right: 1rem;
        margin-left: 1rem;
      }
      .mx-3 {
        margin-right: 2rem;
        margin-left: 2rem;
      }
      .mx-4 {
        margin-right: 3.5rem;
        margin-left: 3.5rem;
      }
      .mx-5 {
        margin-right: 5rem;
        margin-left: 5rem;
      }
      .my-0 {
        margin-top: 0rem;
        margin-bottom: 0rem;
      }
      .my-1 {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
      .my-2 {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      .my-3 {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
      .my-4 {
        margin-top: 3.5rem;
        margin-bottom: 3.5rem;
      }
      .my-5 {
        margin-top: 5rem;
        margin-bottom: 5rem;
      }
      .mt-0 {
        margin-top: 0rem;
      }
      .mt-1 {
        margin-top: 0.5rem;
      }
      .mt-2 {
        margin-top: 1rem;
      }
      .mt-3 {
        margin-top: 2rem;
      }
      .mt-4 {
        margin-top: 3.5rem;
      }
      .mt-5 {
        margin-top: 5rem;
      }
      .mr-0 {
        margin-right: 0rem;
      }
      .mr-1 {
        margin-right: 0.5rem;
      }
      .mr-2 {
        margin-right: 1rem;
      }
      .mr-3 {
        margin-right: 2rem;
      }
      .mr-4 {
        margin-right: 3.5rem;
      }
      .mr-5 {
        margin-right: 5rem;
      }
      .mb-0 {
        margin-bottom: 0rem;
      }
      .mb-1 {
        margin-bottom: 0.5rem;
      }
      .mb-2 {
        margin-bottom: 1rem;
      }
      .mb-3 {
        margin-bottom: 2rem;
      }
      .mb-4 {
        margin-bottom: 3.5rem;
      }
      .mb-5 {
        margin-bottom: 5rem;
      }
      .ml-0 {
        margin-left: 0rem;
      }
      .ml-1 {
        margin-left: 0.5rem;
      }
      .ml-2 {
        margin-left: 1rem;
      }
      .ml-3 {
        margin-left: 2rem;
      }
      .ml-4 {
        margin-left: 3.5rem;
      }
      .ml-5 {
        margin-left: 5rem;
      }

      .no-pm {
        margin-top: 0 !important;
        margin-right: 0 !important;
        margin-bottom: 0 !important;
        margin-left: 0 !important;
        padding-top: 0 !important;
        padding-right: 0 !important;
        padding-bottom: 0 !important;
        padding-left: 0 !important;
      }

      * {
        box-sizing: border-box;
      }
      p4 {
        color: var(--pink4);
        font-size: 1.1rem;
      }
      .score {
        width: 100%;
        background-color: rgba(120, 75, 105, 1);
        margin-top: 1.2rem;
      }

      .scoreT {
        line-height: 0.9rem;
        font-size: 0.9rem;
        margin-top: 1rem;
      }

      .scoreL {
        line-height: 0.9rem;
        font-size: 1.08rem;
        margin-top: 1rem;
        color: var(--pink4);
      }

      .skills {
        text-align: right;
        padding-right: 0.5rem;
        line-height: 0.7rem;
        font-size: 0.8rem;
        color: rgb(180, 90, 100);
      }

      .bar0 {
        width: 1%;
      }

      .bar1 {
        width: 20%;
        background-color: rgba(200, 100, 110, 0.3);
      }

      .bar2 {
        width: 40%;
        background-color: rgba(210, 110, 120, 0.4);
      }

      .bar3 {
        width: 60%;
        background-color: rgba(220, 130, 140, 0.5);
      }

      .bar4 {
        width: 80%;
        background-color: rgba(230, 150, 160, 0.8);
      }

      .bar5 {
        width: 100%;
        background-color: rgba(255, 190, 200, 1);
      }

      .box {
        border-radius: 3px;
        font-size: 1.2rem;
        font-weight: 600;
      }

      .sc0 {
        background-color: rgba(200, 100, 110, 0.3);
      }

      .sc1 {
        background-color: rgba(210, 110, 120, 0.4);
      }

      .sc2 {
        background-color: rgba(220, 130, 140, 0.5);
      }

      .sc3 {
        background-color: rgba(230, 150, 160, 0.8);
      }

      .sc4 {
        background-color: rgba(255, 190, 200, 1);
      }

      .st2 {
        opacity: 0.6;
        fill: #f16c6d;
      }
    `}</style>
  </>
);

export default App;
