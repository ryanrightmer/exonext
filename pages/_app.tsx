import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App, { AppContext, AppInitialProps } from "next/app";
import withRedux from "next-redux-wrapper";
import configureStore from '../store/store';
import Layout from "../components/layout";

import '../styles/styles.scss'

interface Props extends AppInitialProps {
  store?: App
}

export default withRedux(configureStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }: AppContext) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {},
      }
    }

    render() {
      const { Component, pageProps, store } = this.props as any;
      return (
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      )
    }
  }
)