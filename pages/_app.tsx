import React from "react"
import App from "next/app"
import { CacheProvider } from '@emotion/core'
import { ApolloProvider } from "@apollo/react-hooks"
import withApollo from "../hooks/withApollo"
import { ApolloClient, NormalizedCacheObject } from "apollo-boost"

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'

import { globalStyles } from '../shared/styles'

// since "apollo" isn't a native Next.js prop we have to declare it's type.
interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}

class NextJsApp extends App<IProps> {
  render() {
	const { Component, pageProps, apollo } = this.props
	
    return (
	  <ApolloProvider client={apollo}>
        <CacheProvider value={cache}>
          {globalStyles}
          <Component {...pageProps} />
        </CacheProvider>
	  </ApolloProvider>
    )
  }
}

export default withApollo(NextJsApp)